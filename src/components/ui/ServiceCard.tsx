import { type ComponentType } from 'react';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { Service } from '../../types';
import Badge from './Badge';

interface ServiceCardProps {
  service: Service;
}

type IconName = keyof typeof Icons;

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as IconName] as ComponentType<LucideProps> | undefined;

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col gap-4">
      {service.highlight && (
        <div className="absolute -top-3 left-6">
          <Badge variant="solar">{service.highlight}</Badge>
        </div>
      )}
      <div className="w-12 h-12 bg-solar-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
        {IconComponent ? (
          <IconComponent size={24} className="text-solar-600" />
        ) : (
          <span className="text-solar-600 font-bold text-lg">☀</span>
        )}
      </div>
      <div>
        <h3 className="text-navy-900 font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}
