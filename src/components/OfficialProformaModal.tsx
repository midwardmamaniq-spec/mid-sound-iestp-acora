import React from 'react';
import { QuoteDetails, CartItem, PackageCartItem } from '../types';
import { X, Printer, ShieldCheck, Download, Award, CheckCircle } from 'lucide-react';

interface OfficialProformaModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteData: QuoteDetails;
  cartItems: CartItem[];
  packageCartItems: PackageCartItem[];
  financialSummary: {
    equipmentSubtotal: number;
    packagesSubtotal: number;
    techCost: number;
    transportCost: number;
    totalAmount: number;
  };
}

export const OfficialProformaModal: React.FC<OfficialProformaModalProps> = ({
  isOpen,
  onClose,
  quoteData,
  cartItems,
  packageCartItems,
  financialSummary
}) => {
  if (!isOpen) return null;

  const proformaCode = `PROFORMA-ACORA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const currentDate = new Date().toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.9)] w-full max-w-3xl my-6 border border-cyan-500/30 overflow-hidden flex flex-col">
        
        {/* Modal Top Bar (Hidden on print) */}
        <div className="p-4 bg-[#080D18] text-white flex items-center justify-between border-b border-slate-800 print:hidden relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-amber-400 opacity-80" />
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white tracking-tight">Proforma Institucional Oficial MID SOUND</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 rounded-lg flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(251,191,36,0.35)] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-10 space-y-6 text-slate-900 bg-white" id="printable-proforma">
          
          {/* Official Document Header with MID SOUND Emblem */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <img 
                src="/src/assets/images/logo_mid_sound_1793209007289.jpg" 
                alt="Logo MID SOUND Oficial"
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0 ring-2 ring-amber-400 shadow-sm mt-0.5"
              />
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-slate-500 block">
                  REPÚBLICA DEL PERÚ · MINISTERIO DE EDUCACIÓN · DREP PUNO
                </span>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 mt-0.5 flex flex-wrap items-baseline gap-2">
                  <span>MID SOUND</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">IESTP ÁCORA</span>
                </h1>
                <p className="text-xs font-medium text-slate-700">
                  Instituto de Educación Superior Tecnológico Público Ácora
                </p>
                <p className="text-[11px] text-slate-500">
                  Centro de Producción de Bienes y Servicios (CEPROBYS) · RUC: 20601245891
                </p>
                <p className="text-[10px] text-slate-500">
                  Av. Titicaca s/n, Distrito de Ácora, Provincia de Puno, Región Puno
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right bg-slate-50 border border-slate-200 p-3 rounded-lg sm:min-w-[220px]">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">
                COTIZACIÓN INSTITUCIONAL
              </span>
              <span className="text-sm font-mono font-extrabold text-slate-950 block">
                N° {proformaCode}
              </span>
              <div className="text-[11px] text-slate-600 mt-1">
                <span>Fecha: {currentDate}</span>
              </div>
              <div className="text-[10px] text-emerald-800 font-semibold mt-0.5">
                Validez: 7 días hábiles
              </div>
            </div>
          </div>

          {/* Client & Event Data Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Datos del Solicitante
              </span>
              <p className="font-bold text-slate-950 text-sm mt-0.5">{quoteData.customerName}</p>
              {quoteData.organization && (
                <p className="text-slate-600">Entidad: <span className="font-semibold text-slate-900">{quoteData.organization}</span></p>
              )}
              <p className="text-slate-600">{quoteData.documentType}: <span className="font-mono font-semibold text-slate-900">{quoteData.documentNumber}</span></p>
              <p className="text-slate-600">Teléfono: <span className="font-semibold text-slate-900">{quoteData.phone}</span></p>
            </div>

            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Detalles del Evento
              </span>
              <p className="font-semibold text-slate-900 mt-0.5">Tipo: {quoteData.eventType}</p>
              <p className="text-slate-600">Fecha de Realización: <span className="font-semibold text-slate-900">{quoteData.eventDate}</span></p>
              <p className="text-slate-600">Duración: <span className="font-semibold text-slate-900">{quoteData.eventDurationDays} día(s)</span></p>
              <p className="text-slate-600">Lugar: <span className="font-semibold text-slate-900">{quoteData.eventLocation}</span></p>
            </div>
          </div>

          {/* Itemized Table */}
          <div>
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-900 text-white font-semibold">
                <tr>
                  <th className="py-2.5 px-3">Ítem / Descripción</th>
                  <th className="py-2.5 px-3 text-center">Cant.</th>
                  <th className="py-2.5 px-3 text-center">Días</th>
                  <th className="py-2.5 px-3 text-right">Tarifa Diaria</th>
                  <th className="py-2.5 px-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {packageCartItems.map((pkg, idx) => (
                  <tr key={idx} className="bg-amber-50/40">
                    <td className="py-2.5 px-3">
                      <span className="font-bold text-slate-900 block">{pkg.packageData.title}</span>
                      <span className="text-[10px] text-slate-500">Paquete Integral de Sonido e Iluminación</span>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono">{pkg.quantity}</td>
                    <td className="py-2.5 px-3 text-center font-mono">{quoteData.eventDurationDays}</td>
                    <td className="py-2.5 px-3 text-right font-mono">S/ {pkg.packageData.pricePerDay.toFixed(2)}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold">
                      S/ {(pkg.packageData.pricePerDay * pkg.quantity * quoteData.eventDurationDays).toFixed(2)}
                    </td>
                  </tr>
                ))}

                {cartItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3">
                      <span className="font-bold text-slate-900 block">{item.equipment.name}</span>
                      <span className="text-[10px] text-slate-500">{item.equipment.brand} · {item.equipment.model}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center font-mono">{item.quantity}</td>
                    <td className="py-2.5 px-3 text-center font-mono">{quoteData.eventDurationDays}</td>
                    <td className="py-2.5 px-3 text-right font-mono">S/ {item.equipment.dailyRate.toFixed(2)}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold">
                      S/ {(item.equipment.dailyRate * item.quantity * quoteData.eventDurationDays).toFixed(2)}
                    </td>
                  </tr>
                ))}

                {quoteData.includeTechnician && (
                  <tr>
                    <td className="py-2 px-3">
                      <span className="font-semibold text-slate-900 block">Servicio de Operador Técnico de Sonido FOH</span>
                      <span className="text-[10px] text-slate-500">Técnico o docente especialista en ingeniería acústica</span>
                    </td>
                    <td className="py-2 px-3 text-center font-mono">1</td>
                    <td className="py-2 px-3 text-center font-mono">{quoteData.eventDurationDays}</td>
                    <td className="py-2 px-3 text-right font-mono">S/ 120.00</td>
                    <td className="py-2 px-3 text-right font-mono font-bold">S/ {financialSummary.techCost.toFixed(2)}</td>
                  </tr>
                )}

                {quoteData.includeTransportation && (
                  <tr>
                    <td className="py-2 px-3">
                      <span className="font-semibold text-slate-900 block">Flete y Logística Institucional de Traslado</span>
                      <span className="text-[10px] text-slate-500">Destino: {quoteData.eventLocation}</span>
                    </td>
                    <td className="py-2 px-3 text-center font-mono">1</td>
                    <td className="py-2 px-3 text-center font-mono">-</td>
                    <td className="py-2 px-3 text-right font-mono">S/ {financialSummary.transportCost.toFixed(2)}</td>
                    <td className="py-2 px-3 text-right font-mono font-bold">S/ {financialSummary.transportCost.toFixed(2)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Total & RDR Accounting */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 text-white p-4 rounded-lg">
            <div className="text-xs space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">
                Régimen Tributario & Legal
              </span>
              <p className="text-slate-300">
                Recursos Directamente Recaudados (RDR) bajo la Ley N° 30512.
              </p>
              <p className="text-slate-400 text-[10px]">
                Pago mediante depósito a cuenta corriente institucional del Banco de la Nación.
              </p>
            </div>

            <div className="text-right sm:min-w-[200px]">
              <span className="text-xs uppercase text-slate-400 block font-semibold">Total a Cancelar</span>
              <span className="text-2xl font-black font-mono text-amber-400 tabular-nums">
                S/ {financialSummary.totalAmount.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Terms & Official Seal */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[10px] text-slate-600">
            <div>
              <h5 className="font-bold text-slate-900 uppercase tracking-wider mb-1">
                Condiciones del Servicio Institucional:
              </h5>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Anticipo del 50% al confirmar la reserva y 50% al término del evento.</li>
                <li>Incluye cables de seguridad, conectores PowerCON y verificación previa.</li>
                <li>Sujeto a disponibilidad del inventario físico en el campus de Ácora.</li>
                <li>Cumplimiento de protocolos de seguridad eléctrica y acústica INDECI.</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-lg text-center bg-slate-50/50">
              <img 
                src="/src/assets/images/logo_mid_sound_1793209007289.jpg" 
                alt="Sello de Garantía MID SOUND"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover mb-1.5 shadow-xs ring-2 ring-amber-400"
              />
              <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">
                Garantía MID SOUND · CEPROBYS
              </span>
              <span className="text-slate-500 font-medium">IESTP ÁCORA · PUNO</span>
              <span className="text-[9px] text-emerald-800 font-semibold mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Aprobado para emisión oficial
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
