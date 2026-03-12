import { useEffect, useState } from 'react';
import Translate from '../UI/Translate';

export default function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <div className="max-w-4xl mx-auto p-4 mb-12 mt-12">
                {/* FIX: Added 'footer-card' class for proper dark mode targeting */}
                <div className="footer-card text-center bg-gradient-to-br from-white to-blue-50 p-12 rounded-[3rem] shadow-xl border border-blue-100 relative overflow-hidden transition-colors duration-300">
                    <h3 className="text-3xl sm:text-4xl font-black text-blue-900 mb-6 uppercase tracking-wider">
                        <Translate fr="À BIENTÔT" en="SEE YOU SOON" es="HASTA PRONTO" de="BIS BALD" />
                    </h3>
                    <p className="text-slate-700 text-lg sm:text-xl italic max-w-2xl mx-auto leading-relaxed mb-8">
                        <Translate 
                            fr="Nous espérons que votre séjour sera aussi agréable que pour nos précédents visiteurs... merci pour vos avis !" 
                            en="We hope your stay will be as pleasant as it was for our previous visitors... thank you for your reviews!" 
                            es="Esperamos que su estancia sea tan agradable como lo fue para nuestros anteriores visitantes... ¡gracias por sus reseñas!" 
                            de="Wir hoffen, dass Ihr Aufenthalt so angenehm sein wird wie für unsere vorherigen Besucher... danke für Ihre Bewertungen!" 
                        />
                    </p>
                    
                    <div className="flex justify-center gap-3 text-3xl sm:text-4xl text-yellow-400 drop-shadow-md">
                        <i className="fas fa-star hover:scale-110 transition-transform cursor-pointer"></i>
                        <i className="fas fa-star hover:scale-110 transition-transform cursor-pointer"></i>
                        <i className="fas fa-star hover:scale-110 transition-transform cursor-pointer"></i>
                        <i className="fas fa-star hover:scale-110 transition-transform cursor-pointer"></i>
                        <i className="fas fa-star hover:scale-110 transition-transform cursor-pointer"></i>
                    </div>
                </div>
            </div>

            <footer className="text-center p-10 text-slate-500 text-sm bg-slate-100/50 transition-colors duration-300 font-medium">
                <p>© 2026 - Le Bastan (APT 202) • <Translate fr="Fait avec passion" en="Made with passion" es="Hecho con pasión" de="Mit Leidenschaft gemacht" /></p>
            </footer>

            <button 
                onClick={scrollToTop} 
                className={`fixed bottom-6 right-6 z-[100] bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-xl hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 ${showTopBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
}