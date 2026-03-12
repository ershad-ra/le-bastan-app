import Translate from '../UI/Translate';

export default function HeatingSection() {
    const scrollToContacts = () => {
        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="chauffage" className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
                    <i className="fas fa-thermometer-half mr-3 text-red-500"></i>
                    <Translate fr="Chauffage & confort thermique" en="Heating & Thermal Comfort" es="Calefacción y confort térmico" de="Heizung & Thermischer Komfort" />
                </h2>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 text-slate-700 transition-colors duration-300">
                    <h3 className="font-bold text-lg mb-3 flex items-center text-blue-900">
                        <span className="text-2xl mr-2">✨</span>
                        <Translate fr="Régulation du logement" en="Temperature regulation" es="Regulación de la temperatura" de="Temperaturregelung" />
                    </h3>
                    <p className="mb-3">
                        <Translate 
                            fr="Le logement est équipé d’un système de chauffage intelligent, entièrement automatisé, conçu pour offrir une atmosphère agréable tout au long de la journée, en parfaite harmonie avec les saisons." 
                            en="The accommodation is equipped with a smart, fully automated heating system designed to provide a pleasant atmosphere throughout the day, in perfect harmony with the seasons." 
                            es="El alojamiento está equipado con un sistema de calefacción inteligente y totalmente automatizado, diseñado para ofrecer un ambiente agradable durante todo el día, en perfecta armonía con las estaciones." 
                            de="Die Unterkunft ist mit einem intelligenten, vollautomatischen Heizsystem ausgestattet, das den ganzen Tag über eine angenehme Atmosphäre in perfekter Harmonie mit den Jahreszeiten bietet." 
                        />
                    </p>
                    <p className="font-bold text-emerald-600 flex items-center">
                        <i className="fas fa-check-circle mr-2"></i>
                        <Translate fr="Aucune intervention n’est nécessaire de votre part." en="No intervention is required on your part." es="No es necesaria ninguna intervención por su parte." de="Es ist kein Eingreifen Ihrerseits erforderlich." />
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Hiver */}
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden transition-colors duration-300">
                        <i className="fas fa-snowflake absolute -right-4 -top-4 text-6xl text-blue-200/50"></i>
                        <h4 className="font-bold text-blue-900 text-lg mb-1 flex items-center"><span className="mr-2">❄️</span> <Translate fr="Hiver" en="Winter" es="Invierno" de="Winter" /></h4>
                        <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mb-4">
                            <Translate fr="Mi-novembre → Mars" en="Mid-November → March" es="Mediados de noviembre → Marzo" de="Mitte November → März" />
                        </p>
                        <div className="flex gap-4 mb-4">
                            <div className="bg-white px-3 py-2 rounded-xl border border-blue-50 shadow-sm text-center flex-1 transition-colors duration-300">
                                <p className="text-[10px] text-slate-400 font-bold uppercase"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></p>
                                <p className="font-bold text-slate-800">19 °C</p>
                            </div>
                            <div className="bg-white px-3 py-2 rounded-xl border border-blue-50 shadow-sm text-center flex-1 transition-colors duration-300">
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Éco</p>
                                <p className="font-bold text-slate-800">16 °C</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm transition-colors duration-300">
                            <p className="text-xs font-bold text-slate-800 mb-2 border-b border-blue-100 pb-1">
                                <Translate fr="Plages horaires" en="Time slots" es="Franjas horarias" de="Zeitfenster" />
                            </p>
                            <ul className="text-sm space-y-1 text-slate-700 font-semibold font-mono">
                                <li>04h00 → 08h30 : <span className="text-orange-500 font-bold"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></span></li>
                                <li>08h30 → 12h00 : <span className="text-blue-500 font-bold">Éco</span></li>
                                <li>12h00 → 13h00 : <span className="text-orange-500 font-bold"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></span></li>
                                <li>13h00 → 16h30 : <span className="text-blue-500 font-bold">Éco</span></li>
                                <li>16h30 → 22h00 : <span className="text-orange-500 font-bold"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></span></li>
                                <li>22h00 → 04h00 : <span className="text-blue-500 font-bold">Éco</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Printemps */}
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden transition-colors duration-300">
                        <i className="fas fa-leaf absolute -right-4 -top-4 text-6xl text-emerald-200/50"></i>
                        <h4 className="font-bold text-emerald-900 text-lg mb-1 flex items-center"><span className="mr-2">🌤️</span> <Translate fr="Intersaison – Printemps" en="Mid-season – Spring" es="Entretiempo – Primavera" de="Zwischensaison – Frühling" /></h4>
                        <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-4">
                            <Translate fr="Avril → Mi-mai" en="April → Mid-May" es="Abril → Mediados de mayo" de="April → Mitte Mai" />
                        </p>
                        <div className="flex gap-4 mb-4">
                            <div className="bg-white px-3 py-2 rounded-xl border border-emerald-50 shadow-sm text-center flex-1 transition-colors duration-300">
                                <p className="text-[10px] text-slate-400 font-bold uppercase"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></p>
                                <p className="font-bold text-slate-800">19 °C</p>
                            </div>
                            <div className="bg-white px-3 py-2 rounded-xl border border-emerald-50 shadow-sm text-center flex-1 transition-colors duration-300">
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Éco</p>
                                <p className="font-bold text-slate-800">16 °C</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm transition-colors duration-300">
                            <p className="text-xs font-bold text-slate-800 mb-2 border-b border-emerald-100 pb-1">
                                <Translate fr="Plages horaires" en="Time slots" es="Franjas horarias" de="Zeitfenster" />
                            </p>
                            <ul className="text-sm space-y-1 text-slate-700 font-semibold font-mono">
                                <li>06h00 → 09h00 : <span className="text-orange-500 font-bold"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></span></li>
                                <li>09h00 → 18h00 : <span className="text-blue-500 font-bold">Éco</span></li>
                                <li>18h00 → 22h00 : <span className="text-orange-500 font-bold"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></span></li>
                                <li>22h00 → 06h00 : <span className="text-blue-500 font-bold">Éco</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Été */}
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden transition-colors duration-300">
                        <i className="fas fa-sun absolute -right-4 -top-4 text-6xl text-amber-200/50"></i>
                        <h4 className="font-bold text-amber-900 text-lg mb-1 flex items-center"><span className="mr-2">☀️</span> <Translate fr="Été" en="Summer" es="Verano" de="Sommer" /></h4>
                        <p className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-4">
                            <Translate fr="Mi-mai → Septembre" en="Mid-May → September" es="Mediados de mayo → Septiembre" de="Mitte Mai → September" />
                        </p>
                        <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm h-32 flex items-center transition-colors duration-300">
                            <p className="text-sm text-slate-800 leading-relaxed font-semibold">
                                <Translate 
                                    fr="Le chauffage est entièrement éteint durant la période estivale. Le logement bénéficie d’une température naturellement agréable." 
                                    en="The heating is completely turned off during the summer period. The accommodation enjoys a naturally pleasant temperature." 
                                    es="La calefacción está completamente apagada durante el período estival. El alojamiento goza de una temperatura naturalmente agradable." 
                                    de="Die Heizung ist während der Sommerzeit komplett ausgeschaltet. Die Unterkunft profitiert von einer natürlich angenehmen Temperatur." 
                                />
                            </p>
                        </div>
                    </div>

                    {/* Automne */}
                    <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm relative overflow-hidden transition-colors duration-300">
                        <i className="fab fa-canadian-maple-leaf absolute -right-4 -top-4 text-6xl text-orange-200/50"></i>
                        <h4 className="font-bold text-orange-900 text-lg mb-1 flex items-center"><span className="mr-2">🌤️</span> <Translate fr="Intersaison – Automne" en="Mid-season – Autumn" es="Entretiempo – Otoño" de="Zwischensaison – Herbst" /></h4>
                        <p className="text-xs text-orange-700 font-bold uppercase tracking-wider mb-4">
                            <Translate fr="Octobre → Mi-novembre" en="October → Mid-November" es="Octubre → Mediados de noviembre" de="Oktober → Mitte November" />
                        </p>
                        <div className="flex gap-4 mb-4">
                            <div className="bg-white px-3 py-2 rounded-xl border border-orange-50 shadow-sm text-center flex-1 transition-colors duration-300">
                                <p className="text-[10px] text-slate-400 font-bold uppercase"><Translate fr="Confort" en="Comfort" es="Confort" de="Komfort" /></p>
                                <p className="font-bold text-slate-800">19 °C</p>
                            </div>
                            <div className="bg-white px-3 py-2 rounded-xl border border-orange-50 shadow-sm text-center flex-1 transition-colors duration-300">
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Éco</p>
                                <p className="font-bold text-slate-800">16 °C</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm transition-colors duration-300">
                            <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                                <Translate 
                                    fr="Le fonctionnement est identique à l’intersaison de printemps, avec une régulation douce principalement le matin et en soirée." 
                                    en="Operation is identical to the spring mid-season, with gentle regulation mainly in the morning and evening." 
                                    es="El funcionamiento es idéntico al del entretiempo de primavera, con una regulación suave principalmente por la mañana y por la noche." 
                                    de="Der Betrieb ist identisch mit der Zwischensaison im Frühling, mit einer sanften Regulierung hauptsächlich morgens und abends." 
                                />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-red-50/80 p-6 rounded-2xl border border-red-100 shadow-inner text-slate-700 transition-colors duration-300">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center text-lg">
                        <span className="text-xl mr-2">ℹ️</span>
                        <Translate fr="Information importante" en="Important information" es="Información importante" de="Wichtige Informationen" />
                    </h4>
                    <p className="mb-4 text-sm font-medium">
                        <Translate 
                            fr="Les réglages ont été définis afin d’assurer votre confort, la préservation du logement et une gestion responsable de l’énergie." 
                            en="The settings have been defined to ensure your comfort, the preservation of the accommodation, and responsible energy management." 
                            es="Los ajustes se han definido para garantizar su confort, la preservación del alojamiento y una gestión responsable de la energía." 
                            de="Die Einstellungen wurden vorgenommen, um Ihren Komfort, den Erhalt der Unterkunft und einen verantwortungsvollen Umgang mit Energie zu gewährleisten." 
                        />
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm transition-colors duration-300">
                        <p className="font-bold text-red-600 mb-2 flex items-start">
                            <span className="mr-2">⚠️</span>
                            <span>
                                <Translate fr="Merci de ne pas modifier les paramètres vous-même." en="Please do not modify the settings yourself." es="Por favor, no modifique los ajustes usted mismo." de="Bitte ändern Sie die Einstellungen nicht selbst." />
                            </span>
                        </p>
                        <p className="text-sm text-slate-600">
                            <Translate 
                                fr={<>Pour toute modification nécessaire, veuillez informer <strong>Cendrine</strong> afin qu’elle puisse intervenir correctement.</>} 
                                en={<>For any necessary modifications, please inform <strong>Cendrine</strong> so she can intervene correctly.</>} 
                                es={<>Para cualquier modificación necesaria, por favor informe a <strong>Cendrine</strong> para que pueda intervenir correctamente.</>} 
                                de={<>Für eventuell notwendige Änderungen informieren Sie bitte <strong>Cendrine</strong>, damit sie entsprechend eingreifen kann.</>} 
                            />
                        </p>
                        <div className="mt-4">
                            <button onClick={scrollToContacts} className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-100 transition-colors shadow-sm cursor-pointer">
                                <i className="fas fa-address-book"></i>
                                <Translate fr="Contacter Cendrine" en="Contact Cendrine" es="Contactar a Cendrine" de="Cendrine kontaktieren" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}