import React, { useState } from 'react';
import { X, Wrench, CheckCircle2 } from 'lucide-react';

interface GarageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessAddVehicle?: (vehicleData: any) => void;
}

export const GarageModal: React.FC<GarageModalProps> = ({
  isOpen,
  onClose,
  onSuccessAddVehicle,
}) => {
  const [modelName, setModelName] = useState('Traxxas Rustler 4x4 VXL');
  const [brand, setBrand] = useState('Traxxas');
  const [scale, setScale] = useState('1/10');
  const [type, setType] = useState('Stadium Truck');
  const [batteryType, setBatteryType] = useState('LiPo 3S 11.1V (5000mAh)');
  const [motorEsc, setMotorEsc] = useState('Velineon 3500kV Brushless');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      if (onSuccessAddVehicle) {
        onSuccessAddVehicle({
          id: 'gar-' + Date.now(),
          name: modelName,
          brand,
          scale,
          type,
          image: '/images/hero-rc.jpg',
          status: 'Listo para pista',
          batteryType,
          motorEsc,
          transmission: '4WD Cardán Central',
          installedUpgrades: ['Configuración Inicial de Fábrica'],
          recommendedPartsCount: 6,
          lastRun: 'Registrado hoy en ZONA RC Colombia',
        });
      }
      setIsSaved(false);
      onClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSaved ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                ¡Vehículo Agregado a Tu Garage!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Tu modelo ya está registrado. Ahora podrás recibir recomendaciones de repuestos compatibles y llevar la bitácora de mantenimiento.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono-tech text-amber-400 font-bold uppercase tracking-wider mb-2">
                  <Wrench className="w-3.5 h-3.5" />
                  Registro de Modelo
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Registra tu vehículo en el Garage
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Guarda la configuración de electrónica, chasis y repuestos de tu colección.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                    Nombre del modelo *
                  </label>
                  <input
                    type="text"
                    required
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    placeholder="Ej. Traxxas Slash 4x4 VXL"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <option value="Kyosho">Kyosho</option>
                      <option value="Mugen Seiki">Mugen Seiki</option>
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
                      <option value="1/10">1/10 (Estándar)</option>
                      <option value="1/8">1/8 (Competición/Bashing)</option>
                      <option value="1/7">1/7 (Speed Run)</option>
                      <option value="1/24">1/24 (Micro Crawler)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                    Tipo de vehículo
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                  >
                    <option value="Short Course Truck">Short Course Truck</option>
                    <option value="Monster Truck">Monster Truck</option>
                    <option value="Rock Crawler Scale">Rock Crawler Scale</option>
                    <option value="Buggy 4WD">Buggy 4WD</option>
                    <option value="Truggy">Truggy</option>
                    <option value="Drift Car On-Road">Drift Car On-Road</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Batería principal
                    </label>
                    <input
                      type="text"
                      value={batteryType}
                      onChange={(e) => setBatteryType(e.target.value)}
                      placeholder="Ej. LiPo 3S 5000mAh"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-1.5">
                      Motor / ESC
                    </label>
                    <input
                      type="text"
                      value={motorEsc}
                      onChange={(e) => setMotorEsc(e.target.value)}
                      placeholder="Ej. Velineon 3500kV"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

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
                  Guardar en mi Garage
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
