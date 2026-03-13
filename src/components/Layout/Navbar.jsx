import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Translate from '../UI/Translate';

export default function Navbar({ toggleMenu }) {
    const { language, setLanguage, theme, toggleTheme } = useContext(AppContext);
    const [activeSection, setActiveSection] = useState('accueil');

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

    const isGroupActive = (sections) => sections.includes(activeSection);

    // Grouping the menu items
    const menuGroups = [
        {
            id: 'accueil',
            type: 'link',
            fr: 'Accueil', en: 'Home', es: 'Inicio', de: 'Start',
            sections: ['accueil']
        },
        {
            id: 'sejour',
            type: 'dropdown',
            fr: 'Le Séjour', en: 'The Stay', es: 'La Estancia', de: 'Der Aufenthalt',
            sections: ['logistique', 'consignes', 'documents'],
            items: [
                { id: 'logistique', icon: 'fa-clock', fr: 'Arrivée/Départ', en: 'Check-in/out', es: 'Llegada/Salida', de: 'An-/Abreise' },
                { id: 'consignes', icon: 'fa-hand-holding-heart', fr: 'Règles', en: 'Rules', es: 'Reglas', de: 'Regeln' },
                { id: 'documents', icon: 'fa-file-pdf', fr: 'Documents', en: 'Docs', es: 'Documentos', de: 'Dokumente' }
            ]
        },
        {
            id: 'logement',
            type: 'dropdown',
            fr: 'L\'Appartement', en: 'Apartment', es: 'Apartamento', de: 'Wohnung',
            sections: ['logement', 'chauffage', 'divertissement'],
            items: [
                { id: 'logement', icon: 'fa-bed', fr: 'Équipements', en: 'Amenities', es: 'Equipamiento', de: 'Ausstattung' },
                { id: 'chauffage', icon: 'fa-thermometer-half', fr: 'Chauffage', en: 'Heating', es: 'Calefacción', de: 'Heizung' },
                { id: 'divertissement', icon: 'fa-tv', fr: 'TV & Wifi', en: 'TV & Wifi', es: 'TV y Wifi', de: 'TV & WLAN' }
            ]
        },
        {
            id: 'decouverte',
            type: 'dropdown',
            fr: 'Découverte', en: 'Discover', es: 'Descubrir', de: 'Entdecken',
            sections: ['podcasts', 'autour'],
            items: [
                { id: 'podcasts', icon: 'fa-headphones', fr: 'Podcasts', en: 'Podcasts', es: 'Podcasts', de: 'Podcasts' },
                { id: 'autour', icon: 'fa-mountain', fr: 'Barèges', en: 'Barèges', es: 'Barèges', de: 'Barèges' }
            ]
        },
        {
            id: 'contacts',
            type: 'link',
            fr: 'Contacts', en: 'Contacts', es: 'Contactos', de: 'Kontakt',
            sections: ['contacts']
        }
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
            
            {/* Desktop Navigation (Grouped) */}
            <div className="hidden sm:flex justify-center p-3 gap-2 max-w-6xl mx-auto px-4">
                {menuGroups.map((group) => {
                    const active = isGroupActive(group.sections);
                    
                    if (group.type === 'link') {
                        return (
                            <button 
                                key={group.id} 
                                onClick={() => scrollTo(group.id)} 
                                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${active ? 'active-nav-btn' : 'text-slate-600 hover:bg-slate-100'}`}
                            >
                                <Translate fr={group.fr} en={group.en} es={group.es} de={group.de} />
                            </button>
                        );
                    }

                    return (
                        <div key={group.id} className="relative group z-50">
                            <button className={`px-5 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${active ? 'active-nav-btn' : 'text-slate-600 hover:bg-slate-100'}`}>
                                <Translate fr={group.fr} en={group.en} es={group.es} de={group.de} />
                                <i className="fas fa-chevron-down text-xs opacity-70"></i>
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                                {group.items.map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`w-full text-left px-4 py-3 text-sm font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center gap-3 ${activeSection === item.id ? 'bg-slate-50 text-blue-600' : 'text-slate-700'}`}
                                    >
                                        <i className={`fas ${item.icon} w-4 text-center text-slate-400`}></i>
                                        <Translate fr={item.fr} en={item.en} es={item.es} de={item.de} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}