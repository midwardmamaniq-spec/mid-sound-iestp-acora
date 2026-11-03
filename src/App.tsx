import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { PackagesSection } from './components/PackagesSection';
import { LicensingCBCSection } from './components/LicensingCBCSection';
import { EquipmentDetailModal } from './components/EquipmentDetailModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { OfficialProformaModal } from './components/OfficialProformaModal';
import { TransparencyModal } from './components/TransparencyModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { EQUIPMENT_CATALOG } from './data/equipmentData';
import { SOUND_PACKAGES } from './data/packagesData';
import { Equipment, SoundPackage, CartItem, PackageCartItem, QuoteDetails } from './types';
import { 
  Quote, 
  MapPin, 
  Calendar, 
  PhoneCall, 
  CheckCircle, 
  Sliders, 
  Award, 
  Volume2, 
  Send,
  MessageCircle
} from 'lucide-react';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [packageCartItems, setPackageCartItems] = useState<PackageCartItem[]>([]);
  
  // Modals state
  const [selectedEquipmentForDetail, setSelectedEquipmentForDetail] = useState<Equipment | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTransparencyModalOpen, setIsTransparencyModalOpen] = useState(false);
  
  // Official Proforma generation state
  const [proformaState, setProformaState] = useState<{
    isOpen: boolean;
    quoteData: QuoteDetails | null;
    financialSummary: {
      equipmentSubtotal: number;
      packagesSubtotal: number;
      techCost: number;
      transportCost: number;
      totalAmount: number;
    } | null;
  }>({
    isOpen: false,
    quoteData: null,
    financialSummary: null
  });

  // Derived set of item IDs in cart
  const cartItemIds = useMemo(() => {
    return new Set(cartItems.map(item => item.equipment.id));
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    const eqCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const pkgCount = packageCartItems.reduce((acc, item) => acc + item.quantity, 0);
    return eqCount + pkgCount;
  }, [cartItems, packageCartItems]);

  // Handlers for equipment
  const handleAddToCart = (equipment: Equipment) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.equipment.id === equipment.id);
      if (existing) {
        return prev.map(item =>
          item.equipment.id === equipment.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { equipment, quantity: 1, days: 1 }];
    });
  };

  const handleUpdateEquipmentQty = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.equipment.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveEquipment = (id: string) => {
    setCartItems(prev => prev.filter(item => item.equipment.id !== id));
  };

  // Handlers for packages
  const handleSelectPackage = (pkg: SoundPackage) => {
    setPackageCartItems(prev => {
      const existing = prev.find(item => item.packageData.id === pkg.id);
      if (existing) {
        return prev.map(item =>
          item.packageData.id === pkg.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { packageData: pkg, quantity: 1, days: 1 }];
    });
    setIsQuoteModalOpen(true);
  };

  const handleUpdatePackageQty = (id: string, delta: number) => {
    setPackageCartItems(prev => {
      return prev
        .map(item => {
          if (item.packageData.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as PackageCartItem[];
    });
  };

  const handleRemovePackage = (id: string) => {
    setPackageCartItems(prev => prev.filter(item => item.packageData.id !== id));
  };

  const handleGenerateOfficialProforma = (
    quoteData: QuoteDetails,
    financialSummary: {
      equipmentSubtotal: number;
      packagesSubtotal: number;
      techCost: number;
      transportCost: number;
      totalAmount: number;
    }
  ) => {
    setIsQuoteModalOpen(false);
    setProformaState({
      isOpen: true,
      quoteData,
      financialSummary
    });
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-black">
      
      {/* Top Bar Contract Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsQuoteModalOpen(true)}
        onNavigate={handleNavigate}
        onOpenTransparency={() => setIsTransparencyModalOpen(true)}
      />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => handleNavigate('catalogo')}
          onExplorePackages={() => handleNavigate('paquetes')}
          onOpenLicensing={() => handleNavigate('licenciamiento')}
        />

        {/* Catalog Section */}
        <CatalogSection
          equipmentList={EQUIPMENT_CATALOG}
          onSelectEquipment={(item) => setSelectedEquipmentForDetail(item)}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Turnkey Packages Section */}
        <PackagesSection
          packages={SOUND_PACKAGES}
          onSelectPackage={handleSelectPackage}
        />

        {/* Real Testimonials and Institutional Endorsement */}
        <section className="py-16 bg-[#080D1A] border-b border-cyan-500/15 text-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <span>Respaldo y Experiencia en la Región</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-400">Altiplano Puneño</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Eventos sonorizados por <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">MID SOUND Ácora</span>
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Instituciones públicas, municipalidades provinciales y conjuntos de danza confían en la puntualidad, potencia acústica y profesionalismo de nuestro equipo técnico.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#0C1424] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all flex flex-col justify-between">
                <div>
                  <Quote className="w-6 h-6 text-cyan-400/80 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "Contratamos el sistema Line Array para la serenata y el desfile por el aniversario de nuestro distrito. La fidelidad de las voces y la potencia de los bombos de las bandas no tuvieron saturación alguna en la plaza principal."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Lic. Carlos Choquehuanca</span>
                    <span className="text-slate-400 text-[11px]">Gerencia de Desarrollo Social · Municipalidad Distrital</span>
                  </div>
                  <span className="text-cyan-400 text-[10px] font-mono">Ácora, Puno</span>
                </div>
              </div>

              <div className="bg-[#0C1424] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all flex flex-col justify-between">
                <div>
                  <Quote className="w-6 h-6 text-purple-400/80 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "La microfonía inalámbrica y la consola digital SQ-6 permitieron transmitir nuestro Congreso Internacional de Educación Tecnológica con audio impecable para la sala y vía Facebook Live sin ecos molestos."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Dra. Miriam Quispe Ramos</span>
                    <span className="text-slate-400 text-[11px]">Comisión Organizadora · Red Tecnológica Puno</span>
                  </div>
                  <span className="text-purple-400 text-[10px] font-mono">Puno Ciudad</span>
                </div>
              </div>

              <div className="bg-[#0C1424] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all flex flex-col justify-between">
                <div>
                  <Quote className="w-6 h-6 text-amber-400/80 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "Para nuestro concurso de danzas en honor a la patrona Virgen de la Asunción, los subwoofers y los operadores del instituto demostraron un manejo técnico insuperable durante más de 10 horas seguidas."
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Sr. Walter Mamani Condori</span>
                    <span className="text-slate-400 text-[11px]">Presidente de Conjunto Folclórico · Alferado 2024</span>
                  </div>
                  <span className="text-amber-400 text-[10px] font-mono">Ilave / Juli</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MINEDU CBC 2027 Section */}
        <LicensingCBCSection />

        {/* Quick Contact & Dispatch Callout Banner with Neon Glow */}
        <section className="py-14 bg-gradient-to-r from-[#091122] via-[#0E1A36] to-[#120D2A] text-white border-b border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Atención Inmediata para Instituciones & Particulares
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
                ¿Requieres asesoría acústica o visita técnica previa para tu evento?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Nuestros docentes e ingenieros de sonido evalúan el aforo, la cobertura acústica y requerimientos eléctricos para garantizar una producción de primer nivel.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/51968752081?text=Hola,%20solicito%20asesoría%20técnica%20de%20la%20Unidad%20de%20Sonido%20del%20IESTP%20Ácora"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar por WhatsApp (+51 968 752 081)</span>
              </a>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-5 py-3 text-xs font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                Abrir Cotizador Virtual
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTransparency={() => setIsTransparencyModalOpen(true)}
      />

      {/* Equipment Detail Modal */}
      <EquipmentDetailModal
        equipment={selectedEquipmentForDetail}
        onClose={() => setSelectedEquipmentForDetail(null)}
        onAddToCart={handleAddToCart}
        isAdded={selectedEquipmentForDetail ? cartItemIds.has(selectedEquipmentForDetail.id) : false}
      />

      {/* Quote Calculator & Reservation Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        cartItems={cartItems}
        packageCartItems={packageCartItems}
        onUpdateEquipmentQty={handleUpdateEquipmentQty}
        onRemoveEquipment={handleRemoveEquipment}
        onUpdatePackageQty={handleUpdatePackageQty}
        onRemovePackage={handleRemovePackage}
        onGenerateOfficialProforma={handleGenerateOfficialProforma}
      />

      {/* Official Printable Proforma Sheet Modal */}
      {proformaState.isOpen && proformaState.quoteData && proformaState.financialSummary && (
        <OfficialProformaModal
          isOpen={proformaState.isOpen}
          onClose={() => setProformaState({ isOpen: false, quoteData: null, financialSummary: null })}
          quoteData={proformaState.quoteData}
          cartItems={cartItems}
          packageCartItems={packageCartItems}
          financialSummary={proformaState.financialSummary}
        />
      )}

      {/* Transparency and Libro de Reclamaciones Modal */}
      <TransparencyModal
        isOpen={isTransparencyModalOpen}
        onClose={() => setIsTransparencyModalOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
