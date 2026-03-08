const partners = [
  { name: 'Sofar Solar',     logo: '/Logos/SOFARSOLAR.png' },
  { name: 'Solax Power',     logo: '/Logos/SOLAX.png' },
  { name: 'JinKO Solar',     logo: '/Logos/JINKOSOLAR.png' },
  { name: 'Trina Solar',     logo: '/Logos/TRINASOLAR.png' },
  { name: 'Sunri',           logo: '/Logos/SUNRI.png' },
  { name: 'REC Group',       logo: '/Logos/REC.png' },
  { name: 'Deye',            logo: '/Logos/DEYE.png' },
  { name: 'Livoltek',        logo: '/Logos/LIVOLTEK.png' },
  { name: 'LVTOPSUN',        logo: '/Logos/LVTOPSUN.webp' },
  { name: 'Voltronic Power', logo: '/Logos/VOLTRONICPOWER.png' },
  { name: 'SRNE Solar',      logo: '/Logos/SRNE.png' },
  { name: 'Japan Solar',     logo: '/Logos/JAPAN%20SOLAR.png' },
  { name: 'Think Power',     logo: '/Logos/THINK POWER.png' },
];

const doubled = [...partners, ...partners];

function PartnerCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center bg-white rounded-xl shadow-sm px-6 py-4 min-w-[140px]">
      <img src={logo} alt={name} className="h-12 object-contain" />
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="py-20 solar-panel-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-solar-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Trusted Brands
          </span>
          <h2
            className="text-navy-900 font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our{' '}
            <span className="text-solar-500">Partner Brands</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are an authorized multi-brand dealer and installer, carrying the world's leading solar
            equipment manufacturers to ensure the best system for your needs.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-6">
            <img src="/Logos/SOFARSOLAR.png" alt="Sofar Solar" className="h-25 object-contain" />
            <img src="/Logos/SOLAX.png" alt="Solax Power" className="h-25 object-contain" />
            <img src="/Logos/JINKOSOLAR.png" alt="JinKO Solar" className="h-25 object-contain" />
            <img src="/Logos/TRINASOLAR.png" alt="Trina Solar" className="h-25 object-contain" />
            <img src="/Logos/SUNRI.png" alt="Sunri" className="h-25 object-contain" />
          </div>
          <div className="flex flex-col items-center gap-11">
            <img src="/Logos/REC.png" alt="REC Group" className="h-25 object-contain" />
            <img src="/Logos/DEYE.png" alt="Deye" className="h-25 object-contain" />
            <img src="/Logos/LIVOLTEK.png" alt="Livoltek" className="h-25 object-contain" />
            <img src="/Logos/LVTOPSUN.webp" alt="LVTOPSUN" className="h-25 object-contain" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/Logos/VOLTRONICPOWER.png" alt="Voltronic Power" className="h-35 object-contain" />
            <img src="/Logos/SRNE.png" alt="SRNE Solar" className="h-25 object-contain" />
            <img src="/Logos/JAPAN%20SOLAR.png" alt="Japan Solar" className="h-50 object-contain" />
            <img src="/Logos/THINK POWER.png" alt="Phono Solar" className="h-40 object-contain" />
          </div>
        </div>

        {/* Marquee — mobile & tablet */}
        <div className="lg:hidden overflow-hidden relative mb-6">
          <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
            {doubled.map((partner, idx) => (
              <PartnerCard key={`${partner.name}-${idx}`} name={partner.name} logo={partner.logo} />
            ))}
          </div>
        </div>

        {/* Trust note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          All brands are supplied and installed by certified JMC Solar PH technicians.
        </p>
      </div>
    </section>
  );
}
