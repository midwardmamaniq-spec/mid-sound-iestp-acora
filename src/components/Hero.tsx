import React from 'react';
import { ShieldCheck, Award, ArrowRight, Volume2, Sparkles, MapPin, Radio, Activity } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onExplorePackages: () => void;
  onOpenLicensing: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onExplorePackages,
  onOpenLicensing
}) => {
  return (
    <section id="inicio" className="relative bg-[#070A12] border-b border-cyan-500/20 overflow-hidden text-slate-100">
      
      {/* Background Stage Light Beam Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-20 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Institutional Licenciamiento 2027 Banner with Neon Accent */}
      <div className="bg-[#0B1224] border-b border-amber-500/30 text-amber-300 text-xs py-2 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Proceso Oficial MINEDU
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-200">
              Rumbo al <strong className="text-amber-300 font-bold">Licenciamiento Institucional 2027</strong> (R.V.M. N° 276-2019-MINEDU)
            </span>
          </div>
          <button 
            onClick={onOpenLicensing}
            className="text-amber-300 hover:text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer text-xs underline decoration-amber-400/50 underline-offset-2"
          >
            <span>Matriz de Condiciones Básicas (CBC I - VI)</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Editorial Proposition & Institutional Value */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Animated Equalizer Wave Strip + Kicker */}
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Audio Equalizer Wave Graphic */}
                <div className="flex items-end gap-1 h-5 px-2.5 py-1 bg-slate-900/90 rounded-md border border-cyan-500/30 shadow-[0_0_12px_rgba(0,242,254,0.2)]">
                  <span className="w-1 bg-cyan-400 rounded-xs animate-eq-1"></span>
                  <span className="w-1 bg-cyan-300 rounded-xs animate-eq-2"></span>
                  <span className="w-1 bg-sky-400 rounded-xs animate-eq-3"></span>
                  <span className="w-1 bg-purple-400 rounded-xs animate-eq-4"></span>
                  <span className="w-1 bg-purple-500 rounded-xs animate-eq-5"></span>
                  <span className="w-1 bg-fuchsia-400 rounded-xs animate-eq-6"></span>
                  <span className="w-1 bg-cyan-400 rounded-xs animate-eq-7"></span>
                  <span className="w-1 bg-amber-400 rounded-xs animate-eq-8"></span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span className="text-cyan-400 font-extrabold text-glow-cyan">MID SOUND</span>
                  <span aria-hidden="true" className="text-slate-700">/</span>
                  <span className="text-purple-300 font-semibold">Sonido Profesional de Alta Gama</span>
                  <span aria-hidden="true" className="text-slate-700">/</span>
                  <span className="text-slate-300">Región Puno</span>
                </div>
              </div>

              {/* Main Headline with High Contrast Neon Gradients */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] text-balance">
                Alquiler de equipos de <span className="bg-gradient-to-r from-[#00F2FE] via-sky-400 to-[#9E00FF] bg-clip-text text-transparent">sonido profesional</span> e iluminación para eventos en el Altiplano
              </h1>

              {/* Natural body copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                La Unidad Productiva <strong className="text-cyan-300 font-bold">MID SOUND</strong> del <strong className="text-white font-bold">IESTP Ácora</strong> pone a disposición de municipalidades, conjuntos folclóricos, colegios y empresas infraestructura electroacústica certificada: sistemas Line Array RCF, consolas digitales 96kHz, microfonía UHF y operadores técnicos especializados.
              </p>

              {/* Actions with Dynamic Glow Effects */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreCatalog}
                  className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00F2FE] via-cyan-300 to-[#7928CA] rounded-xl hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] active:scale-95 transition-all shadow-lg flex items-center gap-2.5 cursor-pointer group"
                >
                  <Volume2 className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                  <span>Explorar Equipos Disponibles</span>
                </button>

                <button
                  onClick={onExplorePackages}
                  className="px-5 py-3.5 text-sm font-bold text-slate-200 bg-[#0F172A] border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:text-white hover:bg-[#131F38] hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Ver Paquetes Integrales</span>
                </button>
              </div>

              {/* Trust & Guarantee Markers */}
              <div className="pt-5 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Comprobante Oficial</span>
                    Facturación con RUC Institucional para rendición de cuentas.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operadores Técnicos</span>
                    Docentes y sonidistas con certificación de audio en vivo.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Cobertura Regional</span>
                    Ácora, Ilave, Juli, Chucuito, Puno y Yunguyo.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: High Fidelity Photographic Showcase with Neon Stage Glow */}
          <div className="lg:col-span-5 relative flex items-center">
            
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-purple-600/40 to-amber-500/40 opacity-70 blur-lg"></div>

            <div className="w-full h-full min-h-[380px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl relative bg-[#0B1020] group">
              <img
                src="/src/assets/images/hero_audio_production_1793135976729.jpg"
                alt="Consola digital de audio y sistema Line Array en vivo con fondo de la cordillera del Altiplano"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              
              {/* Bottom Scrim with Stage Lights Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/40 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 mb-1.5">
                  <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-glow-cyan uppercase tracking-wider">Sonorización en el Altiplano Puneño</span>
                </div>
                <p className="text-base font-extrabold text-white leading-snug">
                  Potencia acústica y calibración DSP para grandes altitudes y espacios al aire libre
                </p>
                <div className="mt-3 text-xs text-slate-300 flex items-center gap-2 pt-2 border-t border-slate-700/60">
                  <span className="text-amber-300 font-semibold">Equipamiento RCF & Allen & Heath</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-cyan-300 font-mono">MID SOUND Ácora</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI strip with glowing figures */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
          <div className="space-y-1 p-3 rounded-xl bg-[#0B1224]/50 border border-slate-800/60">
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent font-mono tabular-nums">
              100%
            </span>
            <p className="text-xs text-slate-400 font-medium">Equipos de audio profesional con mantenimiento preventivo</p>
          </div>
          <div className="space-y-1 p-3 rounded-xl bg-[#0B1224]/50 border border-slate-800/60">
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent font-mono tabular-nums">
              2027
            </span>
            <p className="text-xs text-slate-400 font-medium">Año de Licenciamiento Institucional proyectado ante MINEDU</p>
          </div>
          <div className="space-y-1 p-3 rounded-xl bg-[#0B1224]/50 border border-slate-800/60">
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent font-mono tabular-nums">
              +120
            </span>
            <p className="text-xs text-slate-400 font-medium">Eventos cívicos y patronales sonorizados con éxito en Puno</p>
          </div>
          <div className="space-y-1 p-3 rounded-xl bg-[#0B1224]/50 border border-slate-800/60">
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent font-mono tabular-nums">
              6 CBC
            </span>
            <p className="text-xs text-slate-400 font-medium">Condiciones Básicas de Calidad integradas a la unidad productiva</p>
          </div>
        </div>

      </div>
    </section>
  );
};
