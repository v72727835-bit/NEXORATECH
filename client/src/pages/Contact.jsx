import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <>
      <section style={{
        padding: '140px 0 80px', textAlign: 'center',
        position: 'relative', overflow: 'hidden', background: 'var(--bg)'
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-15%', width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)',
          filter: 'blur(70px)'
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '450px', height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03), transparent 60%)',
          filter: 'blur(60px)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px 6px 6px', borderRadius: '40px',
            background: 'var(--tag-bg)', color: 'var(--primary)',
            fontSize: '0.82rem', fontWeight: 600, marginBottom: '16px',
            border: '1px solid rgba(37,99,235,0.12)'
          }}>
            <span style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.65rem', color: '#fff'
            }}>&#10003;</span>
            Contact
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800,
            color: 'var(--text)', lineHeight: 1.1, marginBottom: '20px'
          }}>
            Let's{' '}
            <span style={{
              background: 'linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              animation: 'ab-shimmer 4s linear infinite'
            }}>Build Something</span> Together
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.05rem',
            maxWidth: '600px', margin: '0 auto', lineHeight: 1.7
          }}>
            Have a project in mind? We would love to hear from you. Reach out and let us make it happen.
          </p>
        </div>
      </section>
      <ContactForm />
      <style>{`
        @keyframes ab-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </>
  );
}

export default Contact;
