import { useState, useEffect } from 'react';
import Translate from './Translate';

export default function SmartToast() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const toasts = [
        {
            id: 'wifi',
            icon: 'fa-wifi',
            iconColor: 'text-blue-600 bg-blue-100',
            bgColor: 'bg-blue-50/95 border-blue-200',
            haloClass: 'halo-blue',
            target: 'divertissement',
            boxId: 'wifi-box',
            title: { fr: "Vous venez d'arriver ?", en: "Just arrived?", es: "¿Acaba de llegar?", de: "Gerade angekommen?" },
            desc: { fr: "Appuyez ici pour le code Wi-Fi.", en: "Tap here for the Wi-Fi code.", es: "Toca aquí para el código Wi-Fi.", de: "Hier tippen für WLAN-Code." }
        },
        {
            id: 'meteo',
            icon: 'fa-cloud-sun-rain',
            iconColor: 'text-cyan-600 bg-cyan-100',
            bgColor: 'bg-cyan-50/95 border-cyan-200',
            haloClass: 'halo-cyan',
            target: 'autour',
            boxId: 'meteo-box',
            title: { fr: "Ski ou rando aujourd'hui ?", en: "Skiing or hiking today?", es: "¿Esquí o senderismo hoy?", de: "Ski oder Wandern heute?" },
            desc: { fr: "Météo et pistes en direct.", en: "Live weather and slopes.", es: "Clima y pistas en vivo.", de: "Live-Wetter und Pisten." }
        },
        {
            id: 'podcast',
            icon: 'fa-headphones',
            iconColor: 'text-purple-600 bg-purple-100',
            bgColor: 'bg-purple-50/95 border-purple-200',
            haloClass: 'halo-purple',
            target: 'podcasts',
            boxId: 'podcast-box',
            title: { fr: "Curieux d'écouter nos secrets ?", en: "Curious to hear our secrets?", es: "¿Curioso por escuchar nuestros secretos?", de: "Neugierig auf unsere Geheimnisse?" },
            desc: { fr: "Écoutez nos guides audio personnels.", en: "Listen to our personal audio guides.", es: "Escucha nuestras guías de audio.", de: "Hören Sie unsere Audio-Guides." }
        }
    ];

    const changeToast = (newIndex) => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setFade(false);
        }, 300);
    };

    useEffect(() => {
        const initialTimer = setTimeout(() => setIsVisible(true), 3500);
        const rotationTimer = setInterval(() => {
            changeToast((currentIndex + 1) % toasts.length);
        }, 9000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(rotationTimer);
        };
    }, [currentIndex]);

    const handleToastClick = () => {
        const activeToast = toasts[currentIndex];
        setIsVisible(false);
        
        document.getElementById(activeToast.target)?.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            const highlightBox = document.getElementById(activeToast.boxId);
            if(highlightBox) {
                highlightBox.classList.add(activeToast.haloClass);
                
                if(activeToast.id === 'podcast') {
                    const podcastBtn = document.getElementById('podcast-toggle-btn');
                    if(podcastBtn && podcastBtn.getAttribute('aria-expanded') === 'false') {
                        podcastBtn.click();
                    }
                }

                setTimeout(() => {
                    highlightBox.classList.remove(activeToast.haloClass);
                }, 7500);
            }
        }, 800);
    };

    const nextToast = (e) => { e.stopPropagation(); changeToast((currentIndex + 1) % toasts.length); };
    const prevToast = (e) => { e.stopPropagation(); changeToast((currentIndex - 1 + toasts.length) % toasts.length); };

    const currentToast = toasts[currentIndex];

    return (
        <div className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-out w-[95%] max-w-md ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
            <div 
                className={`${currentToast.bgColor} backdrop-blur-md p-2 sm:p-3 rounded-[1.25rem] shadow-2xl border flex items-center justify-between gap-2 sm:gap-3 cursor-pointer transition-colors duration-500`} 
                onClick={handleToastClick}
            >
                {/* Icône plus petite */}
                <div className={`${currentToast.iconColor} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 shadow-inner ml-1`}>
                    <i className={`fas ${currentToast.icon} text-sm sm:text-base animate-pulse`}></i>
                </div>
                
                {/* Textes ajustés */}
                <div className={`flex-1 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-sm sm:text-[15px] font-bold text-slate-800 leading-tight mb-0.5">
                        <Translate fr={currentToast.title.fr} en={currentToast.title.en} es={currentToast.title.es} de={currentToast.title.de} />
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
                        <Translate fr={currentToast.desc.fr} en={currentToast.desc.en} es={currentToast.desc.es} de={currentToast.desc.de} />
                    </p>
                </div>

                {/* Navigation: Boutons ronds gauche/droite et bouton fermer */}
                <div className="flex items-center gap-1 pl-1 border-l border-slate-300/50">
                    <button onClick={prevToast} className="text-slate-500 hover:text-slate-800 w-7 h-7 flex items-center justify-center bg-white/60 rounded-full hover:bg-white transition-colors shadow-sm" aria-label="Previous notification">
                        <i className="fas fa-chevron-left text-[10px]"></i>
                    </button>
                    <button onClick={nextToast} className="text-slate-500 hover:text-slate-800 w-7 h-7 flex items-center justify-center bg-white/60 rounded-full hover:bg-white transition-colors shadow-sm" aria-label="Next notification">
                        <i className="fas fa-chevron-right text-[10px]"></i>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setIsVisible(false); }} className="text-slate-500 hover:text-slate-900 w-7 h-7 flex items-center justify-center rounded-full bg-white/60 hover:bg-white shadow-sm transition-colors ml-1" aria-label="Close">
                        <i className="fas fa-times text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}