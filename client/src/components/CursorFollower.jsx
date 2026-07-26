import { useEffect, useRef } from 'react';

function CursorFollower() {
  const coreRef = useRef(null);
  const glowRef = useRef(null);
  const cloudRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let coreX = 0, coreY = 0;
    let glowX = 0, glowY = 0;
    let cloudX = 0, cloudY = 0;

    const onMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      coreX += (mouseX - coreX) * 0.3;
      coreY += (mouseY - coreY) * 0.3;
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;
      cloudX += (mouseX - cloudX) * 0.08;
      cloudY += (mouseY - cloudY) * 0.08;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate(${coreX}px, ${coreY}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      }
      if (cloudRef.current) {
        cloudRef.current.style.transform = `translate(${cloudX}px, ${cloudY}px)`;
      }
      if (particlesRef.current) {
        const p = particlesRef.current.children;
        for (let i = 0; i < p.length; i++) {
          const dx = mouseX - parseFloat(p[i].dataset.ox || mouseX);
          const dy = mouseY - parseFloat(p[i].dataset.oy || mouseY);
          const speed = 0.02 + i * 0.005;
          const nx = parseFloat(p[i].dataset.cx || 0) + (dx - parseFloat(p[i].dataset.cx || 0)) * speed;
          const ny = parseFloat(p[i].dataset.cy || 0) + (dy - parseFloat(p[i].dataset.cy || 0)) * speed;
          p[i].dataset.cx = nx;
          p[i].dataset.cy = ny;
          p[i].style.transform = `translate(${mouseX + nx}px, ${mouseY + ny}px)`;
        }
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    requestAnimationFrame(animate);

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const particles = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    const dist = 30 + i * 8;
    return { ox: Math.cos(angle) * dist, oy: Math.sin(angle) * dist, i };
  });

  return (
    <>
      <div ref={cloudRef} style={{
        position: 'fixed', top: '-60px', left: '-60px',
        width: '120px', height: '120px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.06) 20%, rgba(6,182,212,0.03) 50%, transparent 70%)',
        filter: 'blur(20px)',
        pointerEvents: 'none', zIndex: 99997,
        willChange: 'transform'
      }} />
      <div ref={glowRef} style={{
        position: 'fixed', top: '-24px', left: '-24px',
        width: '48px', height: '48px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(6,182,212,0.12) 40%, transparent 70%)',
        filter: 'blur(8px)',
        pointerEvents: 'none', zIndex: 99998,
        willChange: 'transform'
      }} />
      <div ref={coreRef} style={{
        position: 'fixed', top: '-3px', left: '-3px',
        width: '6px', height: '6px', borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 0 12px rgba(37,99,235,0.8), 0 0 30px rgba(37,99,235,0.4)',
        pointerEvents: 'none', zIndex: 99999,
        willChange: 'transform'
      }} />
      <div ref={particlesRef} style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        zIndex: 99996
      }}>
        {particles.map(p => (
          <div key={p.i} data-ox={p.ox} data-oy={p.oy} data-cx="0" data-cy="0" style={{
            position: 'absolute', top: '-2px', left: '-2px',
            width: '4px', height: '4px', borderRadius: '50%',
            background: `rgba(37,99,235,${0.15 + p.i * 0.05})`,
            filter: 'blur(1px)',
            willChange: 'transform'
          }} />
        ))}
      </div>
      <style>{`
        * { cursor: none !important; }
        a, button, input, textarea, [role="button"] { cursor: none !important; }
      `}</style>
    </>
  );
}

export default CursorFollower;
