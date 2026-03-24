import Translate from '../UI/Translate';

export default function WebcamSection() {
    return (
        <section id="webcams" className="pt-4 scroll-mt-24">
            <a 
                href="https://www.n-py.com/fr/grand-tourmalet" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative block w-full rounded-3xl overflow-hidden shadow-sm border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-slate-900"
            >
                {/* Image de fond avec effet de zoom au survol */}
                <div className="absolute inset-0 bg-[url('https://assets.persys.fr/BD/livret-d-accueil/images/outside-the-apartment.jpeg')] bg-cover bg-center opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"></div>
                
                {/* Dégradé sombre pour que le texte reste ultra-lisible */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"></div>
                
                <div className="relative z-10 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 min-h-[220px] sm:min-h-[180px]">
                    <div className="flex items-center gap-5 mt-auto sm:mt-0">
                        {/* Grosse icône Caméra */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner group-hover:bg-blue-500/50 transition-colors duration-500 shrink-0">
                            <i className="fas fa-video text-white text-2xl sm:text-3xl"></i>
                        </div>
                        <div>
                            <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight tracking-wide drop-shadow-lg mb-2">
                                <Translate fr="Webcams & Pistes" en="Webcams & Slopes" es="Webcams y Pistas" de="Webcams & Pisten" />
                            </h3>
                            {/* Indicateur LIVE rouge clignotant */}
                            <p className="text-blue-200 text-xs sm:text-sm font-bold uppercase tracking-widest drop-shadow-md flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                </span>
                                <Translate fr="En direct du Grand Tourmalet" en="Live from Grand Tourmalet" es="En vivo desde Grand Tourmalet" de="Live vom Grand Tourmalet" />
                            </p>
                        </div>
                    </div>
                    
                    {/* Flèche d'action */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-2 self-end sm:self-auto shadow-lg shrink-0">
                        <i className="fas fa-arrow-right text-lg sm:text-xl"></i>
                    </div>
                </div>
            </a>
        </section>
    );
}