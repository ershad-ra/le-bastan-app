import { useState, useEffect } from 'react';
import Translate from './Translate';

export default function SmartToast() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Slide in after 3.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const handleToastClick = () => {
        setIsVisible(false); // Hide the toast
        document.getElementById('divertissement')?.scrollIntoView({ behavior: 'smooth' }); // Scroll to Wi-Fi
        
        // Add a temporary blue highlight ring to the Wi-Fi box so they know exactly where to look
        setTimeout(() => {
            const wifiBox = document.getElementById('wifi-box');
            if(wifiBox) {
                wifiBox.classList.add('ring-4', 'ring-blue-400', 'ring-offset-2');
                setTimeout(() => wifiBox.classList.remove('ring-4', 'ring-blue-400', 'ring-offset-2'), 2000);
            }
        }, 800);
    };

    return (
        <div className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-out w-[90%] max-w-sm ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
            <div 
                className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-blue-100 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors" 
                onClick={handleToastClick}
            >
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-wifi text-lg animate-pulse"></i>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">
                        <Translate fr="Vous venez d'arriver ?" en="Just arrived?" es="¿Acaba de llegar?" de="Gerade angekommen?" />
                    </p>
                    <p className="text-xs text-slate-500">
                        <Translate fr="Appuyez pour voir le code Wi-Fi." en="Tap to see the Wi-Fi code." es="Toque para ver el código Wi-Fi." de="Tippen Sie hier für den WLAN-Code." />
                    </p>
                </div>
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsVisible(false); }} 
                    className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors"
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    );
}