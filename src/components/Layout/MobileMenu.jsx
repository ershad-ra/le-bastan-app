import Translate from '../UI/Translate';

export default function MobileMenu({ isOpen, toggleMenu }) {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        toggleMenu();
    };

    return (
        {/* ADDED onClick={toggleMenu} to the dark background overlay */}
        <div 
            className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] flex justify-end transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
            onClick={toggleMenu}
        >
            {/* ADDED onClick={(e) => e.stopPropagation()} so clicking the menu itself doesn't close it */}
            <div 
                className="bg-white w-4/5 max-w-sm h-full shadow-2xl p-6 flex flex-col overflow-y-auto transform transition-transform duration-300 pb-12"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-bold text-xl text-blue-900 italic">Le Bastan 202</h3>
                    <button onClick={toggleMenu} className="text-slate-400 hover:text-slate-600 bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center text-xl transition-colors">&times;</button>
                </div>

                <div className="space-y-6">
                    {/* General */}
                    <div className="flex flex-col gap-1">
                        <button onClick={() => scrollTo('accueil')} className="text-left py-3 px-4 rounded-xl hover:bg-slate-50 font-bold text-slate-800">
                            <i className="fas fa-home mr-3 text-blue-600 w-5 text-center"></i>
                            <Translate fr="Accueil" en="Home" es="Inicio" de="Start" />
                        </button>
                    </div>

                    {/* Le Séjour */}
                    <div className="flex flex-col gap-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-1"><Translate fr="Le Séjour" en="The Stay" es="La Estancia" de="Der Aufenthalt" /></p>
                        <button onClick={() => scrollTo('logistique')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-clock mr-3 text-blue-400 w-5 text-center"></i><Translate fr="Arrivée/Départ" en="Check-in/out" es="Llegada/Salida" de="An-/Abreise" />
                        </button>
                        <button onClick={() => scrollTo('consignes')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-hand-holding-heart mr-3 text-blue-400 w-5 text-center"></i><Translate fr="Règles de séjour" en="Stay rules" es="Reglas de estancia" de="Aufenthaltsregeln" />
                        </button>
                        <button onClick={() => scrollTo('documents')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-file-pdf mr-3 text-blue-400 w-5 text-center"></i><Translate fr="Documents" en="Docs" es="Documentos" de="Dokumente" />
                        </button>
                    </div>

                    {/* L'Appartement */}
                    <div className="flex flex-col gap-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-1"><Translate fr="L'Appartement" en="Apartment" es="Apartamento" de="Wohnung" /></p>
                        <button onClick={() => scrollTo('logement')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-bed mr-3 text-emerald-500 w-5 text-center"></i><Translate fr="Équipements" en="Amenities" es="Equipamiento" de="Ausstattung" />
                        </button>
                        <button onClick={() => scrollTo('chauffage')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-thermometer-half mr-3 text-emerald-500 w-5 text-center"></i><Translate fr="Chauffage" en="Heating" es="Calefacción" de="Heizung" />
                        </button>
                        <button onClick={() => scrollTo('divertissement')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-tv mr-3 text-emerald-500 w-5 text-center"></i><Translate fr="TV & Wifi" en="TV & Wifi" es="TV y Wifi" de="TV & WLAN" />
                        </button>
                    </div>

                    {/* Découverte */}
                    <div className="flex flex-col gap-1">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-1"><Translate fr="Découverte" en="Discover" es="Descubrir" de="Entdecken" /></p>
                        <button onClick={() => scrollTo('podcasts')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-headphones mr-3 text-purple-500 w-5 text-center"></i><Translate fr="Podcasts" en="Podcasts" es="Podcasts" de="Podcasts" />
                        </button>
                        <button onClick={() => scrollTo('autour')} className="text-left py-2.5 px-4 rounded-xl hover:bg-slate-50 font-semibold text-slate-700">
                            <i className="fas fa-mountain mr-3 text-purple-500 w-5 text-center"></i><Translate fr="Explorer Barèges" en="Explore Barèges" es="Explorar Barèges" de="Barèges erkunden" />
                        </button>
                    </div>

                    {/* Contacts */}
                    <div className="flex flex-col gap-1 border-t border-slate-100 pt-4 mt-2">
                        <button onClick={() => scrollTo('contacts')} className="text-left py-3 px-4 rounded-xl hover:bg-slate-50 font-bold text-slate-800">
                            <i className="fas fa-phone mr-3 text-red-500 w-5 text-center"></i>
                            <Translate fr="Contacts & Urgences" en="Contacts & Emergencies" es="Contactos y Urgencias" de="Kontakt & Notfälle" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}