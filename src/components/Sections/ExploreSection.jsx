import Translate from '../UI/Translate';

export default function ExploreSection() {
    return (
        <section id="autour" className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-blue-900">
                    <Translate fr="Explorer Barèges" en="Explore Barèges" es="Explorar Barèges" de="Barèges erkunden" />
                </h2>
                
                <a href="https://www.n-py.com/fr/grand-tourmalet" target="_blank" rel="noreferrer" className="block mb-8 group">
                    <div className="relative overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 sm:p-8 flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                        <i className="fas fa-cloud-sun-rain absolute -right-4 -bottom-4 text-8xl opacity-20 group-hover:scale-110 transition-transform duration-500"></i>
                        <div className="relative z-10">
                            <p className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">
                                <Translate fr="En direct du Grand Tourmalet" en="Live from Grand Tourmalet" es="En vivo desde Grand Tourmalet" de="Live vom Grand Tourmalet" />
                            </p>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center">
                                <Translate fr="Météo, Webcams & Pistes" en="Weather, Webcams & Slopes" es="Clima, Webcams y Pistas" de="Wetter, Webcams & Pisten" />
                            </h3>
                            <p className="text-sm text-blue-50 max-w-sm">
                                <Translate 
                                    fr="Consultez les conditions d'enneigement et le temps en direct sur le domaine." 
                                    en="Check snow conditions and live weather on the domain." 
                                    es="Consulta las condiciones de nieve y el clima en vivo en el dominio." 
                                    de="Überprüfen Sie die Schneebedingungen und das Live-Wetter im Gebiet." 
                                />
                            </p>
                        </div>
                        <div className="relative z-10 bg-white/20 p-4 rounded-full backdrop-blur-sm hidden sm:block group-hover:bg-white/30 transition-colors">
                            <i className="fas fa-external-link-alt text-xl"></i>
                        </div>
                    </div>
                </a>

                {/* FIXED BORDER HERE */}
                <div className="mb-8">
                    <img src="https://assets.persys.fr/BD/livret-d-accueil/images/plan-du-centre-ville.png" className="w-full h-auto rounded-2xl shadow-sm border border-slate-200" alt="Ville" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 transition-colors duration-300">
                        <h4 className="font-bold flex items-center mb-2 text-blue-800"><i className="fas fa-info-circle mr-2"></i> Office de Tourisme</h4>
                        <p className="text-xs text-slate-600 mb-2">Place Urbain, 2 Rue de Madame de Maintenon</p>
                        <div className="text-[10px] space-y-1 text-slate-700">
                            <p><strong><Translate fr="Lun-Sam" en="Mon-Sat" es="Lun-Sáb" de="Mo-Sa" /> :</strong> 09h-12h / 14h-18h</p>
                            <p><strong><Translate fr="Dimanche" en="Sunday" es="Domingo" de="Sonntag" /> :</strong> 09h-12h</p>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 transition-colors duration-300">
                        <h4 className="font-bold flex items-center mb-2 text-slate-800"><i className="fas fa-spa text-emerald-500 mr-2"></i> Ciéléo / Thermes</h4>
                        <p className="text-sm text-slate-600">Rue Ramond. <Translate fr="Détente randonnée/ski." en="Relaxation hiking/skiing." es="Relajación senderismo/esquí." de="Entspannung Wandern/Skifahren." /></p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 transition-colors duration-300">
                        <h4 className="font-bold flex items-center mb-2 text-slate-800"><i className="fas fa-bicycle text-orange-500 mr-2"></i> <Translate fr="Location Vélo" en="Bike Rental" es="Alquiler de bicicletas" de="Fahrradverleih" /></h4>
                        <p className="text-sm text-slate-600">Intersport : 44 Rue Ramond.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 transition-colors duration-300">
                        <h4 className="font-bold flex items-center mb-2 text-slate-800"><i className="fas fa-shopping-basket text-purple-500 mr-2"></i> <Translate fr="Commerces" en="Shops" es="Comercios" de="Geschäfte" /></h4>
                        <p className="text-sm text-slate-600"><Translate fr="Boulangerie, Supérette, Boucherie à proximité." en="Bakery, Supermarket, Butcher nearby." es="Panadería, supermercado, carnicería cerca." de="Bäckerei, Supermarkt, Metzgerei in der Nähe." /></p>
                    </div>
                </div>
                
                <div className="mt-8">
                    <h3 className="font-bold text-xl mb-4 text-blue-900 border-b border-slate-200 pb-2 flex items-center">
                        <i className="fas fa-utensils mr-2"></i> <Translate fr="Nos bonnes adresses" en="Our recommendations" es="Nuestras recomendaciones" de="Unsere Empfehlungen" />
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 transition-colors duration-300">
                            <div><p className="font-bold text-slate-800">Le Bistrot</p><p className="text-xs text-slate-500">45 Rue Ramond</p></div>
                            <a href="tel:0562915478" className="text-blue-600 font-bold hover:text-blue-800">05 62 91 54 78</a>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 transition-colors duration-300">
                            <div><p className="font-bold text-slate-800">Pizzas et compagnie</p><p className="text-xs text-slate-500">3 Rue Ramond</p></div>
                            <a href="tel:0782315291" className="text-blue-600 font-bold hover:text-blue-800">07 82 31 52 91</a>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 transition-colors duration-300">
                            <div><p className="font-bold text-slate-800">Chez Louisette (Lienz)</p><p className="text-xs text-slate-500">Auberge du Lienz</p></div>
                            <a href="tel:0562926717" className="text-blue-600 font-bold hover:text-blue-800">05 62 92 67 17</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}