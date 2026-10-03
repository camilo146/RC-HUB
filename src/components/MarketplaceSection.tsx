import React, { useState, useMemo } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Product, CategoryId } from '../types';
import { ProductCard } from './ProductCard';

interface MarketplaceSectionProps {
  products: Product[];
  selectedCategory: CategoryId;
  searchQuery: string;
  onViewProduct: (product: Product) => void;
  onSeeAllMarketplace: () => void;
}

export const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({
  products,
  selectedCategory,
  searchQuery,
  onViewProduct,
  onSeeAllMarketplace,
}) => {
  const [conditionFilter, setConditionFilter] = useState<'all' | 'Nuevo' | 'Usado'>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Condition filter
      if (conditionFilter !== 'all' && p.condition !== conditionFilter) {
        return false;
      }

      // City filter
      if (selectedCity !== 'all' && p.city !== selectedCity) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesCity = p.city.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesCity && !matchesDesc) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, conditionFilter, selectedCity, searchQuery]);

  return (
    <section id="marketplace" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-xs font-mono-tech text-orange-400 font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Mercado Especializado
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Explora el Marketplace
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Encuentra vehículos y repuestos de la comunidad RC.
            </p>
          </div>

          {/* Quick Filter pills (Condition & Cities) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex rounded-lg bg-slate-900 border border-slate-800 p-1 text-xs">
              <button
                onClick={() => setConditionFilter('all')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  conditionFilter === 'all'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setConditionFilter('Nuevo')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  conditionFilter === 'Nuevo'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Nuevos
              </button>
              <button
                onClick={() => setConditionFilter('Usado')}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                  conditionFilter === 'Usado'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Usados
              </button>
            </div>

            {/* City Dropdown */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg px-3 py-2 font-medium focus:outline-none focus:border-orange-500"
            >
              <option value="all">Todas las ciudades</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
              <option value="Barranquilla">Barranquilla</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={onViewProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">
              No se encontraron publicaciones con los filtros seleccionados.
            </p>
            <button
              onClick={() => {
                setConditionFilter('all');
                setSelectedCity('all');
              }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-semibold rounded-lg text-white"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Bottom CTA to see all */}
        <div className="mt-12 text-center">
          <button
            onClick={onSeeAllMarketplace}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 hover:border-orange-500/60 shadow-lg hover:shadow-orange-500/10 transition-all duration-200 cursor-pointer group"
          >
            <span>Ver todo el Marketplace</span>
            <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
