import React, { useState } from 'react';
import { X, FileText, BookOpen, CheckCircle, Send, ShieldAlert, Download } from 'lucide-react';

interface TransparencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransparencyModal: React.FC<TransparencyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'transparencia' | 'reclamaciones'>('transparencia');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const [claimForm, setClaimForm] = useState({
    nombre: '',
    dniRuc: '',
    email: '',
    telefono: '',
    tipo: 'Reclamo' as 'Reclamo' | 'Queja',
    detalle: '',
    pedido: ''
  });

  if (!isOpen) return null;

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimForm.nombre || !claimForm.dniRuc || !claimForm.detalle) return;

    const code = `REC-ACORA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(code);
  };

  const transparencyDocs = [
    { title: 'Proyecto Educativo Institucional (PEI 2024-2029)', res: 'R.D. N° 012-2024-DREP-IESTP-ACORA', size: '2.4 MB' },
    { title: 'Plan Anual de Trabajo (PAT 2025-2026)', res: 'R.D. N° 025-2025-IESTP-ACORA', size: '1.8 MB' },
    { title: 'Reglamento Interno Institucional Actualizado (RI)', res: 'R.D. N° 038-2024-IESTP-ACORA', size: '3.1 MB' },
    { title: 'Reglamento del Centro de Producción de Bienes y Servicios (CEPROBYS)', res: 'R.D. N° 048-2024-IESTP-ACORA', size: '1.2 MB' },
    { title: 'Tarifario Oficial de Alquiler de Sonido e Iluminación (RDR)', res: 'R.D. N° 005-2025-IESTP-ACORA', size: '890 KB' },
    { title: 'Informe de Rendición de Cuentas RDR Ejercicio 2024', res: 'Oficio Múltiple N° 014-2025-DREP', size: '1.5 MB' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1220] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-cyan-500/30 text-slate-100">
        
        {/* Header with segmented switch */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#080D18] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-purple-500 opacity-80" />
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <span>MINEDU · Ley N° 30512</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>DREP Puno</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Portal de Transparencia & Libro de Reclamaciones
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="px-6 pt-3 border-b border-slate-800 flex gap-6 bg-[#080D18] text-xs font-semibold">
          <button
            onClick={() => setActiveTab('transparencia')}
            className={`pb-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'transparencia'
                ? 'border-cyan-400 text-cyan-400 font-bold text-glow-cyan'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Transparencia Estándar Institucional
          </button>
          <button
            onClick={() => setActiveTab('reclamaciones')}
            className={`pb-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'reclamaciones'
                ? 'border-cyan-400 text-cyan-400 font-bold text-glow-cyan'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Libro de Reclamaciones Virtual
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-300 text-xs">
          {activeTab === 'transparencia' ? (
            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                En cumplimiento del principio de máxima publicidad y las disposiciones del Ministerio de Educación, el <strong className="text-white font-bold">IESTP Ácora</strong> pone a disposición de la comunidad educativa y ciudadanía los documentos normativos que rigen el funcionamiento del instituto y de su Unidad Productiva de Sonido.
              </p>

              <div className="space-y-2.5 mt-4">
                {transparencyDocs.map((doc, idx) => (
                  <div key={idx} className="p-3 bg-[#0E1629] border border-slate-800 rounded-xl flex items-center justify-between gap-3 hover:border-cyan-500/40 hover:bg-[#121c33] transition-all">
                    <div className="flex items-start gap-2.5">
                      <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">{doc.title}</span>
                        <span className="text-[11px] text-slate-400">{doc.res}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Descargando copia oficial de: ${doc.title}`)}
                      className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 flex items-center gap-1.5 font-semibold text-[11px] shrink-0 cursor-pointer transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{doc.size}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {submittedCode ? (
                <div className="p-6 text-center bg-emerald-950/40 border border-emerald-500/40 rounded-xl space-y-3">
                  <div className="w-12 h-12 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <CheckCircle className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-base font-bold text-emerald-300">
                    Reclamación Registrada Exitosamente
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                    Hemos registrado tu comunicación en nuestro Libro de Reclamaciones Virtual. Se te notificará una respuesta fundamentada dentro del plazo legal de 15 días hábiles.
                  </p>
                  <div className="p-3 bg-[#0E1629] rounded-lg border border-emerald-500/40 inline-block font-mono font-bold text-cyan-300 text-sm">
                    Código de Registro: {submittedCode}
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmittedCode(null)}
                      className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer"
                    >
                      Registrar otra comunicación
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitClaim} className="space-y-4">
                  <div className="bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/30 flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-amber-200 leading-relaxed">
                      Conforme al D.S. 011-2011-PCM y el Código de Protección al Consumidor, esta hoja de reclamación permite manifestar disconformidad con los servicios brindados por el IESTP Ácora.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="font-semibold text-slate-300 block mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={claimForm.nombre}
                        onChange={(e) => setClaimForm({ ...claimForm, nombre: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="Nombres y Apellidos"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-300 block mb-1">DNI o RUC *</label>
                      <input
                        type="text"
                        required
                        value={claimForm.dniRuc}
                        onChange={(e) => setClaimForm({ ...claimForm, dniRuc: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="Número de documento"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-300 block mb-1">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        value={claimForm.email}
                        onChange={(e) => setClaimForm({ ...claimForm, email: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-slate-300 block mb-1">Teléfono / Celular</label>
                      <input
                        type="tel"
                        value={claimForm.telefono}
                        onChange={(e) => setClaimForm({ ...claimForm, telefono: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="951 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-300 block mb-1">Tipo de Comunicación</label>
                    <div className="flex flex-col sm:flex-row gap-4 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                        <input
                          type="radio"
                          name="tipo"
                          value="Reclamo"
                          checked={claimForm.tipo === 'Reclamo'}
                          onChange={() => setClaimForm({ ...claimForm, tipo: 'Reclamo' })}
                          className="accent-cyan-400"
                        />
                        <span>Reclamo (Disconformidad con el servicio/equipo)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                        <input
                          type="radio"
                          name="tipo"
                          value="Queja"
                          checked={claimForm.tipo === 'Queja'}
                          onChange={() => setClaimForm({ ...claimForm, tipo: 'Queja' })}
                          className="accent-cyan-400"
                        />
                        <span>Queja (Disconformidad con la atención)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-300 block mb-1">Detalle del Reclamo o Queja *</label>
                    <textarea
                      required
                      rows={3}
                      value={claimForm.detalle}
                      onChange={(e) => setClaimForm({ ...claimForm, detalle: e.target.value })}
                      placeholder="Describa claramente los hechos ocurridos..."
                      className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-300 block mb-1">Pedido Concreto del Usuario</label>
                    <input
                      type="text"
                      value={claimForm.pedido}
                      onChange={(e) => setClaimForm({ ...claimForm, pedido: e.target.value })}
                      placeholder="Qué solución solicita a la institución..."
                      className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold rounded-lg hover:brightness-110 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Enviar Hoja de Reclamación</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
