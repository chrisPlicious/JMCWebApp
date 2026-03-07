import { useState, useRef, type ComponentType } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import WhoWeServeCard from "../ui/WhoWeServeCard";
import Button from "../ui/Button";
import { services, clientTypes } from "../../data/services";
import { ArrowRight } from "lucide-react";
import solarImg from "../../assets/solar.jpg";

type IconName = keyof typeof Icons;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: MouseEvent<HTMLDivElement>) {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  }

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function onMouseUp() {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }

  function onMouseLeave() {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }

  function toggleCard(index: number) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="services" className="py-20 transition-all duration-700 ">
      <div className="max-w-10/13 mx-auto px-4 sm:px-6 lg:px-8">
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
        {/* Accordion Cards */}
        <div
          ref={scrollRef}
          className="flex gap-3 justify-center overflow-x-auto scrollbar-hide h-150 mb-12 px-1"
          style={{ cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const IconComponent = Icons[service.icon as IconName] as
              | ComponentType<LucideProps>
              | undefined;
            return (
              <div
                key={service.id}
                onClick={() => toggleCard(index)}
                style={{ width: isActive ? "900px" : "92px" }}
                className="relative rounded-2xl overflow-hidden cursor-pointer shrink-0 transition-all duration-500 ease-in-out"
              >
                {/* Background image */}
                <img
                  src={solarImg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${isActive ? "bg-navy-900/70" : "bg-navy-900/80"}`}
                />
                {/* Solar accent glow when active */}
                {isActive && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-solar-500/20 rounded-full blur-3xl pointer-events-none" />
                )}
                {/* Collapsed: vertical label */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                  {IconComponent && (
                    <IconComponent size={30} className="text-solar-400" />
                  )}
                  <span
                    className="text-white font-semibold text-lg whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    {service.title}
                  </span>
                </div>
                {/* Expanded: content */}
                <div
                  className={`absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-400 ${isActive ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"}`}
                >
                  {service.highlight && (
                    <span className="text-solar-400 text-md font-bold uppercase tracking-widest mb-3">
                      ★ {service.highlight}
                    </span>
                  )}
                  {IconComponent && (
                    <div className="w-12 h-12 bg-solar-500/20 border border-solar-500/30 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent size={22} className="text-solar-400" />
                    </div>
                  )}
                  <h3
                    className="text-white text-4xl font-bold mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/75 text-lg leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between font-semibold text-md text-solar-400 hover:text-solar-300 transition-colors ">
                    <a
                      href="#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 "
                    >
                      Inquire now <ArrowRight size={22} />
                    </a>
                    <Link
                      to={`/services/${service.id}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
      </div>
    </section>
  );
}
