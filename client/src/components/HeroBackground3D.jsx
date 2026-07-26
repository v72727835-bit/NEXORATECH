import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function HeroBackground3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const SEGMENTS = 260;
    const RIBBON_WIDTH = 1.8;
    const positions = new Float32Array((SEGMENTS + 1) * 2 * 3);
    const uvs = new Float32Array((SEGMENTS + 1) * 2 * 2);
    const indices = [];
    for (let i = 0; i < SEGMENTS; i++) {
      const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
      indices.push(a, b, d, a, d, c);
    }
    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setIndex(indices);
    ribbonGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    ribbonGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    const ribbonMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.35 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPos;

        void main() {
          float pulse = 0.6 + 0.4 * sin(uTime * 0.5 + vUv.y * 4.0);

          vec3 lightColor = vec3(0.75, 0.82, 0.95);
          vec3 white      = vec3(0.90, 0.92, 1.00);
          vec3 paleBlue   = vec3(0.60, 0.72, 0.95);
          vec3 softPink   = vec3(0.85, 0.70, 0.90);

          float t = vUv.y * 0.6 + uTime * 0.03;
          float p = fract(t) * 4.0;
          vec3 base;
          if (p < 1.0) base = mix(lightColor, white, p);
          if (p >= 1.0 && p < 2.0) base = mix(white, paleBlue, p - 1.0);
          if (p >= 2.0 && p < 3.0) base = mix(paleBlue, softPink, p - 2.0);
          if (p >= 3.0) base = mix(softPink, lightColor, p - 3.0);

          float light = 0.8 + 0.2 * abs(vNormal.y);
          base *= light * pulse;

          float edge = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
          base = mix(base * 0.4, base, edge);

          float shimmer = sin(vUv.y * 30.0 + uTime * 1.5) * 0.5 + 0.5;
          shimmer *= sin(vUv.x * 20.0 + uTime * 0.8) * 0.5 + 0.5;
          base += shimmer * 0.15;

          float glow = sin(uTime * 0.7 + vUv.y * 6.0) * 0.5 + 0.5;
          base += glow * 0.08;

          float glassSheen = pow(1.0 - abs(vUv.x - 0.5) * 2.0, 3.0);
          base += glassSheen * 0.12;

          base = clamp(base, 0.0, 1.0);

          float finalOpacity = uOpacity * (0.7 + 0.3 * sin(uTime * 0.3 + vUv.y * 2.0));

          gl_FragColor = vec4(base, finalOpacity);
        }
      `,
      side: THREE.DoubleSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    scene.add(ribbon);

    const sparkleGeo = new THREE.BufferGeometry();
    const sparkleCount = 120;
    const sparklePos = new Float32Array(sparkleCount * 3);
    const sparkleSizes = new Float32Array(sparkleCount);
    for (let i = 0; i < sparkleCount; i++) {
      sparklePos[i*3] = (Math.random() - 0.5) * 20;
      sparklePos[i*3+1] = (Math.random() - 0.5) * 8;
      sparklePos[i*3+2] = (Math.random() - 0.5) * 12;
      sparkleSizes[i] = 0.02 + Math.random() * 0.06;
    }
    sparkleGeo.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));
    sparkleGeo.setAttribute('size', new THREE.BufferAttribute(sparkleSizes, 1));

    const sparkleMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          float twinkle = sin(uTime * 1.5 + position.x * 5.0 + position.y * 3.0) * 0.5 + 0.5;
          vAlpha = twinkle * 0.6 + 0.2;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPos.z) * (0.7 + 0.3 * twinkle);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float glow = 1.0 - smoothstep(0.0, 0.5, d);
          vec3 color = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 1.0, 1.0), glow);
          gl_FragColor = vec4(color, vAlpha * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const sparkles = new THREE.Points(sparkleGeo, sparkleMat);
    scene.add(sparkles);

    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3();
    const binormal = new THREE.Vector3();

    function updateRibbon(time) {
      const pts = [];
      const N = 20;
      for (let i = 0; i <= N; i++) {
        const u = i / N;
        const x = (u - 0.5) * 18;
        const y = Math.sin(u * Math.PI * 2.2 + time * 0.4) * 1.6
               + Math.sin(u * Math.PI * 4.0 + time * 0.25) * 0.4;
        const z = Math.cos(u * Math.PI * 2.2 + time * 0.4) * 2.8
               + Math.cos(u * Math.PI * 3.5 + time * 0.3) * 0.8;
        pts.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const posAttr = ribbonGeo.attributes.position.array;
      const uvAttr = ribbonGeo.attributes.uv.array;

      for (let i = 0; i <= SEGMENTS; i++) {
        const u = i / SEGMENTS;
        const point = curve.getPoint(u);
        const tangent = curve.getTangent(u);
        side.crossVectors(tangent, up);
        if (side.lengthSq() < 1e-5) side.set(1, 0, 0);
        side.normalize();
        binormal.crossVectors(tangent, side).normalize();
        const twist = u * Math.PI * 3.0 + time * 0.3;
        const c = Math.cos(twist), s = Math.sin(twist);
        const ox = side.x * c + binormal.x * s;
        const oy = side.y * c + binormal.y * s;
        const oz = side.z * c + binormal.z * s;
        const half = RIBBON_WIDTH / 2;
        posAttr[i*6]   = point.x - ox*half; posAttr[i*6+1] = point.y - oy*half; posAttr[i*6+2] = point.z - oz*half;
        posAttr[i*6+3] = point.x + ox*half; posAttr[i*6+4] = point.y + oy*half; posAttr[i*6+5] = point.z + oz*half;
        uvAttr[i*4] = 0; uvAttr[i*4+1] = u; uvAttr[i*4+2] = 1; uvAttr[i*4+3] = u;
      }
      ribbonGeo.attributes.position.needsUpdate = true;
      ribbonGeo.attributes.uv.needsUpdate = true;
      ribbonGeo.computeVertexNormals();
    }

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const handleMouse = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouse);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let time = 0;
    let lastTime = performance.now();
    let animId;

    function tick(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      time += dt;

      ribbonMat.uniforms.uTime.value = time;
      sparkleMat.uniforms.uTime.value = time;
      updateRibbon(time);

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} style={{
      position: 'absolute', inset: 0, zIndex: 0,
      pointerEvents: 'none', overflow: 'hidden'
    }} />
  );
}

export default HeroBackground3D;
