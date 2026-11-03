import React from 'react';
import { Equipment } from '../types';
import { X, Check, Plus, ShieldCheck, Zap, Volume2, Info, ArrowRight } from 'lucide-react';

interface EquipmentDetailModalProps {
  equipment: Equipment | null;
  onClose: () => void;
  onAddToCart: (item: Equipment) => void;
  isAdded: boolean;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({
  equipment,
  onClose,
  onAddToCart,
  isAdded
}) => {
  if (!equipment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1220] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col border border-cyan-500/30 text-slate-100">
        
        {/* Header with Stage Lighting Accent */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#080D18] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-80" />
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <span>{equipment.brand}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>{equipment.categoryLabel}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5 tracking-tight">
              {equipment.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal de detalles"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-300">
          
          {/* Main Visual & Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative group shadow-lg">
              <img
                src={equipment.image}
                alt={equipment.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 right-2 bg-slate-950/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-cyan-300 border border-cyan-500/30 font-medium">
                Patrimonio IESTP Ácora
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Tarifa por día</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-cyan-400 font-mono tabular-nums text-glow-cyan">
                    S/ {equipment.dailyRate.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400">/ 24 horas</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-bold text-slate-200 block">Puntos Destacados:</span>
                {equipment.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Stock disponible: <strong className="text-white font-mono">{equipment.stockAvailable} unidades</strong>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
              Descripción y Rendimiento Acústico
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {equipment.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Ficha Técnica Detallada
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-[#0E1629] p-4 rounded-xl border border-slate-800">
              {equipment.specs.potenciaRMS && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Potencia RMS</span>
                  <span className="font-semibold text-white font-mono tabular-nums">{equipment.specs.potenciaRMS}</span>
                </div>
              )}
              {equipment.specs.splMax && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Presión Sonora (SPL)</span>
                  <span className="font-semibold text-cyan-400 font-mono tabular-nums">{equipment.specs.splMax}</span>
                </div>
              )}
              {equipment.specs.canales && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Canales / Capacidad</span>
                  <span className="font-semibold text-white font-mono tabular-nums">{equipment.specs.canales}</span>
                </div>
              )}
              {equipment.specs.frecuencia && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Respuesta de Frecuencia</span>
                  <span className="font-semibold text-white font-mono tabular-nums">{equipment.specs.frecuencia}</span>
                </div>
              )}
              {equipment.specs.cobertura && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Patrón de Cobertura</span>
                  <span className="font-semibold text-white">{equipment.specs.cobertura}</span>
                </div>
              )}
              {equipment.specs.consumoElectrico && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Alimentación Eléctrica</span>
                  <span className="font-semibold text-white font-mono">{equipment.specs.consumoElectrico}</span>
                </div>
              )}
              {equipment.specs.peso && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Peso Unitario</span>
                  <span className="font-semibold text-white font-mono tabular-nums">{equipment.specs.peso}</span>
                </div>
              )}
              {equipment.specs.conectividad && (
                <div className="col-span-2">
                  <span className="text-slate-400 block text-[11px]">Conectividad & Protocolos</span>
                  <span className="font-semibold text-slate-200">{equipment.specs.conectividad}</span>
                </div>
              )}
            </div>
          </div>

          {/* Included Accessories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Accesorios Incluidos en la Entrega
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {equipment.includes.map((inc, i) => (
                <li key={i} className="flex items-center gap-2 p-2.5 bg-[#0E1629] rounded-lg border border-slate-800/80 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for statement */}
          <div className="p-3.5 bg-amber-500/10 rounded-xl border border-amber-500/30 text-xs text-amber-200">
            <strong className="text-amber-300">Recomendación de Uso:</strong> {equipment.idealFor}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#080D18] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cerrar Ficha
          </button>

          <button
            onClick={() => {
              onAddToCart(equipment);
              onClose();
            }}
            className={`px-5 py-2.5 text-xs font-bold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
              isAdded
                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                : 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 hover:brightness-110 active:scale-95 shadow-[0_0_20px_rgba(0,242,254,0.35)]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 text-slate-950 stroke-[3]" />
                <span>En la Cotización Actual</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-slate-950 stroke-[3]" />
                <span>Agregar a la Cotización</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
