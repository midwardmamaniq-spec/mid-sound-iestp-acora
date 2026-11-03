import React from 'react';
import { SoundPackage } from '../types';
import { Users, Clock, Wrench, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  packages: SoundPackage[];
  onSelectPackage: (pkg: SoundPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onSelectPackage
}) => {
  return (
    <section id="paquetes" className="py-16 bg-[#070A12] border-b border-cyan-500/15 text-slate-100 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Soluciones Integrales MID SOUND</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400">Personal Técnico & Montaje Certificado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Paquetes Especiales para <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Eventos en Puno</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Diseñados para responder a los requerimientos acústicos y logísticos del altiplano. Incluyen transporte seguro, calibración previa e ingenieros de sonido en vivo del IESTP Ácora.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => {
            const isFeatured = pkg.highlighted;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#111A30] to-[#0A0F1D] text-white border-2 border-cyan-400 shadow-[0_0_35px_rgba(0,242,254,0.25)] scale-[1.02]'
                    : 'bg-[#0B1220] text-slate-200 border border-slate-800/90 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)]'
                }`}
              >
                {/* Featured Notice */}
                {isFeatured && (
                  <div className="text-[11px] font-extrabold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                    ★ Más Solicitado en Puno
                  </div>
                )}

                <div>
                  {/* Category & Capacity */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold mb-2 text-cyan-300/90">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pkg.capacity}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-slate-800">
                    <span className="text-[10px] uppercase font-bold tracking-wider block text-slate-500">
                      Inversión Institucional
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className={`text-2xl font-black font-mono tabular-nums ${
                        isFeatured ? 'text-amber-400 text-glow-cyan' : 'text-cyan-400'
                      }`}>
                        S/ {pkg.pricePerDay.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-400">
                        / jornada
                      </span>
                    </div>
                  </div>

                  {/* Equipment Included */}
                  <div className="mt-5 space-y-2 text-xs">
                    <span className="font-bold block text-slate-200">
                      Equipamiento Incluido:
                    </span>
                    <ul className="space-y-1.5">
                      {pkg.includedEquipment.map((eq, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-cyan-400' : 'text-cyan-500'
                          }`} />
                          <span className="leading-tight text-slate-300">
                            {eq}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Details */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
                    <div className="flex items-start gap-1.5">
                      <Wrench className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                      <span>{pkg.technicalStaff}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span>Montaje: {pkg.setupTime}</span>
                    </div>
                  </div>

                </div>

                {/* Action CTA with Glowing Neon Button */}
                <div className="mt-6 pt-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3 px-4 text-xs font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400 text-slate-950 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] active:scale-95'
                        : 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] active:scale-95'
                    }`}
                  >
                    <span>Cotizar este Paquete</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
