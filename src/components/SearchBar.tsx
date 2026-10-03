import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { CategoryId } from '../types';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CategoryId;
  onCategorySelect: (category: CategoryId) => void;
  onPerformSearch?: () => void;
}

export const CATEGORIES: { id: CategoryId; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos', icon: '⚡' },
  { id: 'vehiculos', label: 'Vehículos', icon: '🚗' },
  { id: 'repuestos', label: 'Repuestos', icon: '🔧' },
  { id: 'electronica', label: 'Electrónica', icon: '🔋' },
  { id: 'llantas', label: 'Llantas', icon: '🛞' },
  { id: 'accesorios', label: 'Accesorios', icon: '⚙️' },
];

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  onPerformSearch,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onPerformSearch) {
      onPerformSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative bg-slate-900/90 rounded-2xl border border-slate-800 p-3 sm:p-4 shadow-xl shadow-black/40 backdrop-blur-xl">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
          {/* Input field */}
          <div className="relative flex-1 flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Busca Traxxas, Arrma, baterías, motores..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm sm:text-base transition-all font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer text-sm sm:text-base"
          >
            <Search className="w-4 h-4" />
            <span>Buscar</span>
          </button>
        </form>

        {/* Quick Category Pills */}
        <div className="pt-3.5 mt-2 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono-tech text-slate-400 uppercase tracking-wider pl-1 pr-2 whitespace-nowrap">
            <SlidersHorizontal className="w-3 h-3 text-orange-400" />
            Categorías:
          </span>

          <div className="flex items-center gap-2 flex-nowrap">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategorySelect(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 border border-orange-400'
                      : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
