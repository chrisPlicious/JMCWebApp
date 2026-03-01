import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'hybrid',
    icon: 'Sun',
    title: 'Hybrid Solar Systems',
    description: '6kW to 100kW+ hybrid systems combining solar generation, battery storage, and grid connection for maximum reliability and energy savings.',
    highlight: 'Most Popular',
  },
  {
    id: 'ongrid',
    icon: 'Zap',
    title: 'On-Grid / Net-Metered',
    description: 'Feed excess solar power back to the utility grid and earn credits on your electricity bill with our DOE/ERC-compliant net metering installations.',
  },
  {
    id: 'bess',
    icon: 'Battery',
    title: 'Battery Energy Storage (BESS)',
    description: 'Never experience brownouts again. Our lithium LFP battery storage systems keep your home or business powered 24/7 — rain or shine.',
  },
  {
    id: 'pump',
    icon: 'Droplets',
    title: 'Solar Pumping Systems',
    description: 'Cost-effective solar-powered water pumps for agricultural and irrigation applications. Zero electricity cost for your farm operations.',
  },
  {
    id: 'ev',
    icon: 'Car',
    title: 'EV Charger Installation',
    description: 'Future-proof your property with professional EV charging station installation. Charge your electric vehicle using clean, free solar energy.',
  },
  {
    id: 'ups',
    icon: 'ShieldCheck',
    title: 'UPS Systems',
    description: 'Uninterruptible Power Supply systems to protect sensitive equipment and keep critical operations running during power interruptions and outages.',
  },
  {
    id: 'controller',
    icon: 'SlidersHorizontal',
    title: 'Solar Charge Controllers',
    description: 'High-efficiency MPPT and PWM solar charge controllers for optimized battery charging and maximum energy harvest from your solar array.',
  },
];
