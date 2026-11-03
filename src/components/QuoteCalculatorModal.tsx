import React, { useState, useMemo } from 'react';
import { CartItem, PackageCartItem, QuoteDetails } from '../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Calendar, 
  MapPin, 
  Send, 
  Printer, 
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  packageCartItems: PackageCartItem[];
  onUpdateEquipmentQty: (id: string, delta: number) => void;
  onRemoveEquipment: (id: string) => void;
  onUpdatePackageQty: (id: string, delta: number) => void;
  onRemovePackage: (id: string) => void;
  onGenerateOfficialProforma: (quoteData: QuoteDetails, financialSummary: {
    equipmentSubtotal: number;
    packagesSubtotal: number;
    techCost: number;
    transportCost: number;
    totalAmount: number;
  }) => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  packageCartItems,
  onUpdateEquipmentQty,
  onRemoveEquipment,
  onUpdatePackageQty,
  onRemovePackage,
  onGenerateOfficialProforma
}) => {
  const [formData, setFormData] = useState<QuoteDetails>({
    customerName: '',
    organization: '',
    documentType: 'DNI',
    documentNumber: '',
    email: '',
    phone: '',
    eventDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    eventDurationDays: 1,
    eventLocation: 'Ácora (Centro y Comunidades)',
    eventType: 'Cívico/Institucional',
    includeTechnician: true,
    includeTransportation: true,
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const transportLocations: { name: string; cost: number }[] = [
    { name: 'Ácora (Centro y Comunidades)', cost: 40 },
    { name: 'Ilave (El Collao)', cost: 60 },
    { name: 'Chucuito', cost: 60 },
    { name: 'Puno Ciudad', cost: 90 },
    { name: 'Juli (Chucuito)', cost: 120 },
    { name: 'Yunguyo', cost: 180 },
    { name: 'Desaguadero', cost: 200 },
    { name: 'Otra localidad en Puno', cost: 100 }
  ];

  const selectedTransportCost = useMemo(() => {
    if (!formData.includeTransportation) return 0;
    const match = transportLocations.find(l => l.name === formData.eventLocation);
    return match ? match.cost : 50;
  }, [formData.includeTransportation, formData.eventLocation]);

  const technicianCost = useMemo(() => {
    if (!formData.includeTechnician) return 0;
    return 120 * formData.eventDurationDays;
  }, [formData.includeTechnician, formData.eventDurationDays]);

  const equipmentSubtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.equipment.dailyRate * item.quantity * formData.eventDurationDays);
    }, 0);
  }, [cartItems, formData.eventDurationDays]);

  const packagesSubtotal = useMemo(() => {
    return packageCartItems.reduce((acc, item) => {
      return acc + (item.packageData.pricePerDay * item.quantity * formData.eventDurationDays);
    }, 0);
  }, [packageCartItems, formData.eventDurationDays]);

  const totalAmount = equipmentSubtotal + packagesSubtotal + technicianCost + selectedTransportCost;

  if (!isOpen) return null;

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.customerName.trim()) {
      errors.customerName = 'Ingrese el nombre del solicitante o representante.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Ingrese un número de teléfono o WhatsApp de contacto.';
    }
    if (!formData.documentNumber.trim()) {
      errors.documentNumber = 'Ingrese el número de DNI o RUC.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateProforma = () => {
    if (!validateForm()) return;

    onGenerateOfficialProforma(formData, {
      equipmentSubtotal,
      packagesSubtotal,
      techCost: technicianCost,
      transportCost: selectedTransportCost,
      totalAmount
    });
  };

  const handleSendWhatsApp = () => {
    if (!validateForm()) return;

    const message = `*SOLICITUD DE ALQUILER - MID SOUND IESTP ÁCORA*%0A` +
      `*Solicitante:* ${formData.customerName}%0A` +
      `*Entidad/Org:* ${formData.organization || 'Particular'}%0A` +
      `*${formData.documentType}:* ${formData.documentNumber}%0A` +
      `*Teléfono:* ${formData.phone}%0A` +
      `*Tipo de Evento:* ${formData.eventType}%0A` +
      `*Fecha:* ${formData.eventDate} (${formData.eventDurationDays} día(s))%0A` +
      `*Lugar:* ${formData.eventLocation}%0A` +
      `*Técnico Incluido:* ${formData.includeTechnician ? 'Sí' : 'No'}%0A` +
      `*Transporte Incluido:* ${formData.includeTransportation ? 'Sí' : 'No'}%0A` +
      `*Total Estimado:* S/ ${totalAmount.toFixed(2)}%0A` +
      `*Detalles:* ${formData.notes || 'Sin observaciones adicionales'}`;

    window.open(`https://wa.me/51968752081?text=${message}`, '_blank');
  };

  const hasItems = cartItems.length > 0 || packageCartItems.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1220] rounded-2xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col border border-cyan-500/30 overflow-hidden text-slate-100">
        
        {/* Modal Header with MID SOUND Emblem */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#080D18]">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-70 blur-xs"></div>
              <img 
                src="/src/assets/images/logo_mid_sound_1793209007289.jpg" 
                alt="Logo MID SOUND Oficial"
                referrerPolicy="no-referrer"
                className="relative w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-cyan-400 shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <span className="font-extrabold text-white">MID SOUND</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-400">IESTP Ácora CEPROBYS</span>
                <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
                <span className="hidden sm:inline text-slate-500">RUC: 20601245891</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Cotizador & Solicitud de Reserva de Equipos
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal de cotización"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 bg-[#0B1220]">
          
          {/* Section: Selected Equipment & Packages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>1. Equipos y Paquetes Seleccionados</span>
            </h3>

            {!hasItems ? (
              <div className="p-6 text-center bg-[#0E1626] border border-dashed border-slate-700 rounded-xl">
                <p className="text-sm text-slate-300 font-semibold">Aún no has agregado equipos a tu cotización.</p>
                <p className="text-xs text-slate-400 mt-1">Explora nuestro catálogo o los paquetes y pulsa "Añadir".</p>
                <button
                  onClick={onClose}
                  className="mt-3 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-lg hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all cursor-pointer"
                >
                  Ir al Catálogo de Equipos
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Packages */}
                {packageCartItems.map((item) => (
                  <div key={item.packageData.id} className="p-3.5 bg-gradient-to-r from-[#111B30] to-[#0A1020] border border-cyan-500/30 text-white rounded-xl flex items-center justify-between gap-3 text-xs shadow-md">
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-extrabold text-amber-400 block tracking-wider">Paquete Integral</span>
                      <h4 className="font-bold text-white truncate text-sm">{item.packageData.title}</h4>
                      <p className="text-slate-400 text-[11px] truncate">{item.packageData.capacity}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center border border-slate-700 rounded-lg bg-slate-900">
                        <button 
                          onClick={() => onUpdatePackageQty(item.packageData.id, -1)}
                          className="p-1 hover:text-cyan-400 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 font-mono tabular-nums text-white font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdatePackageQty(item.packageData.id, 1)}
                          className="p-1 hover:text-cyan-400 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono font-bold tabular-nums text-amber-400 w-24 text-right text-sm">
                        S/ {(item.packageData.pricePerDay * item.quantity * formData.eventDurationDays).toFixed(2)}
                      </span>

                      <button
                        onClick={() => onRemovePackage(item.packageData.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                        title="Quitar paquete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Individual Equipment */}
                {cartItems.map((item) => (
                  <div key={item.equipment.id} className="p-3.5 bg-[#0E1629] border border-slate-800 rounded-xl flex items-center justify-between gap-3 text-xs">
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase text-cyan-400 font-bold block">{item.equipment.brand}</span>
                      <h4 className="font-bold text-white truncate text-sm">{item.equipment.name}</h4>
                      <span className="text-slate-400 font-mono text-[11px]">S/ {item.equipment.dailyRate.toFixed(2)}/día</span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center border border-slate-700 rounded-lg bg-slate-900">
                        <button 
                          onClick={() => onUpdateEquipmentQty(item.equipment.id, -1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 font-mono tabular-nums text-white font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateEquipmentQty(item.equipment.id, 1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono font-bold tabular-nums text-cyan-400 w-24 text-right text-sm">
                        S/ {(item.equipment.dailyRate * item.quantity * formData.eventDurationDays).toFixed(2)}
                      </span>

                      <button
                        onClick={() => onRemoveEquipment(item.equipment.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer transition-colors"
                        title="Quitar equipo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section: Event Configuration & Logistics */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              2. Parámetros del Evento & Logística en Puno
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-300 block mb-1">Fecha del Evento</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-[#0E1629] border border-slate-700 rounded-xl text-white focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-300 block mb-1">Duración (Días)</label>
                <div className="flex items-center border border-slate-700 rounded-xl bg-[#0E1629] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, eventDurationDays: Math.max(1, formData.eventDurationDays - 1) })}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center font-bold font-mono text-cyan-400 tabular-nums">
                    {formData.eventDurationDays} {formData.eventDurationDays === 1 ? 'Día' : 'Días'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, eventDurationDays: formData.eventDurationDays + 1 })}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-300 block mb-1">Lugar de Realización</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.eventLocation}
                    onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-[#0E1629] border border-slate-700 rounded-xl text-white focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                  >
                    {transportLocations.map((loc) => (
                      <option key={loc.name} value={loc.name} className="bg-slate-900 text-white">
                        {loc.name} (Flete: S/ {loc.cost})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Checkboxes for Services */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <label className="p-3.5 rounded-xl border border-slate-800 bg-[#0E1629] flex items-start gap-3 cursor-pointer hover:border-cyan-500/40 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.includeTechnician}
                  onChange={(e) => setFormData({ ...formData, includeTechnician: e.target.checked })}
                  className="mt-0.5 rounded text-cyan-400 focus:ring-cyan-400"
                />
                <div>
                  <span className="font-bold text-white block">Operador Técnico de Sonido FOH</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Docente o técnico certificado a cargo de la mezcla en vivo y calibración (S/ 120/día).
                  </p>
                </div>
              </label>

              <label className="p-3.5 rounded-xl border border-slate-800 bg-[#0E1629] flex items-start gap-3 cursor-pointer hover:border-cyan-500/40 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.includeTransportation}
                  onChange={(e) => setFormData({ ...formData, includeTransportation: e.target.checked })}
                  className="mt-0.5 rounded text-cyan-400 focus:ring-cyan-400"
                />
                <div>
                  <span className="font-bold text-white block">Movilidad y Logística Institucional</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Traslado seguro ida y vuelta de equipos desde el campus Ácora (+ S/ {selectedTransportCost}).
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Section: Customer Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              3. Datos del Solicitante / Entidad Contratante
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-300 block mb-1">
                  Nombre Completo o Razón Social *
                </label>
                <input
                  type="text"
                  placeholder="Ej. Municipalidad Distrital de Ácora / Juan Pérez"
                  value={formData.customerName}
                  onChange={(e) => {
                    setFormData({ ...formData, customerName: e.target.value });
                    if (formErrors.customerName) setFormErrors({ ...formErrors, customerName: '' });
                  }}
                  className={`w-full px-3 py-2 bg-[#0E1629] border rounded-xl text-white ${
                    formErrors.customerName ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {formErrors.customerName && (
                  <span className="text-[10px] text-rose-400 mt-1 block">{formErrors.customerName}</span>
                )}
              </div>

              <div>
                <label className="font-semibold text-slate-300 block mb-1">
                  Organización o Conjunto Folclórico
                </label>
                <input
                  type="text"
                  placeholder="Ej. Morenada Central Ácora / Promoción 2026"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-xl text-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <label className="font-semibold text-slate-300 block mb-1">Doc.</label>
                  <select
                    value={formData.documentType}
                    onChange={(e) => setFormData({ ...formData, documentType: e.target.value as 'DNI' | 'RUC' })}
                    className="w-full px-2 py-2 bg-[#0E1629] border border-slate-700 rounded-xl text-white"
                  >
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="font-semibold text-slate-300 block mb-1">N° de Documento *</label>
                  <input
                    type="text"
                    placeholder={formData.documentType === 'DNI' ? '8 dígitos' : '11 dígitos'}
                    value={formData.documentNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, documentNumber: e.target.value });
                      if (formErrors.documentNumber) setFormErrors({ ...formErrors, documentNumber: '' });
                    }}
                    className={`w-full px-3 py-2 bg-[#0E1629] border rounded-xl text-white ${
                      formErrors.documentNumber ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {formErrors.documentNumber && (
                    <span className="text-[10px] text-rose-400 mt-1 block">{formErrors.documentNumber}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="968 000 000"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                    }}
                    className={`w-full px-3 py-2 bg-[#0E1629] border rounded-xl text-white ${
                      formErrors.phone ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-rose-400 mt-1 block">{formErrors.phone}</span>
                  )}
                </div>
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Tipo de Evento</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                    className="w-full px-2 py-2 bg-[#0E1629] border border-slate-700 rounded-xl text-white"
                  >
                    <option value="Cívico/Institucional">Cívico/Institucional</option>
                    <option value="Folclórico/Patronal">Folclórico/Patronal</option>
                    <option value="Concierto/Festival">Concierto/Festival</option>
                    <option value="Académico/Graduación">Académico/Graduación</option>
                    <option value="Corporativo/Privado">Corporativo/Privado</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-300 block mb-1">
                  Indicaciones Técnicas o Requerimientos Específicos
                </label>
                <textarea
                  rows={2}
                  placeholder="Detalles del escenario, horarios de prueba de sonido o agrupaciones que participarán..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0E1629] border border-slate-700 rounded-xl text-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* Financial Breakdown Table */}
          <div className="bg-[#070D18] border border-cyan-500/30 rounded-2xl p-4 shadow-lg">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Resumen Económico Proyectado · Garantía MID SOUND
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal Equipos ({formData.eventDurationDays} día/s):</span>
                <span className="font-mono tabular-nums text-white">S/ {equipmentSubtotal.toFixed(2)}</span>
              </div>
              {packagesSubtotal > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal Paquetes:</span>
                  <span className="font-mono tabular-nums text-white">S/ {packagesSubtotal.toFixed(2)}</span>
                </div>
              )}
              {formData.includeTechnician && (
                <div className="flex justify-between text-slate-300">
                  <span>Operador Técnico Certificado ({formData.eventDurationDays} día/s):</span>
                  <span className="font-mono tabular-nums text-white">S/ {technicianCost.toFixed(2)}</span>
                </div>
              )}
              {formData.includeTransportation && (
                <div className="flex justify-between text-slate-300">
                  <span>Flete y Logística a {formData.eventLocation}:</span>
                  <span className="font-mono tabular-nums text-white">S/ {selectedTransportCost.toFixed(2)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-extrabold text-white">
                <span>Inversión Total Estimada:</span>
                <span className="text-xl font-mono tabular-nums text-cyan-400 text-glow-cyan font-black">
                  S/ {totalAmount.toFixed(2)}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 pt-1">
                * Emisión de Factura electrónica o Boleta institucional sujeta a la normativa de Recursos Directamente Recaudados (RDR) del IESTP Ácora.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#080D18] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <FileCheck2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Validez de proforma: 7 días hábiles previa verificación de inventario</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleSendWhatsApp}
              disabled={!hasItems}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar por WhatsApp</span>
            </button>

            <button
              onClick={handleCreateProforma}
              disabled={!hasItems}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Generar Proforma Oficial</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
