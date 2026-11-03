import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, FileText, BookOpen, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenTransparency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTransparency
}) => {
  const whatsappUrl =
    'https://wa.me/51968752081?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20equipos%20de%20sonido';

  return (
    <footer id="contacto" className="bg-[#050811] text-slate-400 text-xs border-t border-slate-800/80">
      
      {/* Social Media Highlight Ribbon with Stage Lighting Theme */}
      <div className="bg-[#070B16] border-b border-cyan-500/15 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
              Comunidad & Canales Oficiales
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
              Síguenos en Redes Sociales y Contáctanos en Directo
            </h4>
            <p className="text-slate-400 text-xs mt-0.5">
              Entérate de las novedades del proceso de Licenciamiento 2027 y consulta disponibilidad en tiempo real.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir chat de WhatsApp con la Unidad de Sonido (+51 968 752 081)"
              className="flex items-center gap-2 px-3.5 py-2 bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-300 hover:text-slate-950 rounded-xl border border-[#25D366]/40 transition-all font-bold group cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.15)] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-slate-950 transition-colors" />
              <span>WhatsApp (+51 968 752 081)</span>
            </a>

            {/* Facebook Button */}
            <a
              href="https://facebook.com/iestpacora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a la página oficial de Facebook del IESTP Ácora"
              className="flex items-center gap-2 px-3.5 py-2 bg-[#1877F2]/20 hover:bg-[#1877F2] text-blue-300 hover:text-white rounded-xl border border-[#1877F2]/40 transition-all font-bold group cursor-pointer shadow-[0_0_15px_rgba(24,119,242,0.15)] hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
            >
              <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
              <span>Facebook Oficial</span>
            </a>

            {/* YouTube Button */}
            <a
              href="https://youtube.com/@iestpacora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el canal de YouTube del IESTP Ácora"
              className="flex items-center gap-2 px-3.5 py-2 bg-[#FF0000]/20 hover:bg-[#FF0000] text-rose-300 hover:text-white rounded-xl border border-[#FF0000]/40 transition-all font-bold group cursor-pointer shadow-[0_0_15px_rgba(255,0,0,0.15)] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
            >
              <YouTubeIcon className="w-4 h-4 text-[#FF0000] group-hover:text-white transition-colors" />
              <span>YouTube</span>
            </a>

            {/* Instagram Button */}
            <a
              href="https://instagram.com/iestpacora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir en Instagram al IESTP Ácora"
              className="flex items-center gap-2 px-3 py-2 bg-[#E4405F]/20 hover:bg-[#E4405F] text-pink-300 hover:text-white rounded-xl border border-[#E4405F]/40 transition-all font-bold group cursor-pointer shadow-[0_0_15px_rgba(228,64,95,0.15)] hover:shadow-[0_0_20px_rgba(228,64,95,0.4)]"
            >
              <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Institutional Brand & Location with Glowing MID SOUND Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="relative shrink-0 mt-1">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-70 blur-xs"></div>
                <img 
                  src="/src/assets/images/logo_mid_sound_1793209007289.jpg" 
                  alt="Logo oficial MID SOUND - Unidad Productiva de Sonido IESTP Ácora"
                  referrerPolicy="no-referrer"
                  className="relative w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-cyan-400 shadow-xl"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-amber-400 block">
                  MINISTERIO DE EDUCACIÓN · DREP PUNO
                </span>
                <h3 className="text-lg font-black text-white tracking-tight mt-0.5 flex items-baseline gap-1.5">
                  <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">MID SOUND</span>
                  <span className="text-slate-400 text-sm font-semibold">· IESTP ÁCORA</span>
                </h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed max-w-sm">
                  Instituto de Educación Superior Tecnológico Público Ácora. Centro de Producción de Bienes y Servicios (CEPROBYS) · Unidad Especializada en Alquiler de Sonido e Iluminación Profesional.
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Av. Titicaca s/n, Distrito de Ácora, Provincia de Puno, Perú (A orillas del Lago Sagrado)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+51 968 752 081 · Coordinación de Servicios Técnicos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>unidad.produccion@iestpacora.edu.pe</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Lunes a Viernes de 8:00 a.m. a 5:00 p.m. · Sábados de 8:00 a.m. a 1:00 p.m.</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Servicios & Alquiler
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Catálogo de Equipos de Sonido
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('paquetes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Paquetes Folclóricos & Cívicos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('licenciamiento')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Licenciamiento Institucional 2027
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Información Institucional
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: MINEDU CBC & Transparencia */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Normativa & Calidad
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.gob.pe/7775-licenciamiento-para-instituto-y-escuela-de-educacion-superior-del-minedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Condiciones Básicas (CBC)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenTransparency}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>Portal de Transparencia</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTransparency}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Libro de Reclamaciones Virtual</span>
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block">
                  Ley N° 30512 · R.V.M. N° 276-2019-MINEDU
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Sister Institutes in Puno */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Institutos de Puno
            </span>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a
                  href="https://iestpyunguyo.edu.pe/portal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>IESTP Yunguyo</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://iesjuli.edu.pe/portal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>IES Juli</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tecnoilave.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>IESTP Ilave</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://iestpazangaro.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  <span>IESTP Azángaro</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Instituto de Educación Superior Tecnológico Público Ácora (IESTP ÁCORA). RUC: 20601245891. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Rumbo al Licenciamiento 2027</span>
            <span aria-hidden="true">·</span>
            <span>Región Puno - Perú</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
