import Translate from '../UI/Translate';
import AudioPlayer from '../UI/AudioPlayer';

export default function HomeSection() {
    return (
        <section id="accueil" className="space-y-8 pt-4">
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
                        <AudioPlayer />
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h3 className="font-bold text-lg mb-4 flex items-center text-slate-800">
                    <i className="fas fa-map-marked-alt mr-2 text-blue-600"></i>
                    <Translate fr="Adresse & Localisation" en="Address & Location" es="Dirección y Ubicación" de="Adresse & Lage" />
                </h3>
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center text-blue-900 transition-colors duration-300">
                    <p className="font-bold text-lg">13 promenade horizontale, Appartement 202</p>
                    <p className="font-bold text-lg">65120 Barèges, France</p>
                </div>
                
                {/* FIXED BORDER HERE */}
                <div className="mb-6">
                    <img src="https://assets.persys.fr/BD/livret-d-accueil/images/plan-de-la-residence.png" className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm" alt="Plan" />
                </div>
                
                <div className="rounded-2xl overflow-hidden h-96 border border-slate-200 shadow-inner bg-slate-100">
                    <iframe title="Map" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=13+promenade+horizontale,+65120+Bar%C3%A8ges,+France&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                <div className="mt-6 text-center">
                    <a href="https://maps.google.com/?q=13+promenade+horizontale,+65120+Bar%C3%A8ges,+France" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:scale-105 active:scale-95">
                        <i className="fas fa-directions text-2xl"></i>
                        <Translate fr="Y aller (Google Maps)" en="Go there (Google Maps)" es="Ir allí (Google Maps)" de="Wegbeschreibung (Google Maps)" />
                    </a>
                </div>
            </div>
        </section>
    );
}