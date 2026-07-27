import { HiExternalLink } from 'react-icons/hi';

const projects = [
  {
    title: 'Bright Jewels - E-commerce Website',
    category: 'Web Development',
    desc: 'A beautifully designed e-commerce website for a jewelry brand with smooth browsing, product catalog, and payment gateway integration.',
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  },
  {
    title: 'Tender Search Software',
    category: 'Custom Software',
    desc: 'A powerful tool to search and filter government tenders from the GeM portal, saving significant time and improving accuracy.',
    tech: ['Python', 'React', 'PostgreSQL', 'API Integration'],
  },
  {
    title: 'CA Portfolio Website',
    category: 'Web Development',
    desc: 'A professional and clean website for a Chartered Accountant practice, building credibility and attracting clients.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Business Management CRM',
    category: 'Custom Software',
    desc: 'A comprehensive CRM solution for managing clients, invoices, and business operations efficiently.',
    tech: ['Node.js', 'React', 'MongoDB', 'AWS'],
  },
  {
    title: 'Restaurant Booking App',
    category: 'Mobile App',
    desc: 'A cross-platform mobile app for restaurant table reservations with real-time availability and push notifications.',
    tech: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    title: 'Digital Marketing Dashboard',
    category: 'Web Development',
    desc: 'An analytics dashboard for tracking SEO performance, ad campaigns, and social media metrics in real time.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
  },
];

function Portfolio() {
  return (
    <>
      <section className="section" style={{ background: 'var(--bg)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '12px' }}>Our Portfolio</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Showcasing some of the projects we've delivered for our clients.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px'
          }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                borderRadius: 'var(--radius)', overflow: 'hidden',
                border: '1px solid var(--border)', background: 'var(--card-bg)',
                transition: 'all 0.3s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{
                  height: '200px', background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text)', fontSize: '3rem', opacity: 0.8
                }}>
                  💼
                </div>
                <div style={{ padding: '24px' }}>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: '4px',
                    background: 'var(--tag-bg)', color: 'var(--primary)',
                    fontSize: '0.8rem', fontWeight: 600, marginBottom: '12px'
                  }}>
                    {p.category}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        padding: '4px 10px', borderRadius: '4px',
                        background: 'var(--tag-bg)', border: '1px solid var(--border)',
                        fontSize: '0.8rem', color: 'var(--text-secondary)'
                      }}>{t}</span>
                    ))}
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

export default Portfolio;
