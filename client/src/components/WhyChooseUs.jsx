import { HiBadgeCheck, HiSupport, HiLightningBolt, HiCurrencyRupee } from 'react-icons/hi';

const reasons = [
  { icon: HiBadgeCheck, title: 'We Actually Listen', desc: 'No assumptions. We take time to understand your business before writing a single line of code.' },
  { icon: HiSupport, title: 'There When You Need Us', desc: 'Launch day isn\'t the end. We stick around, fix things, and help you grow.' },
  { icon: HiLightningBolt, title: 'No Endless Waiting', desc: 'We set realistic timelines and meet them. If something changes, you\'ll be the first to know.' },
  { icon: HiCurrencyRupee, title: 'Straightforward Pricing', desc: 'What you see is what you pay. No hidden fees, no upsells, no surprises.' },
];

function WhyChooseUs() {
  return (
    <section className="section" style={{ background: 'var(--bg-dark)', color: 'var(--text)' }}>
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--text)' }}>Why Choose NexoraTech?</h2>
        <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
          Here's why people keep coming back to us — and referring their friends.
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px'
        }}>
          {reasons.map((r, i) => (
            <div key={i} style={{
              padding: '32px', borderRadius: 'var(--radius)',
              border: '1px solid var(--glass-border)', textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem', color: 'var(--accent)', marginBottom: '16px'
              }}>
                <r.icon />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px' }}>{r.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
