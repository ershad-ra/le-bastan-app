import { useState } from 'react';
import Translate from '../UI/Translate';
import RevealBox from '../UI/RevealBox';

export default function EntertainmentSection() {
    const [copied, setCopied] = useState(false);

    // The copy function that triggers the checkmark animation
    const copyToClipboard = (e, text) => {
        e.stopPropagation(); // Prevents the RevealBox from blurring again when clicked
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Revert to copy icon after 2 seconds
    };

    return (
        <section id="divertissement" className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">
                    <Translate fr="TV & Wi-Fi" en="TV & Wi-Fi" es="TV y Wi-Fi" de="TV & WLAN" />
                </h2>
                
                <div className="space-y-8">
                    {/* WIFI - Added id="wifi-box" so the SmartToast can target and highlight it */}
                    <div id="wifi-box" className="bg-blue-600 text-white p-6 md:p-8 rounded-[2rem] shadow-md relative overflow-hidden transition-all duration-300">
                        <i className="fas fa-wifi absolute -right-8 -bottom-8 text-9xl opacity-10"></i>
                        <h3 className="text-xl font-bold mb-6 flex items-center relative z-10"><i className="fas fa-wifi mr-3"></i> Wi-Fi</h3>
                        <div className="space-y-6 relative z-10">
                            <div>
                                <p className="text-blue-100 text-xs uppercase font-bold tracking-widest mb-1">Réseau / Network</p>
                                <p className="text-xl font-mono font-bold">BAREGES 202 5GHZ</p>
                            </div>
                            
                            <RevealBox className="bg-blue-700/50 p-4 rounded-2xl border border-blue-400">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-blue-100 text-[10px] uppercase font-bold tracking-widest mb-1">
                                            <Translate fr="Code Wi-Fi (Tapper ici)" en="Wi-Fi Code (Tap here)" es="Código Wi-Fi (Tocar aquí)" de="WLAN-Code (Hier tippen)" />
                                        </p>
                                        <p className="text-2xl font-mono font-bold blur-text">BAREGES202!</p>
                                    </div>
                                    
                                    {/* The New Copy Button */}
                                    <button 
                                        onClick={(e) => copyToClipboard(e, 'BAREGES202!')}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${copied ? 'bg-emerald-500 text-white scale-110' : 'bg-white/20 text-white hover:bg-white/30 active:scale-95'}`}
                                        title="Copier le code"
                                    >
                                        <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                                    </button>
                                </div>
                            </RevealBox>
                        </div>
                    </div>

                    {/* ENTERTAINMENT */}
                    <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2rem] shadow-md border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-600/20 to-transparent pointer-events-none"></div>

                        <h3 className="text-xl font-bold mb-6 flex items-center relative z-10">
                            <i className="fas fa-film mr-3 text-red-500"></i>
                            <Translate fr="Divertissements à disposition" en="Available Entertainment" es="Entretenimiento disponible" de="Verfügbare Unterhaltung" />
                        </h3>
                        
                        <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl border border-slate-700 shadow-sm mb-6 text-slate-300 leading-relaxed relative z-10">
                            <p className="mb-4 text-center sm:text-left">
                                <span className="text-2xl mr-2 inline-block align-middle">🍿</span>
                                <Translate 
                                    fr={<>Le logement est équipé d’une télévision connectée donnant accès à <strong>Netflix</strong> et <strong>Disney+</strong>, inclus pendant votre séjour.</>}
                                    en={<>The accommodation is equipped with a smart TV providing access to <strong>Netflix</strong> and <strong>Disney+</strong>, included during your stay.</>}
                                    es={<>El alojamiento está equipado con una Smart TV con acceso a <strong>Netflix</strong> y <strong>Disney+</strong>, incluidos durante su estancia.</>}
                                    de={<>Die Unterkunft verfügt über einen Smart-TV mit Zugang zu <strong>Netflix</strong> und <strong>Disney+</strong>, die während Ihres Aufenthalts inbegriffen sind.</>}
                                />
                            </p>
                            
                            <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-center my-5 shadow-inner">
                                <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-2">
                                    <Translate fr="L’accès s’effectue directement via le profil :" en="Access is direct via the profile:" es="El acceso es directo mediante el perfil:" de="Der Zugriff erfolgt direkt über das Profil:" />
                                </p>
                                <p className="text-2xl sm:text-3xl font-black text-white tracking-wider font-mono">Hotes-Guest-Anfitriones</p>
                            </div>

                            <p className="text-sm text-red-400 font-medium flex items-center justify-center bg-red-950/30 p-3 rounded-lg border border-red-900/50">
                                <i className="fas fa-exclamation-circle mr-2 text-red-500"></i>
                                <Translate fr="Merci de ne pas modifier les paramètres existants." en="Please do not modify the existing settings." es="Por favor, no modifique la configuración existente." de="Bitte ändern Sie die bestehenden Einstellungen nicht." />
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                            <div className="flex flex-col items-center justify-center bg-slate-800 p-4 rounded-xl border border-slate-700">
                                <span className="text-3xl font-black text-red-600 tracking-widest mb-1 font-['Montserrat']">NETFLIX</span>
                                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                                    <Translate fr="Inclus" en="Included" es="Incluido" de="Inklusive" />
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-slate-800 p-4 rounded-xl border border-slate-700">
                                <span className="text-3xl font-black text-blue-500 tracking-wider mb-1 font-['Montserrat']">Disney+</span>
                                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                                    <Translate fr="Inclus" en="Included" es="Incluido" de="Inklusive" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}