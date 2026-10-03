import React, { useState } from 'react';
import { Wrench, BatteryCharging, Gauge, CheckCircle2, PlusCircle, ShieldCheck, Zap } from 'lucide-react';
import { MOCK_GARAGE_VEHICLES } from '../data/mockData';

interface GaragePreviewProps {
  onCreateGarage: () => void;
}

export const GaragePreview: React.FC<GaragePreviewProps> = ({ onCreateGarage }) => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(MOCK_GARAGE_VEHICLES[0].id);

  const activeVehicle =
    MOCK_GARAGE_VEHICLES.find((v) => v.id === selectedVehicleId) || MOCK_GARAGE_VEHICLES[0];

  return (
    <section id="garage" className="py-16 lg:py-24 relative overflow-hidden bg-slate-950/60 border-y border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono-tech text-amber-400 font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Ecosistema Digital RC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Tu colección RC. <span className="text-orange-500">Organizada.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Registra tus vehículos, guarda sus componentes y lleva el control de tu colección desde un solo lugar.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/80 backdrop-blur-xl">
          {/* Top Dashboard Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 font-mono-tech font-bold text-sm">
                MG
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl text-white">Mi Garage</h3>
                  <span className="text-[10px] font-mono-tech font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    2 Modelos Registrados
                  </span>
                </div>
                <p className="text-xs text-slate-400">Piloto: Juan David Camargo · Bucaramanga</p>
              </div>
            </div>

            {/* Quick Vehicle Switcher Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {MOCK_GARAGE_VEHICLES.map((vehicle) => {
                const isSelected = vehicle.id === selectedVehicleId;
                return (
                  <button
                    key={vehicle.id}
                    onClick={() => setSelectedVehicleId(vehicle.id)}
                    className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                        : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{vehicle.name}</span>
                    <span className="text-[10px] font-mono-tech opacity-80">{vehicle.scale}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Dashboard Vehicle View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            {/* Vehicle Card & Photo */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950 rounded-2xl border border-slate-800/80 p-4 sm:p-5">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={activeVehicle.image}
                    alt={activeVehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-tech font-bold uppercase bg-slate-950/90 text-white border border-slate-700">
                      {activeVehicle.scale} · {activeVehicle.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-tech font-bold bg-emerald-500/90 text-white shadow">
                      {activeVehicle.status}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-2xl text-white">
                    {activeVehicle.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono-tech mt-1">
                    {activeVehicle.lastRun}
                  </p>
                </div>
              </div>

              {/* Status summary pill */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Repuestos compatibles:</span>
                <span className="font-mono-tech font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                  {activeVehicle.recommendedPartsCount} disponibles en Marketplace
                </span>
              </div>
            </div>

            {/* Technical Telemetry & Components Spec */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-orange-400 text-xs font-mono-tech uppercase font-bold mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    Motor & Variador ESC
                  </div>
                  <p className="font-bold text-white text-sm">{activeVehicle.motorEsc}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono-tech uppercase font-bold mb-1">
                    <BatteryCharging className="w-3.5 h-3.5" />
                    Batería Configurada
                  </div>
                  <p className="font-bold text-white text-sm">{activeVehicle.batteryType}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 sm:col-span-2">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono-tech uppercase font-bold mb-1">
                    <Gauge className="w-3.5 h-3.5 text-blue-400" />
                    Sistema de Transmisión
                  </div>
                  <p className="font-bold text-white text-sm">{activeVehicle.transmission}</p>
                </div>
              </div>

              {/* Upgrades List */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-orange-400" />
                    Mejoras & Upgrades Instalados
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono-tech">
                    {activeVehicle.installedUpgrades.length} Componentes
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVehicle.installedUpgrades.map((upgrade, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{upgrade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Historial de mantenimiento y compatibilidad en la nube</span>
                </div>

                <button
                  onClick={onCreateGarage}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 shadow-lg shadow-orange-500/20 transition-all cursor-pointer text-sm"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Crear mi Garage</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
