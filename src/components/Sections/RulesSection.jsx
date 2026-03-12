import Translate from '../UI/Translate';

export default function RulesSection() {
    return (
        <section id="consignes" className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-slate-800 transition-colors duration-300">
                <Translate fr="Pensez aux..." en="Think about..." es="Piensen en..." de="Denken Sie an..." />
            </h2>
            
            <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-t-red-500 transition-colors duration-300">
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-2 uppercase"><Translate fr="...PROCHAINS VOYAGEURS" en="...NEXT TRAVELERS" es="...PRÓXIMOS VIAJEROS" de="...NÄCHSTE REISENDE" /></h3>
                        <p className="text-slate-600 italic">
                            <Translate 
                                fr="Interdit de fumer (même à la fenêtre). Pensez à l'odeur de tabac froid." 
                                en="Smoking is strictly FORBIDDEN in this accommodation. Even at the window..." 
                                es="Prohibido fumar (incluso en la ventana). Piense en el olor a tabaco frío." 
                                de="Rauchen verboten (auch am Fenster). Denken Sie an den Geruch von kaltem Tabak." 
                            />
                        </p>
                    </div>
                    <img src="https://assets.persys.fr/BD/livret-d-accueil/images/Panneau-interdiction-de-fumer-BookandPay-scaled.jpg" className="w-full h-auto rounded-2xl shadow-sm border" alt="No Smoking" />
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-t-blue-500 transition-colors duration-300">
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2 uppercase"><Translate fr="...VOISINS" en="...NEIGHBORS" es="...VECINOS" de="...NACHBARN" /></h3>
                        <p className="text-slate-600">
                            <Translate 
                                fr="Respectez le voisinage. Pas de fêtes ni nuisances sonores." 
                                en="Please take all precautions so that neighbors are not disturbed by noise. No parties." 
                                es="Respete el vecindario. Sin fiestas ni ruidos molestos." 
                                de="Respektieren Sie die Nachbarschaft. Keine Partys oder Lärmbelästigung." 
                            />
                        </p>
                    </div>
                    <img src="https://assets.persys.fr/BD/livret-d-accueil/images/Panneau-interdiction-Fete-et-bruits-BookandPay.jpg" className="w-full h-auto rounded-2xl shadow-sm border" alt="No Party" />
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-md border-t-4 border-t-emerald-500 transition-colors duration-300">
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-emerald-700 mb-2 uppercase"><Translate fr="...À L’ENVIRONNEMENT" en="...THE ENVIRONMENT" es="...AL MEDIO AMBIENTE" de="...DIE UMWELT" /></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 text-sm">
                            <p><i className="fas fa-lightbulb text-yellow-500 mr-2"></i> <Translate fr="Éteignez les lumières quand vous sortez" en="Turn off the lights when you leave" es="Apague las luces al salir" de="Schalten Sie das Licht aus, wenn Sie gehen" /></p>
                            <p><i className="fas fa-shower text-blue-400 mr-2"></i> <Translate fr="Arrêtez l’eau pendant le savonnage" en="Stop the water while soaping" es="Detenga el agua mientras se enjabona" de="Stellen Sie das Wasser beim Einseifen ab" /></p>
                            <p><i className="fas fa-snowflake text-cyan-400 mr-2"></i> <Translate fr="Coupez le chauffage si vous ouvrez la fenêtre" en="Turn off the heating if you open the window" es="Apague la calefacción si abre la ventana" de="Schalten Sie die Heizung aus, wenn Sie das Fenster öffnen" /></p>
                            <p><i className="fas fa-exclamation-triangle text-orange-400 mr-2"></i> <Translate fr="Signalez toute fuite rapidement" en="Report any leaks promptly" es="Reporte cualquier fuga rápidamente" de="Melden Sie Lecks umgehend" /></p>
                        </div>
                    </div>
                    <img src="https://assets.persys.fr/BD/livret-d-accueil/images/Consignes-de-depart-Check-Out.jpg" className="w-full h-auto rounded-2xl shadow-sm border" alt="Eco" />
                </div>
            </div>
        </section>
    );
}