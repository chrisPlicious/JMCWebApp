import { type ReactNode } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  icon?: ReactNode;
  light?: boolean;
}

export default function StatCounter({ value, label, icon, light = false }: StatCounterProps) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      {icon && <div className={`mb-1 ${light ? 'text-solar-400' : 'text-solar-500'}`}>{icon}</div>}
      <span
        className={`text-3xl lg:text-4xl font-black ${light ? 'text-white' : 'text-navy-900'}`}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {value}
      </span>
      <span className={`text-sm font-medium ${light ? 'text-slate-300' : 'text-slate-500'}`}>
        {label}
      </span>
    </div>
  );
}
