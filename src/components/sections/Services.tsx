import SectionWrapper from "../ui/SectionWrapper";
import ServiceCard from "../ui/ServiceCard";
import WhoWeServeCard from "../ui/WhoWeServeCard";
import Button from "../ui/Button";
import { services, clientTypes } from "../../data/services";
import { ArrowRight } from "lucide-react";

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
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Complete Solar <span className="text-solar-500">Solutions</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          From the initial consultation to after-sales support — we handle every
          step of your solar journey for residential, commercial, agricultural,
          and industrial clients.
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

      {/* Who We Serve */}
      <div className="mt-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-solar-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Who We Serve
          </span>
          <h2
            className="text-navy-900 font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Solar for <span className="text-solar-500">Every Client</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you're a homeowner, business, farmer, or industrial operator
            — we have the right solar solution for you.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-16">
          {clientTypes.map((client, index) => (
            <WhoWeServeCard
              key={client.id}
              client={client}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
