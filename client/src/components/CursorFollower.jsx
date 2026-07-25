import { useEffect, useRef } from 'react';

function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    const onMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    requestAnimationFrame(animate);

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: '-4px', left: '-4px',
        width: '8px', height: '8px', borderRadius: '50%',
        background: '#2563eb', pointerEvents: 'none',
        zIndex: 99999, transition: 'width 0.15s, height 0.15s, top 0.15s, left 0.15s',
        willChange: 'transform'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: '-16px', left: '-16px',
        width: '32px', height: '32px', borderRadius: '50%',
        border: '2px solid rgba(37,99,235,0.3)',
        pointerEvents: 'none', zIndex: 99998,
        willChange: 'transform'
      }} />
      <style>{`
        * { cursor: none !important; }
        a, button, input, textarea, [role="button"] { cursor: none !important; }
      `}</style>
    </>
  );
}

export default CursorFollower;
