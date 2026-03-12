import Translate from '../UI/Translate';
import RevealBox from '../UI/RevealBox';

export default function LogisticsSection() {
    return (
        <section id="logistique" className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">
                    <Translate fr="Arrivée & Départ" en="Check-in & Out" es="Entrada y Salida" de="Ankunft & Abreise" />
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 flex items-center gap-4 transition-colors duration-300">
                        <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm text-xl"><i className="fas fa-clock"></i></div>
                        <div>
                            <p className="text-xs text-emerald-600 font-bold uppercase"><Translate fr="Arrivée" en="Check-in" es="Entrada" de="Check-in" /></p>
                            <p className="text-xl font-bold text-emerald-900">15:00</p>
                        </div>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex items-center gap-4 transition-colors duration-300">
                        <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-orange-600 shadow-sm text-xl"><i className="fas fa-history"></i></div>
                        <div>
                            <p className="text-xs text-orange-600 font-bold uppercase"><Translate fr="Départ" en="Check-out" es="Salida" de="Check-out" /></p>
                            <p className="text-xl font-bold text-orange-900">11:00</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-bold text-lg border-b border-slate-200 pb-2 flex items-center gap-2 text-slate-800">
                        <i className="fas fa-parking text-blue-600"></i><span>Parking</span>
                    </h3>
                    
                    {/* FIXED BORDERS HERE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <img src="https://assets.persys.fr/BD/livret-d-accueil/images/parking-1.jpg" className="rounded-2xl border border-slate-200 shadow-sm w-full h-48 object-cover" alt="Parking 1" />
                        <img src="https://assets.persys.fr/BD/livret-d-accueil/images/parking-2.jpg" className="rounded-2xl border border-slate-200 shadow-sm w-full h-48 object-cover" alt="Parking 2" />
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl space-y-3 mt-4 text-sm transition-colors duration-300">
                        <p className="font-bold text-blue-800">
                            <Translate fr="Emplacement n°12" en="Spot #12" es="Plaza n°12" de="Stellplatz Nr. 12" />
                        </p>
                        <p className="text-slate-700">
                            <Translate fr="Tournez à gauche après la barrière." en="Turn left after the gate." es="Gire a la izquierda después de la barrera." de="Biegen Sie nach der Schranke links ab." />
                        </p>
                        
                        <RevealBox className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm mt-2 transition-colors duration-300">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">
                                    <Translate fr="Code Barrière (Tapper)" en="Gate Code (Tap)" es="Código Barrera (Tocar)" de="Schrankencode (Tippen)" />
                                </span>
                                <span className="text-2xl font-mono font-bold text-blue-700 blur-text">5512</span>
                            </div>
                            <i className="fas fa-eye text-slate-300"></i>
                        </RevealBox>
                    </div>
                </div>
            </div>
        </section>
    );
}