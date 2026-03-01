import SectionWrapper from '../ui/SectionWrapper';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-slate-50">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-solar-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
          What We Do
        </span>
        <h2
          className="text-navy-900 font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Complete Solar{' '}
          <span className="text-solar-500">Solutions</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          From the initial consultation to after-sales support — we handle every step of your solar journey for residential, commercial, agricultural, and industrial clients.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button variant="primary" size="lg" href="#contact">
          Inquire About a Service
          <ArrowRight size={18} />
        </Button>
      </div>
    </SectionWrapper>
  );
}
