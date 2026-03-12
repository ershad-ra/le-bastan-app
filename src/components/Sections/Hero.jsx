import Translate from '../UI/Translate';

export default function Hero() {
    const scrollToContent = () => {
        document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="hero-bg h-[50vh] sm:h-[60vh] flex flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden">
            <div className="relative z-10 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-xl tracking-tight">Le Bastan</h1>
                <p className="text-xl md:text-3xl font-light italic drop-shadow-lg text-blue-50">
                    <Translate 
                        fr="Appartement 202 • Barèges" 
                        en="Apartment 202 • Barèges" 
                        es="Apartamento 202 • Barèges" 
                        de="Ferienwohnung 202 • Barèges" 
                    />
                </p>
            </div>

            {/* CREATIVE UPGRADE: Bouncing scroll indicator */}
            <div 
                onClick={scrollToContent}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white cursor-pointer transition-colors animate-bounce"
            >
                <i className="fas fa-chevron-down text-3xl drop-shadow-md"></i>
            </div>
        </header>
    );
}