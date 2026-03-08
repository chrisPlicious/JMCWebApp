import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Battery,
  Zap,
  SlidersHorizontal,
  Shuffle,
  ArrowRight,
  Package,
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import {
  products,
  productCategories,
  type Product,
  type ProductCategory,
} from '../../data/products';

// ── Category → card gradient + icon mapping ───────────────────────
const categoryVisual: Record<
  ProductCategory,
  { gradient: string; icon: React.ReactNode }
> = {
  panels: {
    gradient: 'from-sky-50 to-sky-100',
    icon: <Sun size={48} className="text-sky-400" />,
  },
  batteries: {
    gradient: 'from-blue-50 to-blue-100',
    icon: <Battery size={48} className="text-blue-400" />,
  },
  inverters: {
    gradient: 'from-amber-50 to-solar-100',
    icon: <Zap size={48} className="text-solar-500" />,
  },
  controllers: {
    gradient: 'from-slate-50 to-slate-100',
    icon: <SlidersHorizontal size={48} className="text-slate-400" />,
  },
  converters: {
    gradient: 'from-green-50 to-emerald-100',
    icon: <Shuffle size={48} className="text-emerald-500" />,
  },
};

// ── Single product card ───────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const visual = categoryVisual[product.category];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-card-hover hover:border-solar-300 transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Image / placeholder area */}
      {product.image ? (
        <div className="h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div
          className={`h-48 bg-gradient-to-br ${visual.gradient} flex items-center justify-center`}
        >
          {visual.icon}
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        {/* Badge */}
        {product.badge && (
          <span className="self-start text-[10px] font-bold uppercase tracking-widest bg-solar-500/10 text-solar-600 px-2.5 py-1 rounded-full">
            ★ {product.badge}
          </span>
        )}

        {/* Brand */}
        <p className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
          {product.brand}
        </p>

        {/* Name */}
        <h3
          className="text-navy-900 font-bold text-base leading-snug"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.name}
        </h3>

        {/* Specs */}
        <p className="text-slate-500 text-xs">{product.specs}</p>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Footer: price + CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <span className="text-navy-900 font-bold text-sm">
            {product.priceLabel}
          </span>
          <Link
            to={`/?product=${product.id}&service=${product.relatedService}#contact`}
            className="inline-flex items-center gap-1.5 bg-solar-500 hover:bg-solar-400 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Inquire Now <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* ── Page header ── */}
      <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 pt-28 pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Package size={28} className="text-white" />
            </div>
          </div>

          <h1
            className="text-white font-black text-4xl sm:text-5xl leading-tight mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Products
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl">
            Quality solar equipment sourced from trusted global brands — panels,
            batteries, inverters, charge controllers, and more.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* ── Category filter tabs ── */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-10">
          <div className="flex gap-2 w-max sm:w-auto sm:flex-wrap">
            {productCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? products.length
                  : products.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as ProductCategory | 'all')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold border whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-solar-500 border-solar-500 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-navy-900 hover:border-solar-400 hover:text-solar-600'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Product grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <Package size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-lg font-medium">No products in this category yet.</p>
          </div>
        )}

        {/* ── CTA strip ── */}
        <div className="mt-20 bg-navy-900 rounded-3xl px-5 py-10 sm:px-10 sm:py-14 text-center">
          <h2
            className="text-white font-black text-2xl sm:text-3xl mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Not sure which product fits your system?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Our team will assess your site and recommend the right equipment for
            your budget and energy needs — free of charge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-solar-500 hover:bg-solar-400 text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors duration-200 text-sm"
            >
              View our services →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
