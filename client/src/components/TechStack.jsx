import { FaAws } from 'react-icons/fa';
import { SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiTailwindcss, SiDocker, SiGraphql, SiPython, SiPostgresql, SiRedis, SiKubernetes, SiFirebase } from 'react-icons/si';

const techs = [
  { icon: SiReact, name: 'React', color: '#61dafb' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06b6d4' },
  { icon: SiDocker, name: 'Docker', color: '#2496ed' },
  { icon: FaAws, name: 'AWS', color: '#ff9900' },
  { icon: SiGraphql, name: 'GraphQL', color: '#e10098' },
  { icon: SiPython, name: 'Python', color: '#3776ab' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169e1' },
  { icon: SiRedis, name: 'Redis', color: '#dc382d' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326ce5' },
  { icon: SiFirebase, name: 'Firebase', color: '#ffca28' },

];

const gradients = [
  'linear-gradient(135deg, #61dafb, #3178c6)',
  'linear-gradient(135deg, #3178c6, #339933)',
  'linear-gradient(135deg, #339933, #47a248)',
  'linear-gradient(135deg, #47a248, #000000)',
  'linear-gradient(135deg, #000000, #06b6d4)',
  'linear-gradient(135deg, #06b6d4, #2496ed)',
  'linear-gradient(135deg, #2496ed, #ff9900)',
  'linear-gradient(135deg, #ff9900, #e10098)',
  'linear-gradient(135deg, #e10098, #3776ab)',
  'linear-gradient(135deg, #3776ab, #4169e1)',
  'linear-gradient(135deg, #4169e1, #dc382d)',
  'linear-gradient(135deg, #dc382d, #326ce5)',
  'linear-gradient(135deg, #326ce5, #ffca28)',
  'linear-gradient(135deg, #ffca28, #61dafb)',
];

const floatKeyframes = `
@keyframes ts-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-12px) rotate(1deg); }
  50% { transform: translateY(-6px) rotate(-0.5deg); }
  75% { transform: translateY(-18px) rotate(0.5deg); }
}
@keyframes ts-float-reverse {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(12px) rotate(-1deg); }
  50% { transform: translateY(6px) rotate(0.5deg); }
  75% { transform: translateY(18px) rotate(-0.5deg); }
}
`;

function TechStack() {
  return (
    <>
      <style>{floatKeyframes}</style>
      <section className="section" style={{
        background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden',
        perspective: '1200px'
      }}>
      <div style={{
        position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(97,218,251,0.04), transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%', width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
        filter: 'blur(50px)', pointerEvents: 'none'
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span style={{
          display: 'block', textAlign: 'center',
          padding: '6px 18px', borderRadius: '40px',
          background: 'var(--tag-bg)', color: 'var(--primary)',
          fontSize: '0.82rem', fontWeight: 600, marginBottom: '16px',
          border: '1px solid rgba(37,99,235,0.12)', width: 'fit-content',
          marginLeft: 'auto', marginRight: 'auto'
        }}>
          Powered By
        </span>
        <h2 className="section-title">Our Tech Stack</h2>
        <p className="section-subtitle">
          Latest technologies we use to build modern, scalable, and performant solutions.
        </p>

        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '40px', marginTop: '10px', transformStyle: 'preserve-3d'
        }}>
            {techs.map((t, i) => (
            <div key={i} style={{
              width: '120px', height: '120px',
              animation: `${i % 2 === 0 ? 'ts-float' : 'ts-float-reverse'} ${3 + (i % 3) * 0.5}s ease-in-out ${i * 0.4}s infinite`
            }}>
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              border: '2px solid #000',
              transition: 'all 0.3s ease',
              position: 'relative', overflow: 'hidden',
              transformStyle: 'preserve-3d', cursor: 'default',
              gap: '6px'
            }}
              onMouseMove={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.12)`;
                e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(0,0,0,0.25)`;
                e.currentTarget.style.borderColor = t.color;
                const shine = e.currentTarget.querySelector('.ts-shine');
                if (shine) {
                  const sx = (e.clientX - rect.left) / rect.width * 100;
                  const sy = (e.clientY - rect.top) / rect.height * 100;
                  shine.style.background = `radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.15), transparent 60%)`;
                  shine.style.opacity = '1';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '#000';
                const shine = e.currentTarget.querySelector('.ts-shine');
                if (shine) { shine.style.opacity = '0'; }
              }}
            >
              <div className="ts-shine" style={{
                position: 'absolute', inset: '0', borderRadius: '50%',
                pointerEvents: 'none', opacity: '0',
                transition: 'opacity 0.3s ease', zIndex: '1'
              }} />
              <div style={{
                position: 'relative', zIndex: '2',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <t.icon style={{
                  fontSize: '2rem', color: t.color,
                  transition: 'all 0.3s ease'
                }} />
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600, color: 'var(--text)',
                  letterSpacing: '0.3px'
                }}>
                  {t.name}
                </span>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default TechStack;
