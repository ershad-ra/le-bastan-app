import Translate from '../UI/Translate';
import AudioPlayer from '../UI/AudioPlayer';

export default function PodcastSection() {
    const podcasts = [
        {
            id: 1,
            title: { 
                fr: "Barèges, le bastion de la médecine militaire", 
                en: "Barèges, the bastion of military medicine", 
                es: "Barèges, el bastión de la medicina militar", 
                de: "Barèges, die Bastion der Militärmedizin" 
            },
            desc: { 
                fr: "Découvrez l'histoire fascinante de la station thermale.", 
                en: "Discover the fascinating history of the thermal spa.", 
                es: "Descubre la fascinante historia del balneario.", 
                de: "Entdecken Sie die faszinierende Geschichte des Thermalbads." 
            },
            src: "https://assets.persys.fr/BD/livret-d-accueil/audio/Barèges_le_bastion_de_la_médecine_militaire.mp3",
            icon: "fa-landmark",
            color: "text-amber-600 bg-amber-100"
        },
        {
            id: 2,
            title: { 
                fr: "Du ski aux étoiles au Grand Tourmalet", 
                en: "From skiing to the stars at Grand Tourmalet", 
                es: "Del esquí a las estrellas en el Grand Tourmalet", 
                de: "Vom Skifahren zu den Sternen am Grand Tourmalet" 
            },
            desc: { 
                fr: "L'épopée du Pic du Midi et des sports d'hiver.", 
                en: "The epic of Pic du Midi and winter sports.", 
                es: "La epopeya del Pic del Midi y los deportes de invierno.", 
                de: "Das Epos des Pic du Midi und des Wintersports." 
            },
            src: "https://assets.persys.fr/BD/livret-d-accueil/audio/Du_ski_aux_étoiles_au_Grand_Tourmalet.mp3",
            icon: "fa-snowflake",
            color: "text-blue-600 bg-blue-100"
        },
        {
            id: 3,
            title: { 
                fr: "L'empire cristallin secret de Barèges", 
                en: "The secret crystalline empire of Barèges", 
                es: "El imperio cristalino secreto de Barèges", 
                de: "Das geheime kristalline Imperium von Barèges" 
            },
            desc: { 
                fr: "Plongez dans les mystères géologiques de la vallée.", 
                en: "Dive into the geological mysteries of the valley.", 
                es: "Sumérgete en los misterios geológicos del valle.", 
                de: "Tauchen Sie ein in die geologischen Geheimnisse des Tals." 
            },
            src: "https://assets.persys.fr/BD/livret-d-accueil/audio/L_empire_cristallin_secret_de_Barèges.mp3",
            icon: "fa-gem",
            color: "text-purple-600 bg-purple-100"
        }
    ];

    return (
        <section id="podcasts" className="space-y-6 pt-4">
            <div id="podcast-box" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-xl shadow-inner">
                        <i className="fas fa-headphones-alt"></i>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-slate-800">
                            <Translate fr="Nos Podcasts" en="Our Podcasts" es="Nuestros Podcasts" de="Unsere Podcasts" />
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                            <Translate fr="Écoutez les histoires secrètes de la vallée" en="Listen to the secret stories of the valley" es="Escucha las historias secretas del valle" de="Hören Sie die geheimen Geschichten des Tals" />
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {podcasts.map((podcast) => (
                        <div key={podcast.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row mb-4 sm:mb-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${podcast.color}`}>
                                    <i className={`fas ${podcast.icon}`}></i>
                                </div>
                                <div className="flex-1 w-full">
                                    <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight mb-1">
                                        <Translate fr={podcast.title.fr} en={podcast.title.en} es={podcast.title.es} de={podcast.title.de} />
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium mb-3 sm:mb-2">
                                        <Translate fr={podcast.desc.fr} en={podcast.desc.en} es={podcast.desc.es} de={podcast.desc.de} />
                                    </p>
                                    <AudioPlayer 
                                        src={podcast.src} 
                                        title={<Translate fr="Écouter l'épisode" en="Listen to episode" es="Escuchar episodio" de="Episode anhören" />} 
                                        icon="fa-play"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}