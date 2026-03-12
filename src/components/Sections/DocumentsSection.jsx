import { useState } from 'react';
import Translate from '../UI/Translate';

export default function DocumentsSection() {
    const [activeTab, setActiveTab] = useState('bienvenue');

    return (
        <section id="documents" className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">
                    <i className="fas fa-file-pdf mr-2 text-red-500"></i> 
                    <Translate fr="Documents Importants" en="Important Documents" es="Documentos Importantes" de="Wichtige Dokumente" />
                </h2>
                
                <div className="flex overflow-x-auto no-scrollbar border-b border-slate-200 mb-6 gap-6 transition-colors duration-300">
                    <button 
                        onClick={() => setActiveTab('bienvenue')} 
                        className={`pb-2 whitespace-nowrap text-sm font-semibold transition-colors ${activeTab === 'bienvenue' ? 'border-b-3 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        <Translate fr="Bienvenue" en="Welcome" es="Bienvenida" de="Willkommen" />
                    </button>
                    <button 
                        onClick={() => setActiveTab('classement')} 
                        className={`pb-2 whitespace-nowrap text-sm font-semibold transition-colors ${activeTab === 'classement' ? 'border-b-3 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        <Translate fr="Classement" en="Rank" es="Clasificación" de="Einstufung" />
                    </button>
                    <button 
                        onClick={() => setActiveTab('tarifs')} 
                        className={`pb-2 whitespace-nowrap text-sm font-semibold transition-colors ${activeTab === 'tarifs' ? 'border-b-3 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        <Translate fr="Tarifs 2026" en="2026 Rates" es="Tarifas 2026" de="Tarife 2026" />
                    </button>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center transition-colors duration-300">
                    {activeTab === 'bienvenue' && (
                        <div>
                            <a href="https://assets.persys.fr/BD/livret-d-accueil/images/affiches-bienvenue.jpg" target="_blank" rel="noreferrer">
                                <img src="https://assets.persys.fr/BD/livret-d-accueil/images/affiches-bienvenue.jpg" className="max-h-[600px] w-auto mx-auto object-contain rounded-lg shadow-sm" alt="Bienvenue" />
                            </a>
                        </div>
                    )}
                    {activeTab === 'classement' && (
                        <div>
                            <a href="https://assets.persys.fr/BD/livret-d-accueil/images/DECISION-DE-CLASSEMENT-2023.jpg" target="_blank" rel="noreferrer">
                                <img src="https://assets.persys.fr/BD/livret-d-accueil/images/DECISION-DE-CLASSEMENT-2023.jpg" className="max-h-[600px] w-auto mx-auto object-contain rounded-lg shadow-sm" alt="Classement" />
                            </a>
                        </div>
                    )}
                    {activeTab === 'tarifs' && (
                        <div>
                            <a href="https://assets.persys.fr/BD/livret-d-accueil/images/Affiche-des-tarifs-fixes-avec-taxe-additionnelle-65-scaled.jpg" target="_blank" rel="noreferrer">
                                <img src="https://assets.persys.fr/BD/livret-d-accueil/images/Affiche-des-tarifs-fixes-avec-taxe-additionnelle-65-scaled.jpg" className="max-h-[600px] w-auto mx-auto object-contain rounded-lg shadow-sm" alt="Tarifs" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}