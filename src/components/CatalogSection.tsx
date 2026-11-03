import React, { useState, useMemo } from 'react';
import { Equipment, EquipmentCategory } from '../types';
import { Search, Plus, Check, Eye, Info, Sparkles } from 'lucide-react';

interface CatalogSectionProps {
  equipmentList: Equipment[];
  onSelectEquipment: (item: Equipment) => void;
  onAddToCart: (item: Equipment) => void;
  cartItemIds: Set<string>;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  equipmentList,
  onSelectEquipment,
  onAddToCart,
  cartItemIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: EquipmentCategory; label: string }[] = [
    { key: 'todos', label: 'Todos los Equipos' },
    { key: 'line-array', label: 'Line Array & Cajas Activas' },
    { key: 'consolas-digitales', label: 'Consolas Digitales' },
    { key: 'microfonia', label: 'Microfonía Profesional' },
    { key: 'iluminacion', label: 'Iluminación & Truss' },
    { key: 'energia-accesorios', label: 'Energía & Accesorios' }
  ];

  const filteredEquipment = useMemo(() => {
    return equipmentList.filter((item) => {
      const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.idealFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [equipmentList, selectedCategory, searchQuery]);

  return (
    <section id="catalogo" className="py-16 bg-[#090E1B] border-b border-cyan-500/15 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inventario Institucional MID SOUND</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-400">Tarifario R.D. 2025</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Catálogo de Equipos de <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400 bg-clip-text text-transparent">Sonido e Iluminación</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Equipos de alta ingeniería electroacústica disponibles para alquiler por días o eventos completos. Cada unidad pasa por calibración preventiva antes de su entrega.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs (Segmented Controls) with Neon Styling */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                      : 'bg-[#0E172A] text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar marca, modelo o tipo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#0E172A] border border-slate-700/80 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all shadow-inner"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredEquipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((item) => {
              const isAdded = cartItemIds.has(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#0C1322] rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] transition-all duration-300 group"
                >
                  {/* Image Slot with Fallback */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-4 text-center">
                              <span class="text-xs font-bold text-cyan-400">${item.brand}</span>
                              <span class="text-sm font-bold text-white mt-1">${item.name}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                    
                    {/* Brand Badge */}
                    <div className="absolute top-3 left-3 bg-[#070A12]/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-extrabold text-white border border-cyan-500/30">
                      {item.brand}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-[11px] font-medium text-slate-300 border border-slate-800">
                      Stock: <span className="text-cyan-400 font-bold tabular-nums">{item.stockAvailable} unid.</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0C1322] to-[#0A0F1D]">
                    <div>
                      {/* Unboxed Metadata */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
                        <span className="text-cyan-400/90">{item.categoryLabel}</span>
                        <span aria-hidden="true" className="text-slate-700">·</span>
                        <span>{item.model}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>

                      {/* Description excerpt */}
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Mini Key Specs */}
                      <div className="mt-3.5 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                        {item.specs.potenciaRMS && (
                          <div className="bg-[#090E1A] p-2 rounded-lg border border-slate-800/60">
                            <span className="text-slate-500 block text-[10px]">Potencia</span>
                            <span className="font-semibold text-slate-200 tabular-nums">{item.specs.potenciaRMS}</span>
                          </div>
                        )}
                        {item.specs.canales && (
                          <div className="bg-[#090E1A] p-2 rounded-lg border border-slate-800/60">
                            <span className="text-slate-500 block text-[10px]">Capacidad</span>
                            <span className="font-semibold text-slate-200 tabular-nums">{item.specs.canales}</span>
                          </div>
                        )}
                        {item.specs.splMax && !item.specs.canales && (
                          <div className="bg-[#090E1A] p-2 rounded-lg border border-slate-800/60">
                            <span className="text-slate-500 block text-[10px]">Presión SPL</span>
                            <span className="font-semibold text-slate-200 tabular-nums">{item.specs.splMax}</span>
                          </div>
                        )}
                        <div className="bg-[#090E1A] p-2 rounded-lg border border-slate-800/60">
                          <span className="text-slate-500 block text-[10px]">Uso Óptimo</span>
                          <span className="font-semibold text-slate-300 truncate block">{item.idealFor.slice(0, 30)}...</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing & CTA Controls */}
                    <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Tarifa por día</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-black text-cyan-400 font-mono tabular-nums text-glow-cyan">
                            S/ {item.dailyRate.toFixed(2)}
                          </span>
                          <span className="text-[11px] text-slate-400">/ 24h</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectEquipment(item)}
                          title="Ver ficha técnica completa"
                          className="p-2 text-slate-300 hover:text-white bg-[#10192E] hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 rounded-xl transition-all cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-cyan-400" />
                        </button>

                        <button
                          onClick={() => onAddToCart(item)}
                          className={`px-3.5 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                              : 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] active:scale-95'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>En Cotización</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Añadir</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0C1322] rounded-2xl border border-slate-800 p-8">
            <Info className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-white">No se encontraron equipos</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              No hay coincidencias para tu búsqueda o filtro actual. Prueba seleccionando otra categoría o limpiando la barra de búsqueda.
            </p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
