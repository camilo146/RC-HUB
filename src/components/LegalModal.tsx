import React from 'react';
import { X, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terminos' | 'privacidad' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl shadow-black z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-xs font-mono-tech text-slate-300 font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-orange-400" />
            {type === 'terminos' ? 'Términos de Servicio' : 'Política de Privacidad'}
          </div>

          <h3 className="font-display font-extrabold text-2xl text-white">
            {type === 'terminos'
              ? 'Términos y Condiciones de BOX HUB Colombia'
              : 'Privacidad y Protección de Datos'}
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-80 overflow-y-auto pr-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <p>
              Bienvenido a BOX HUB. Al acceder o utilizar nuestra plataforma de comunidad y marketplace de vehículos a radio control en Colombia, aceptas estos lineamientos creados para proteger la confianza y seguridad de todos los aficionados.
            </p>
            <p>
              <strong>1. Publicaciones verídicas:</strong> Todas las fotos, estados de desgaste, capacidad de baterías LiPo y motorizaciones deben ser reales y corresponder exactamente al modelo en venta.
            </p>
            <p>
              <strong>2. Seguridad en transacciones:</strong> Fomentamos transacciones seguras y verificación en pistas o puntos seguros acordados en Bogotá, Bucaramanga, Medellín, Cali, Barranquilla y demás ciudades.
            </p>
            <p>
              <strong>3. Uso de datos:</strong> Tu información de contacto se comparte únicamente con fines de coordinar la compra, venta o participación en eventos y competencias de la comunidad.
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-xs"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
