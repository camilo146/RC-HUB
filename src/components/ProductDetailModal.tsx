import React from 'react';
import { X, MapPin, ShieldCheck, Star, MessageCircle, CheckCircle2 } from 'lucide-react';
import type { Product } from '../types';
import { formatCOP } from '../data/mockData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Visual & Image Header */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-md text-xs font-bold font-mono-tech uppercase ${
                  product.condition === 'Nuevo'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-500/90 text-slate-950'
                }`}
              >
                {product.condition}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-bold font-mono-tech uppercase bg-slate-950/90 text-white border border-slate-700">
                {product.brand}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400" />
                Ubicación: <strong className="text-white">{product.city}, Colombia</strong>
              </span>

              {product.scale && (
                <span className="font-mono-tech text-orange-400 font-bold">
                  Escala {product.scale} {product.drivetrain ? `· ${product.drivetrain}` : ''}
                </span>
              )}
            </div>
          </div>

          {/* Title & Price Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {product.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-mono-tech">
                ID de Publicación: {product.id.toUpperCase()} · Revisado por ZONA RC
              </p>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-xs uppercase font-mono-tech text-slate-400 block">
                Precio de venta
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono-tech text-white">
                {formatCOP(product.priceCOP)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-bold mb-2">
              Detalles del Vendedor
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {product.description}
            </p>
          </div>

          {/* Technical Specifications */}
          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-bold mb-3">
                Especificaciones & Componentes Clave
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seller Card */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-lg font-mono-tech">
                {product.seller.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h5 className="font-bold text-white text-sm">{product.seller.name}</h5>
                  {product.seller.verified && (
                    <span title="Vendedor verificado">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="flex items-center gap-1 text-amber-400 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {product.seller.rating}
                  </span>
                  <span>•</span>
                  <span>{product.seller.salesCount} ventas en ZONA RC</span>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-auto flex items-center gap-2">
              <button
                onClick={() => {
                  alert(
                    `Iniciando contacto directo con el vendedor (${product.seller.name}) en Colombia para la publicación: ${product.name}.`
                  );
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors text-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar Vendedor</span>
              </button>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-mono-tech">
              Transacción protegida por la comunidad ZONA RC
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
