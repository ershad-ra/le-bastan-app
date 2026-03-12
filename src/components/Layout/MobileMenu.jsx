import Translate from '../UI/Translate';

export default function MobileMenu({ isOpen, toggleMenu }) {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        toggleMenu();
    };

    const navItems = [
        { id: 'accueil', icon: 'fa-home', fr: 'Accueil', en: 'Home', es: 'Inicio', de: 'Start' },
        { id: 'logistique', icon: 'fa-clock', fr: 'Arrivée/Départ', en: 'Check-in/out', es: 'Llegada/Salida', de: 'An-/Abreise' },
        { id: 'logement', icon: 'fa-info-circle', fr: 'Équipements', en: 'Amenities', es: 'Equipamiento', de: 'Ausstattung' },
        { id: 'chauffage', icon: 'fa-thermometer-half', fr: 'Chauffage', en: 'Heating', es: 'Calefacción', de: 'Heizung' },
        { id: 'divertissement', icon: 'fa-tv', fr: 'TV & Wifi', en: 'TV & Wifi', es: 'TV y Wifi', de: 'TV & WLAN' },
        { id: 'autour', icon: 'fa-mountain', fr: 'Explorer Barèges', en: 'Explore Barèges', es: 'Explorar Barèges', de: 'Barèges erkunden' },
        { id: 'consignes', icon: 'fa-hand-holding-heart', fr: 'Modalités de séjour', en: 'Stay Conditions', es: 'Condiciones de estancia', de: 'Aufenthaltsbedingungen' },
        { id: 'documents', icon: 'fa-file-alt', fr: 'Documents', en: 'Docs', es: 'Documentos', de: 'Dokumente' },
        { id: 'contacts', icon: 'fa-phone', fr: 'Contacts', en: 'Contacts', es: 'Contactos', de: 'Kontakt' },
    ];

    return (
        <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] flex justify-end transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="bg-white w-3/4 max-w-sm h-full shadow-2xl p-6 flex flex-col gap-4 overflow-y-auto transform transition-transform duration-300">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-2">
                    <h3 className="font-bold text-xl text-blue-900 italic">Le Bastan 202</h3>
                    <button onClick={toggleMenu} className="text-slate-400 text-2xl px-2">&times;</button>
                </div>
                {navItems.map((item) => (
                    <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left py-3 px-4 rounded-xl hover:bg-slate-50 font-semibold border-b border-slate-50 text-slate-800">
                        <i className={`fas ${item.icon} mr-3 text-blue-600`}></i>
                        <Translate fr={item.fr} en={item.en} es={item.es} de={item.de} />
                    </button>
                ))}
            </div>
        </div>
    );
}