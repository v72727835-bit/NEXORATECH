import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function HeroBackground3D() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

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

    // Ribbon geometry (flat ribbon with width)
    const SEGMENTS = 260;
    const RIBBON_WIDTH = 1.6;
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
        uOpacity: { value: 0.7 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vNormal;

        vec3 palette(float t) {
          vec3 purple = vec3(0.424, 0.275, 0.910);
          vec3 pink   = vec3(0.961, 0.420, 0.616);
          vec3 blue   = vec3(0.290, 0.549, 0.957);
          vec3 orange = vec3(0.980, 0.620, 0.275);
          float p = fract(t) * 4.0;
          if (p < 1.0) return mix(purple, pink, p);
          if (p < 2.0) return mix(pink, blue, p - 1.0);
          if (p < 3.0) return mix(blue, orange, p - 2.0);
          return mix(orange, purple, p - 3.0);
        }

        void main() {
          float t = vUv.y * 0.8 + uTime * 0.05;
          vec3 color = palette(t);
          float light = 0.7 + 0.3 * abs(vNormal.y);
          color *= light;
          float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
          color = mix(color * 0.6, color, edge);
          float center = 1.0 - abs(vUv.x - 0.5) * 2.0;
          color += center * 0.1;
          gl_FragColor = vec4(color, uOpacity);
        }
      `,
      side: THREE.DoubleSide,
      transparent: true
    });

    const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    scene.add(ribbon);

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
