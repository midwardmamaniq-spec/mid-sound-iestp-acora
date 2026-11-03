import React, { useState } from 'react';
import { MINEDU_CBC_MATRIX, LICENSED_INSTITUTES_PUNO } from '../data/cbcData';
import { CBCIndicator } from '../types';
import { 
  Building2, 
  GraduationCap, 
  Layers, 
  UserCheck, 
  Coins, 
  Briefcase, 
  CheckCircle, 
  ExternalLink, 
  FileText, 
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const LicensingCBCSection: React.FC = () => {
  const [selectedCBC, setSelectedCBC] = useState<CBCIndicator>(MINEDU_CBC_MATRIX[2]); // CBC-III default (Equipment & Infra)

  const getCBCIcon = (code: string) => {
    switch (code) {
      case 'CBC-I': return <Building2 className="w-4 h-4 text-cyan-400" />;
      case 'CBC-II': return <GraduationCap className="w-4 h-4 text-purple-400" />;
      case 'CBC-III': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'CBC-IV': return <UserCheck className="w-4 h-4 text-amber-400" />;
      case 'CBC-V': return <Coins className="w-4 h-4 text-emerald-400" />;
      case 'CBC-VI': return <Briefcase className="w-4 h-4 text-sky-400" />;
      default: return <FileText className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="licenciamiento" className="py-16 bg-[#080D1A] border-b border-cyan-500/15 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Régimen Institucional MINEDU</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400">R.V.M. N° 276-2019-MINEDU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Condiciones Básicas de Calidad · <span className="bg-gradient-to-r from-amber-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Licenciamiento 2027</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            El <strong className="text-white font-bold">IESTP Ácora</strong> avanza de manera firme en el proceso de Licenciamiento Institucional ante el Ministerio de Educación. La Unidad Productiva <strong className="text-cyan-400 font-bold">MID SOUND</strong> garantiza infraestructura moderna (CBC-III), captación de recursos directamente recaudados RDR (CBC-V) y formación práctica real para estudiantes (CBC-II).
          </p>
        </div>

        {/* CBC Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 CBC Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 block mb-2">
              Las 6 Condiciones Básicas Exigidas por MINEDU:
            </span>

            {MINEDU_CBC_MATRIX.map((cbc) => {
              const isSelected = selectedCBC.code === cbc.code;

              return (
                <button
                  key={cbc.code}
                  onClick={() => setSelectedCBC(cbc)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#121B33] to-[#0E162B] border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.2)] text-white'
                      : 'bg-[#0B1120] border-slate-800 text-slate-300 hover:bg-[#0F172B] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? 'bg-cyan-500/20 border border-cyan-400/40 shadow-xs' : 'bg-slate-900 border border-slate-800'
                    }`}>
                      {getCBCIcon(cbc.code)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-cyan-400">{cbc.code}</span>
                        <span aria-hidden="true" className="text-slate-700">·</span>
                        <span className="text-xs text-slate-400 font-medium">{cbc.status}</span>
                      </div>
                      <p className="text-xs font-semibold text-white truncate mt-0.5">
                        {cbc.title.split(':')[1] || cbc.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold font-mono tabular-nums text-cyan-400">
                      {cbc.complianceRate}%
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                    }`} />
                  </div>
                </button>
              );
            })}

            {/* Official MINEDU Link */}
            <div className="pt-2">
              <a
                href="https://www.gob.pe/7775-licenciamiento-para-instituto-y-escuela-de-educacion-superior-del-minedu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border border-cyan-500/30 text-white rounded-xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all text-xs font-bold group"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Portal Oficial de Licenciamiento MINEDU</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Detailed CBC Compliance Card */}
          <div className="lg:col-span-7 bg-[#0B1222] rounded-2xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Glow in top right */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-950/60 border border-cyan-400/30 text-cyan-400 rounded-xl shadow-xs">
                  {getCBCIcon(selectedCBC.code)}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400">{selectedCBC.code}</span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {selectedCBC.title}
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Nivel de Cumplimiento</span>
                <span className="text-2xl font-black font-mono text-cyan-400 tabular-nums text-glow-cyan">
                  {selectedCBC.complianceRate}%
                </span>
              </div>
            </div>

            {/* Standard Description */}
            <div className="mt-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Exigencia Técnica MINEDU:
              </span>
              <p className="text-sm text-slate-300 leading-relaxed bg-[#0E1629] p-4 rounded-xl border border-slate-800">
                {selectedCBC.description}
              </p>
            </div>

            {/* Institutional Action at IESTP Ácora */}
            <div className="mt-5">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1.5">
                Implementación MID SOUND en el IESTP Ácora:
              </span>
              <p className="text-sm text-white font-medium leading-relaxed bg-[#0F182E]/60 p-4 rounded-xl border border-cyan-500/20">
                {selectedCBC.institutionalAction}
              </p>
            </div>

            {/* Evidence Documents */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Evidencias Documentales Verificables:
              </span>
              <div className="space-y-2">
                {selectedCBC.evidenceDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-[#0E1629] rounded-xl border border-slate-800 text-xs hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-bold text-white">{doc.name}</span>
                    </div>
                    <div className="text-right text-slate-400 text-[11px] shrink-0">
                      <span>{doc.type}</span>
                      <span aria-hidden="true" className="mx-1 text-slate-600">·</span>
                      <span className="text-amber-400 font-medium">{doc.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reference */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="italic">{selectedCBC.mineduReference}</span>
              <span className="font-bold text-cyan-400">Expediente Licenciamiento 2027</span>
            </div>

          </div>

        </div>

        {/* Peer Institutes in Puno Region already licensed */}
        <div className="mt-14 pt-10 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Red de Institutos Públicos Licenciados de Puno
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Referencias de Excelencia en la Región Puno
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Institutos públicos que culminaron su proceso ante MINEDU y con los cuales el IESTP Ácora comparte mesas técnicas y buenas prácticas formativas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LICENSED_INSTITUTES_PUNO.map((inst, idx) => (
              <a
                key={idx}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B1220] p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-emerald-400 font-bold mb-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {inst.tag}
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {inst.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{inst.location}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                  {inst.resolution}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
