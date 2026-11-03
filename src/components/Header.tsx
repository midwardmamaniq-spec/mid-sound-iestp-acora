import React from 'react';
import { ShoppingBag, FileText, Menu, X, Sparkles } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenTransparency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  onOpenTransparency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const whatsappLink =
    'https://wa.me/51968752081?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20equipos%20de%20sonido';

  return (
    <header className="sticky top-0 z-40 bg-[#080D1A]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      
      {/* Institutional Topbar with Social Media Links */}
      <div className="bg-[#050811] text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Institutional Identification */}
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="font-extrabold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              IESTP ÁCORA
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
            <span className="text-slate-300 hidden sm:inline font-medium">CEPROBYS</span>
            <span aria-hidden="true" className="text-slate-700 hidden md:inline">·</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Unidad Productiva de Sonido Profesional & Iluminación
            </span>
          </div>

          {/* Social Media Links & WhatsApp Direct */}
          <div className="flex items-center gap-4 shrink-0 text-[11px]">
            
            {/* WhatsApp Direct with Neon Glow */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp directo al IESTP Ácora (+51 968 752 081)"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold group"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span className="hidden xs:inline">WhatsApp: +51 968 752 081</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            <span aria-hidden="true" className="text-slate-800">|</span>

            {/* Social Icons with Distinct Brand Styling */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/iestpacora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página oficial de Facebook del IESTP Ácora"
                title="Facebook Oficial"
                className="text-slate-400 hover:text-[#1877F2] hover:drop-shadow-[0_0_8px_#1877F2] transition-all p-0.5"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://youtube.com/@iestpacora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal oficial de YouTube del IESTP Ácora"
                title="Canal de YouTube"
                className="text-slate-400 hover:text-[#FF0000] hover:drop-shadow-[0_0_8px_#FF0000] transition-all p-0.5"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://instagram.com/iestpacora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial del IESTP Ácora"
                title="Instagram Oficial"
                className="text-slate-400 hover:text-[#E4405F] hover:drop-shadow-[0_0_8px_#E4405F] transition-all p-0.5"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        
        {/* Zone 1: Brand Wordmark with official MID SOUND Logo & Glow */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
          className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-60 blur-xs group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="/src/assets/images/logo_mid_sound_1793209007289.jpg" 
              alt="Logotipo oficial MID SOUND - Sonido Profesional"
              referrerPolicy="no-referrer"
              className="relative w-11 h-11 rounded-full object-cover shadow-lg ring-2 ring-cyan-400/90 transition-transform group-hover:scale-105 shrink-0"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight flex items-baseline gap-1.5">
              <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent font-extrabold">
                MID SOUND
              </span>
              <span className="font-semibold text-slate-400 text-xs sm:text-sm">
                · IESTP Ácora
              </span>
            </span>
            <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase hidden sm:block">
              Sonorización & Iluminación Pro
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('catalogo')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Catálogo de Equipos
          </button>
          <button 
            onClick={() => handleNavClick('paquetes')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Paquetes para Eventos
          </button>
          <button 
            onClick={() => handleNavClick('licenciamiento')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Licenciamiento CBC 2027</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </button>
          <button 
            onClick={() => handleNavClick('contacto')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Atención & Soporte
          </button>
          <button 
            onClick={onOpenTransparency}
            className="text-slate-400 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer text-xs"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            Transparencia MINEDU
          </button>
        </nav>

        {/* Zone 3: 1 primary action with Neon Gradient & Glow */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="Abrir cotizador de equipos"
            className="relative group overflow-hidden rounded-lg p-px cursor-pointer active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#7928CA] animate-pulse"></div>
            <div className="relative flex items-center gap-2.5 px-4 py-2 bg-[#0A1020] rounded-[7px] text-white text-sm font-bold group-hover:bg-gradient-to-r group-hover:from-[#00F2FE] group-hover:to-[#7928CA] group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              <ShoppingBag className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 transition-colors" />
              <span>Cotizar Equipos</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center bg-cyan-400 text-slate-950 font-black text-xs w-5 h-5 rounded-full ml-0.5 tabular-nums">
                  {cartCount}
                </span>
              )}
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0B1020] px-4 py-4 space-y-3 text-sm font-medium">
          <div className="space-y-1">
            <button 
              onClick={() => handleNavClick('catalogo')}
              className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400"
            >
              Catálogo de Equipos
            </button>
            <button 
              onClick={() => handleNavClick('paquetes')}
              className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400"
            >
              Paquetes para Eventos
            </button>
            <button 
              onClick={() => handleNavClick('licenciamiento')}
              className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400"
            >
              Licenciamiento CBC 2027
            </button>
            <button 
              onClick={() => handleNavClick('contacto')}
              className="block w-full text-left py-2 text-slate-200 hover:text-cyan-400"
            >
              Atención & Soporte
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenTransparency(); }}
              className="flex items-center gap-2 w-full text-left py-2 text-slate-400 hover:text-cyan-300 text-xs"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Transparencia Institucional y MINEDU
            </button>
          </div>

          {/* Social Media inside Mobile Drawer */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
              Redes Sociales & Contacto Directo
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-medium"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp (+51 968 752 081)</span>
              </a>

              <a
                href="https://facebook.com/iestpacora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 font-medium"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
              </a>

              <a
                href="https://youtube.com/@iestpacora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 font-medium"
              >
                <YouTubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>YouTube</span>
              </a>

              <a
                href="https://instagram.com/iestpacora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 font-medium"
              >
                <InstagramIcon className="w-4 h-4 text-[#E4405F]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
