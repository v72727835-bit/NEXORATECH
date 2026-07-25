import { useEffect, useRef } from 'react';

function RainEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1,
        len: 15 + Math.random() * 20,
        speed: 4 + Math.random() * 4,
        opacity: 0.08 + Math.random() * 0.12,
        width: 0.5 + Math.random() * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(d => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.len * 0.2, d.y + d.len);
        ctx.strokeStyle = `rgba(37, 99, 235, ${d.opacity})`;
        ctx.lineWidth = d.width;
        ctx.stroke();

        d.y += d.speed;
        d.x -= d.speed * 0.2;

        if (d.y > canvas.height + d.len || d.x < -d.len) {
          d.y = -d.len;
          d.x = Math.random() * (canvas.width + d.len);
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0, pointerEvents: 'none',
      zIndex: 9999
    }} />
  );
}

export default RainEffect;
