import { type ReactNode, type RefObject } from 'react';
import { useInView } from '../../hooks/useInView';

interface SectionWrapperProps {
  id: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  className = '',
  innerClassName = '',
  children,
}: SectionWrapperProps) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      id={id}
      className={`py-20 lg:py-28 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
