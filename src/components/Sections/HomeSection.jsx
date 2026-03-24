import Translate from '../UI/Translate';
import AudioPlayer from '../UI/AudioPlayer';

export default function HomeSection() {
    return (
        <section id="accueil" className="space-y-8 pt-4">
            {/* Carte de Bienvenue */}
            <div className="welcome-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg relative overflow-hidden transition-colors duration-300">
                <div className="absolute -right-4 -top-4 text-slate-100 text-8xl sm:text-9xl opacity-50"><i className="fas fa-quote-right"></i></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-xl sm:text-2xl shadow-inner">
                            <i className="fas fa-home"></i>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                            <Translate fr="Bienvenue chez vous" en="Welcome home" es="Bienvenidos a su casa" de="Willkommen zu Hause" />
                        </h2>
                    </div>
                    
                    <div className="text-slate-700 leading-relaxed text-[15px] sm:text-lg space-y-3 sm:space-y-6">
                        <p className="font-semibold text-blue-800 text-lg sm:text-xl">
                            <Translate fr="Chers visiteurs," en="Dear visitors," es="Estimados visitantes," de="Liebe Besucher," />
                        </p>
                        <p>
                            <Translate 
                                fr={<>Soyez les bienvenus à <span className="font-bold">BARÈGES</span> ! Merci d’avoir choisi notre logement pour y séjourner.</>}
                                en={<>Welcome to <span className="font-bold">BARÈGES</span>! Thank you for choosing our apartment for your stay.</>}
                                es={<>¡Sean bienvenidos a <span className="font-bold">BARÈGES</span>! Gracias por elegir nuestro alojamiento.</>}
                                de={<>Willkommen in <span className="font-bold">BARÈGES</span>! Danke, dass Sie bei uns wohnen.</>}
                            />
                        </p>
                        <p>
                            <Translate 
                                fr="Vous trouverez dans ce guide d’accueil quelques informations vous permettant de profiter au mieux de votre logement. Nous vous indiquons également quelques adresses que nous aimons à BARÈGES pour vous restaurer ou découvrir la région."
                                en="In this guide, you will find information to help you make the most of your accommodation. We also suggest some places we love in BARÈGES for eating out or exploring the region."
                                es="En esta guía encontrará información para aprovechar al máximo su estancia. También le indicamos algunos lugares que nos encantan para comer o descubrir la región."
                                de="Dieser Leitfaden hilft Ihnen, Ihre Unterkunft zu genießen. Wir empfehlen Ihnen auch Orte in BARÈGES zum Essen oder Entdecken."
                            />
                        </p>
                        <p>
                            <Translate 
                                fr="En cas de besoin, nous restons bien sûr à votre disposition pour vous permettre de profiter au mieux de votre nid douillet."
                                en="Should you need anything, we remain at your disposal to ensure you enjoy your stay in your cozy nest."
                                es="En caso de necesidad, estamos a su disposición para que disfrute de su refugio."
                                de="Wir stehen Ihnen gerne zur Verfügung, damit Sie Ihren Aufenthalt genießen können."
                            />
                        </p>
                        <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-col mt-4">
                            <span className="font-bold text-slate-800">
                                <Translate fr="Passez un très bon séjour à BARÈGES !" en="Have a great stay in BARÈGES!" es="¡Que tengan una excelente estancia en BARÈGES!" de="Einen tollen Aufenthalt in BARÈGES!" />
                            </span>
                            <span className="signature text-2xl text-blue-600 mt-1 sm:mt-2">
                                <Translate fr="Votre hôte" en="Your host" es="Su anfitrión" de="Ihr Gastgeber" />
                            </span>
                        </div>
                    </div>

                    <div className="mt-8 flex items-end gap-3 sm:gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-200 overflow-hidden shrink-0 border-2 border-white shadow-sm flex items-center justify-center text-blue-600">
                            <i className="fas fa-user text-xl"></i>
                        </div>
                        <AudioPlayer 
                            src="https://assets.persys.fr/BD/livret-d-accueil/audio/L_accueil_numérique_de_l_Appartement_202_Barèges.mp3" 
                            title={<Translate fr="Mot de bienvenue" en="Welcome word" es="Palabras de bienvenida" de="Willkommenswort" />} 
                            icon="fa-microphone"
                        />
                    </div>
                </div>
            </div>

            {/* Carte GPS et Localisation */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h3 className="font-bold text-lg mb-4 flex items-center text-slate-800">
                    <i className="fas fa-map-marked-alt mr-2 text-blue-600"></i>
                    <Translate fr="Adresse & Localisation" en="Address & Location" es="Dirección y Ubicación" de="Adresse & Lage" />
                </h3>
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center text-blue-900 transition-colors duration-300">
                    <p className="font-bold text-lg">13 promenade horizontale, Appartement 202</p>
                    <p className="font-bold text-lg">65120 Barèges, France</p>
                </div>
                
                <div className="mb-6">
                    <img src="https://assets.persys.fr/BD/livret-d-accueil/images/plan-de-la-residence.png" className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm" alt="Plan" />
                </div>
                
                <div className="rounded-2xl overflow-hidden h-96 border border-slate-200 shadow-inner bg-slate-100 relative">
                    <iframe 
                        title="Map" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade" 
                        src="https://maps.google.com/maps?q=42.895292,0.062885&t=&z=16&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                </div>

                <div className="mt-8 text-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                        <Translate fr="Y aller avec :" en="Navigate with:" es="Navegar con:" de="Navigieren mit:" />
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://waze.com/ul?ll=42.895292,0.062885&navigate=yes" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md active:scale-95">
                            <img src="https://assets.persys.fr/BD/livret-d-accueil/images/logo/waze.png" alt="Waze" className="w-6 h-6 object-contain drop-shadow-sm" />
                            <span>Waze</span>
                        </a>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=42.895292,0.062885" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md active:scale-95">
                            <img src="https://assets.persys.fr/BD/livret-d-accueil/images/logo/google%20maps.webp" alt="Google Maps" className="w-6 h-6 object-contain drop-shadow-sm" />
                            <span>Google Maps</span>
                        </a>
                        <a href="http://maps.apple.com/?daddr=42.895292,0.062885" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md active:scale-95">
                            <img src="https://assets.persys.fr/BD/livret-d-accueil/images/logo/Apple_Maps.png" alt="Apple Maps" className="w-6 h-6 object-contain drop-shadow-sm" />
                            <span>Apple Maps</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* NOUVELLE CARTE : Transports & Bus */}
            <div id="bus" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300 scroll-mt-24">
                <h3 className="font-bold text-xl mb-6 flex items-center text-slate-800">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mr-3 shadow-inner shrink-0">
                        <i className="fas fa-bus-alt"></i>
                    </div>
                    <Translate fr="Transports en commun" en="Public Transport" es="Transporte público" de="Öffentliche Verkehrsmittel" />
                </h3>

                <p className="text-slate-700 font-medium mb-6 text-sm sm:text-base">
                    <Translate
                        fr="Ligne 965 – Axe Lourdes > Luz Saint Sauveur > Barèges (Aller/Retour)"
                        en="Line 965 – Lourdes > Luz Saint Sauveur > Barèges (Round trip)"
                        es="Línea 965 – Lourdes > Luz Saint Sauveur > Barèges (Ida y vuelta)"
                        de="Linie 965 – Lourdes > Luz Saint Sauveur > Barèges (Hin- und Rückfahrt)"
                    />
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Faux lecteur PDF Stylisé */}
                    <a href="https://storage.googleapis.com/is-wp-90-prod/uploads-prod/2025/10/65-FH-965-Lourdes-Bareges-102025.pdf" target="_blank" rel="noreferrer" className="group relative block rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 bg-white">
                        {/* Barre style navigateur */}
                        <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest"><i className="fas fa-file-pdf mr-1"></i> Document PDF</span>
                        </div>
                        {/* Contenu visuel */}
                        <div className="p-8 flex flex-col items-center justify-center gap-4 text-center">
                            <div className="relative">
                                <i className="fas fa-file-pdf text-6xl text-red-500 group-hover:scale-110 transition-transform duration-300"></i>
                                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-external-link-alt"></i>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-lg">Fiche Horaires</p>
                                <p className="text-sm text-slate-500 font-medium">Ligne 965 (liO)</p>
                            </div>
                            <span className="inline-block mt-2 bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 rounded-full text-xs font-bold transition-colors group-hover:bg-red-600 group-hover:text-white">
                                <Translate fr="Ouvrir le document" en="Open document" es="Abrir documento" de="Dokument öffnen" />
                            </span>
                        </div>
                    </a>

                    {/* Bloc Informations (Dates & Site Officiel) */}
                    <div className="flex flex-col gap-4 justify-center">
                        {/* Dates de validité */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                            <i className="fas fa-calendar-check text-amber-500 text-lg mt-0.5"></i>
                            <div>
                                <p className="text-sm font-bold text-amber-900">
                                    <Translate fr="Période de validité" en="Validity period" es="Período de validez" de="Gültigkeitszeitraum" />
                                </p>
                                <p className="text-xs text-amber-800 mt-1 font-medium leading-relaxed">
                                    <Translate 
                                        fr="Horaires valables du 01/09/25 au 31/08/26." 
                                        en="Schedules valid from 01/09/25 to 31/08/26." 
                                        es="Horarios válidos del 01/09/25 al 31/08/26." 
                                        de="Fahrpläne gültig vom 01/09/25 bis 31/08/26." 
                                    />
                                </p>
                            </div>
                        </div>

                        {/* Site officiel liO */}
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex flex-col items-start gap-3">
                            <div className="flex items-start gap-3">
                                <i className="fas fa-info-circle text-blue-500 text-lg mt-0.5"></i>
                                <p className="text-xs text-blue-800 font-medium leading-relaxed">
                                    <Translate 
                                        fr="Pour consulter la version la plus récente des horaires ou découvrir d'autres lignes, veuillez visiter le site officiel."
                                        en="To view the most recent schedules or other lines, please visit the official website."
                                        es="Para consultar los horarios más recientes u otras líneas, visite el sitio web oficial."
                                        de="Um die aktuellsten Fahrpläne oder andere Linien anzuzeigen, besuchen Sie die offizielle Website."
                                    />
                                </p>
                            </div>
                            <a href="https://www.lio-occitanie.fr/horaires-et-plans/" target="_blank" rel="noreferrer" className="ml-7 inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-white px-3 py-2 rounded-xl border border-blue-200 hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                                <i className="fas fa-globe"></i> liO Occitanie
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}