import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Translate from '../UI/Translate';

export default function Navbar({ toggleMenu }) {
    const { language, setLanguage, theme, toggleTheme } = useContext(AppContext);
    const [activeSection, setActiveSection] = useState('accueil');

    // Scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 'accueil';
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navItems = [
        { id: 'accueil', fr: 'Accueil', en: 'Home', es: 'Inicio', de: 'Start' },
        { id: 'logistique', fr: 'Arrivée/Départ', en: 'Check-in/out', es: 'Llegada/Salida', de: 'An-/Abreise' },
        { id: 'logement', fr: 'Équipements', en: 'Amenities', es: 'Equipamiento', de: 'Ausstattung' },
        { id: 'chauffage', fr: 'Chauffage', en: 'Heating', es: 'Calefacción', de: 'Heizung' },
        { id: 'divertissement', fr: 'TV & Wifi', en: 'TV & Wifi', es: 'TV y Wifi', de: 'TV & WLAN' },
        { id: 'autour', fr: 'Explorer Barèges', en: 'Explore Barèges', es: 'Explorar Barèges', de: 'Barèges erkunden' },
        { id: 'consignes', fr: 'Modalités de séjour', en: 'Stay Conditions', es: 'Condiciones de estancia', de: 'Aufenthaltsbedingungen' },
        { id: 'documents', fr: 'Documents', en: 'Docs', es: 'Documentos', de: 'Dokumente' },
        { id: 'contacts', fr: 'Contacts', en: 'Contacts', es: 'Contactos', de: 'Kontakt' },
    ];

    return (
        <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-md border-b z-50 transition-colors duration-300">
            <div className="flex justify-between items-center px-4 py-3 border-b border-slate-100">
                <span className="font-bold text-blue-900 italic text-lg hidden sm:block">Le Bastan 202</span>
                <div className="flex gap-2 w-full sm:w-auto justify-end">
                    <button onClick={toggleTheme} className="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-bold text-sm shadow-sm hover:bg-slate-200 transition-all outline-none">
                        <i className={`fas ${theme === 'night' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-slate-100 border border-slate-200 px-2 py-1.5 rounded-lg font-bold text-sm outline-none cursor-pointer shadow-sm text-slate-900">
                        <option value="fr">🇫🇷 FR</option>
                        <option value="en">🇬🇧 EN</option>
                        <option value="es">🇪🇸 ES</option>
                        <option value="de">🇩🇪 DE</option>
                    </select>
                    <button onClick={toggleMenu} className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-sm hover:bg-blue-700 transition-all sm:hidden">
                        <i className="fas fa-bars"></i>
                        <Translate fr="Menu" en="Menu" es="Menú" de="Menü" />
                    </button>
                </div>
            </div>
            <div className="hidden sm:flex overflow-x-auto no-scrollbar justify-start p-3 gap-2 max-w-6xl mx-auto px-4">
                {navItems.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => scrollTo(item.id)} 
                        className={`nav-btn px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${activeSection === item.id ? 'active-nav-btn' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        <Translate fr={item.fr} en={item.en} es={item.es} de={item.de} />
                    </button>
                ))}
            </div>
        </nav>
    );
}