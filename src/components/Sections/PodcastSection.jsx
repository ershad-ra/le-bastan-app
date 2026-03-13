import { useState } from 'react';
import Translate from '../UI/Translate';
import AudioPlayer from '../UI/AudioPlayer';

export default function PodcastSection() {
    const [isOpen, setIsOpen] = useState(false);

    const podcasts = [
        {
            id: 1,
            title: { fr: "L'histoire de Barèges & ses Thermes", en: "History of Barèges & its Thermal Baths", es: "Historia de Barèges y sus Termas", de: "Geschichte von Barèges & seinen Thermen" },
            src: "https://assets.persys.fr/BD/livret-d-accueil/audio/L_hospitalite_millimetree_de_l_appartement_202.mp3"
        },
        {
            id: 2,
            title: { fr: "Randonnée : Les secrets du Néouvielle", en: "Hiking: Secrets of Néouvielle", es: "Senderismo: Secretos de Néouvielle", de: "Wandern: Geheimnisse von Néouvielle" },
            src: "https://assets.persys.fr/BD/livret-d-accueil/audio/L_hospitalite_millimetree_de_l_appartement_202.mp3"
        },
        {
            id: 3,
            title: { fr: "Ski au Grand Tourmalet : Guide pratique", en: "Skiing Grand Tourmalet: Practical Guide", es: "Esquí en Grand Tourmalet: Guía práctica", de: "Skifahren im Grand Tourmalet: Praktischer Leitfaden" },
            src: "https://assets.persys.fr/BD/livret-d-accueil/audio/L_hospitalite_millimetree_de_l_appartement_202.mp3"
        }
    ];

    return (
        <section id="podcasts" className="space-y-8 relative">
            
            {/* NEW: Added 'relative' to section and updated box styles for high visibility */}
            <div 
                id="podcast-box" 
                className="rounded-3xl shadow-xl transition-all duration-300 overflow-hidden relative group border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white"
            >
                {/* Visual Accent decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>

                {/* Clickable Header */}
                <button 
                    id="podcast-toggle-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    className="w-full p-6 md:p-8 flex items-center justify-between cursor-pointer hover:bg-purple-100/50 transition-colors duration-300 text-left focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-inset rounded-t-3xl"
                >
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="bg-purple-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <i className="fas fa-headphones animate-pulse"></i>
                        </div>
                        <div>
                            {/* "NEW" Badge */}
                            <span className="inline-block bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-1.5 shadow-sm">
                                <Translate fr="Nouveau" en="New" es="Nuevo" de="Neu" />
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-purple-950 tracking-tight">
                                <Translate fr="Podcasts Exclusifs" en="Exclusive Podcasts" es="Podcasts Exclusivos" de="Exklusive Podcasts" />
                            </h2>
                            <p className="text-sm md:text-base text-purple-800 mt-1 font-medium">
                                <Translate fr="Écoutez l'âme de Barèges, juste pour vous." en="Listen to the soul of Barèges, just for you." es="Escucha el alma de Barèges, solo para ti." de="Hören Sie die Seele von Barèges, nur für Sie." />
                            </p>
                        </div>
                    </div>
                    <div className="text-purple-400 p-2 rounded-full bg-white shadow-inner ml-4 shrink-0">
                        <i className={`fas fa-chevron-down text-xl transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-600' : ''}`}></i>
                    </div>
                </button>

                {/* Collapsible Content */}
                <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 border-t border-purple-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="p-6 md:p-8 bg-white/50 space-y-5">
                        {podcasts.map((podcast) => (
                            <div key={podcast.id} className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm transition-colors duration-300 hover:border-purple-200 hover:shadow-md">
                                <AudioPlayer 
                                    src={podcast.src} 
                                    title={<Translate fr={podcast.title.fr} en={podcast.title.en} es={podcast.title.es} de={podcast.title.de} />} 
                                    icon="fa-podcast"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}