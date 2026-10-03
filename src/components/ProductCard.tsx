import { MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { Product } from '../types';
import { formatCOP } from '../data/mockData';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="group relative bg-slate-900/80 rounded-2xl border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20 flex flex-col h-full">
      {/* Product Image Box */}
      <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Condition Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-mono-tech uppercase tracking-wide shadow-md ${
              product.condition === 'Nuevo'
                ? 'bg-emerald-500/90 text-white border border-emerald-400/30'
                : 'bg-slate-900/90 text-amber-300 border border-amber-400/30'
            }`}
          >
            {product.condition}
          </span>

          {product.scale && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold font-mono-tech uppercase tracking-wide bg-slate-950/80 text-slate-300 border border-slate-700/80">
              Escala {product.scale}
            </span>
          )}
        </div>

        {/* Brand pill */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono-tech bg-slate-950/90 text-white border border-slate-700 shadow-md">
            {product.brand}
          </span>
        </div>

        {/* Quick telemetry indicators */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 opacity-90">
          {product.drivetrain && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-tech font-bold bg-slate-950/80 text-orange-400 border border-orange-500/20">
              {product.drivetrain}
            </span>
          )}
          {product.powerType && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-tech font-semibold bg-slate-950/80 text-slate-300 border border-slate-700/60">
              {product.powerType}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location & Seller */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              {product.city}
            </span>

            <span className="inline-flex items-center gap-1 text-slate-400">
              {product.seller.verified && (
                <span title="Vendedor verificado">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </span>
              )}
              <span className="truncate max-w-[120px]">{product.seller.name}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-display font-bold text-lg text-white group-hover:text-orange-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Brief specs snippet */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-mono-tech tracking-wider text-slate-400 block">
              Precio contado
            </span>
            <span className="text-lg font-extrabold font-mono-tech text-white tracking-tight">
              {formatCOP(product.priceCOP)}
            </span>
          </div>

          <button
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-orange-500 hover:text-white border border-slate-700/80 hover:border-orange-500 transition-all duration-200 cursor-pointer"
          >
            <span>Ver publicación</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
