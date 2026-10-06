import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, PlusCircle } from 'lucide-react';

interface PublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessAddProduct?: (newProductData: any) => void;
}

export const PublishModal: React.FC<PublishModalProps> = ({
  isOpen,
  onClose,
  onSuccessAddProduct,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'vehiculos' | 'repuestos' | 'electronica'>('vehiculos');
  const [brand, setBrand] = useState('Traxxas');
  const [condition, setCondition] = useState<'Usado' | 'Nuevo'>('Usado');
  const [city, setCity] = useState('Bucaramanga');
  const [priceCOP, setPriceCOP] = useState('1850000');
  const [scale, setScale] = useState('1/10');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      if (onSuccessAddProduct) {
        onSuccessAddProduct({
          id: 'prod-' + Date.now(),
          name: title || 'Vehículo RC Publicado',
          priceCOP: Number(priceCOP) || 1200000,
          condition,
          city,
          brand,
          category,
          scale,
          image: '/images/slash-4x4.jpg',
          description: description || 'Publicación creada exitosamente en el prototipo de ZONA RC.',
          seller: {
            name: 'Piloto Registrado',
            verified: true,
            rating: 5.0,
            salesCount: 1,
            memberSince: '2026',
          },
          features: ['Listo para rodar', 'Revisión técnica inicial'],
        });
      }
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                ¡Publicación Creada con Éxito!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Tu artículo ha sido añadido al Marketplace de prueba de ZONA RC Colombia.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-xs font-mono-tech text-orange-400 font-bold uppercase tracking-wider mb-2">
                  <PlusCircle className="w-3.5 h-3.5" />
                  Nueva Publicación
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Vende en la comunidad ZONA RC
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Llega a pilotos y compradores calificados en toda Colombia.
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                    Título de la publicación *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Traxxas Slash 4x4 VXL Brushless"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                {/* Category & Brand row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Categoría
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="vehiculos">🚗 Vehículo Completo (RTR/Roller)</option>
                      <option value="repuestos">🔧 Repuestos y Chasis</option>
                      <option value="electronica">🔋 Electrónica, Motores & LiPo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Marca
                    </label>
                    <select
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="Traxxas">Traxxas</option>
                      <option value="Arrma">Arrma</option>
                      <option value="Losi">Losi</option>
                      <option value="HPI">HPI</option>
                      <option value="Tamiya">Tamiya</option>
                      <option value="Hobbywing">Hobbywing</option>
                    </select>
                  </div>
                </div>

                {/* Condition, Scale, City */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Estado
                    </label>
                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value as any)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="Usado">Usado</option>
                      <option value="Nuevo">Nuevo Sellado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Escala
                    </label>
                    <select
                      value={scale}
                      onChange={(e) => setScale(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="1/10">1/10</option>
                      <option value="1/8">1/8</option>
                      <option value="1/7">1/7</option>
                      <option value="1/24">1/24 (Mini/Micro)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Ciudad (Colombia)
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    >
                      <option value="Bucaramanga">Bucaramanga</option>
                      <option value="Bogotá">Bogotá</option>
                      <option value="Medellín">Medellín</option>
                      <option value="Cali">Cali</option>
                      <option value="Barranquilla">Barranquilla</option>
                    </select>
                  </div>
                </div>

                {/* Price in COP */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                    Precio en Pesos Colombianos (COP) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono-tech text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      required
                      value={priceCOP}
                      onChange={(e) => setPriceCOP(e.target.value)}
                      placeholder="1850000"
                      className="w-full pl-8 pr-16 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono-tech text-sm focus:outline-none focus:border-orange-500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono-tech text-xs">
                      COP
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                    Descripción técnica y estado mecánico
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Incluye detalles de mantenimiento, qué baterías has usado, si incluye emisora y si tienes repuestos adicionales..."
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                {/* Mock photo dropzone */}
                <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/40 text-center cursor-pointer hover:border-orange-500/60 transition-colors">
                  <UploadCloud className="w-8 h-8 text-orange-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-slate-300">
                    Sube fotos reales de tu modelo RC o componente
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Se recomienda incluir fotos del chasis, electrónica y desgaste de llantas
                  </p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                >
                  Publicar en Marketplace
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
