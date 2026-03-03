import { CheckCircle2, Leaf, Award, Zap } from "lucide-react";
import StatCounter from "../ui/StatCounter";
import Button from "../ui/Button";

const highlights = [
  "DOE/ERC compliant solar installations",
  "6kW to 100kW+ system capacities",
  "Serving all of Leyte and Eastern Visayas",
  "Certified dealer of world-class solar brands",
];

const stats = [
  { value: "13+", label: "Brand Partners", icon: <Award size={22} /> },
  { value: "9+", label: "Projects Completed", icon: <Zap size={22} /> },
  { value: "100%", label: "Recommend Rate", icon: <Leaf size={22} /> },
];

export default function About() {
  return (
    <section id="about" className="solar-panel-bg ">
      <div className="grid grid-cols-1 lg:grid-cols-3  items-center ">
        <div className="col-span-2 py-20 lg:py-28 ">
          {/* <h1 className="text-center text-4xl font-bold text-solar-500 mb-10">Who We Are</h1> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mx-10 ">
            {/* Text Content */}
            <div className="bg-white/60 shadow-2xl rounded-2xl p-6">
              <span className="text-solar-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Who We Are
              </span>
              <h2
                className="text-navy-900 font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Renewable Energy{" "}
                <span className="text-solar-500">Advocates</span> for the
                Philippines
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                JMC Solar PH — also known as JMC Power — is a renewable energy
                company headquartered in Ormoc City, Leyte. We are passionate
                advocates for the shift toward clean, sustainable energy
                throughout the Visayas region.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our mission is simple:{" "}
                <strong className="text-navy-900">
                  provide free and clean energy for every industry
                </strong>{" "}
                — from small residential homes to large commercial
                establishments and industrial operations.
              </p>
              {/* Highlight Checklist */}
              <ul className="space-y-3 mb-10">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-green-eco flex-shrink-0"
                    />
                    <span className="text-slate-700 text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="md" href="#contact">
                Get in Touch
              </Button>
            </div>
            {/* Stats Panel */}
            <div className="flex flex-col gap-6 bg-white/60 shadow-2xl rounded-2xl p-6">
              {/* Visual card with gradient */}
              <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                  style={{
                    background:
                      "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
                  }}
                />
                <blockquote className="relative z-10">
                  <p className="text-slate-200 text-lg leading-relaxed italic mb-6">
                    "JMC Solar is an advocate of renewable energy to provide
                    free and clean energy for every industry."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-solar-500 rounded-full flex items-center justify-center">
                      <Zap
                        size={18}
                        className="text-navy-900"
                        fill="currentColor"
                      />
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm block">
                        JMC Solar PH
                      </span>
                      <span className="text-slate-400 text-xs">
                        Ormoc City, Leyte, Philippines
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100"
                  >
                    <StatCounter
                      value={stat.value}
                      label={stat.label}
                      icon={stat.icon}
                    />
                  </div>
                ))}
              </div>
              {/* Service Area Badge */}
              <div className="bg-solar-500/10 border border-solar-500/20 rounded-2xl p-4 flex items-start gap-3">
                <Leaf
                  size={20}
                  className="text-green-eco flex-shrink-0 mt-0.5"
                />
                <div>
                  <span className="text-navy-900 font-semibold text-sm block mb-1">
                    Service Areas
                  </span>
                  <span className="text-slate-600 text-sm">
                    Ormoc City · Cebu Port Center · ZBO · Ipil · Eastern Visayas
                    & surrounding regions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full min-h-125">
          <img
            src="/public/aboutSolar.jpg"
            alt="JMC Solar Team at Work"
            className="w-full h-full object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-navy-900/10" />
        </div>
      </div>
    </section>
  );
}
