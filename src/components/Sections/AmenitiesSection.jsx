import Translate from '../UI/Translate';
import RevealBox from '../UI/RevealBox';
import ImageCarousel from '../UI/ImageCarousel';

export default function AmenitiesSection() {
    const apartmentImages = [
        "https://assets.persys.fr/BD/livret-d-accueil/images/inside-the-apartment-1.jpeg",
        "https://assets.persys.fr/BD/livret-d-accueil/images/inside-the-apartment-2.jpeg",
        "https://assets.persys.fr/BD/livret-d-accueil/images/inside-the-apartment-3.jpeg",
        "https://assets.persys.fr/BD/livret-d-accueil/images/inside-the-apartment-4.jpeg",
        "https://assets.persys.fr/BD/livret-d-accueil/images/outside-the-apartment.jpeg" // Fixed: Using your full URL!
    ];

    return (
        <section id="logement" className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">
                    <Translate fr="Équipements & Pratique" en="Amenities & Practical Info" es="Equipamiento e información práctica" de="Ausstattung & Praktische Informationen" />
                </h2>
                
                <div className="mb-8">
                    <ImageCarousel images={apartmentImages} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cuisine */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors duration-300">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center"><i className="fas fa-utensils mr-2 text-slate-400"></i><Translate fr="Cuisine" en="Kitchen" es="Cocina" de="Küche" /></h3>
                        <ul className="text-sm space-y-2 text-slate-600 list-none">
                            <li><i className="fas fa-coffee text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Cafetières (Dosettes & Filtres)" en="Coffee Makers" es="Cafeteras" de="Kaffeemaschinen" /></li>
                            <li><i className="fas fa-cheese text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Appareil à Raclette" en="Raclette set" es="Máquina de Raclette" de="Raclette-Gerät" /></li>
                            <li><i className="fas fa-fire text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Four micro-ondes grill" en="Microwave grill" es="Horno microondas grill" de="Mikrowellengrill" /></li>
                            <li><i className="fas fa-snowflake text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Frigo / Congélateur" en="Fridge / Freezer" es="Nevera / Congelador" de="Kühlschrank / Gefrierschrank" /></li>
                            <li><i className="fas fa-bread-slice text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Grill électrique & Grille-pain" en="Electric grill & Toaster" es="Parrilla eléctrica y tostadora" de="Elektrogrill & Toaster" /></li>
                            <li><i className="fas fa-fire-burner text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Plaque vitrocéramique (2 feux)" en="Ceramic hob (2 burners)" es="Placa vitrocerámica (2 fuegos)" de="Cerankochfeld (2 Kochzonen)" /></li>
                            <li><i className="fas fa-mug-hot text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Bouilloire & Ustensiles complets" en="Kettle & Full utensils" es="Hervidor y utensilios" de="Wasserkocher & Zubehör" /></li>
                            <li><i className="fas fa-sink text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Lave-vaisselle" en="Dishwasher" es="Lavavajillas" de="Geschirrspüler" /></li>
                        </ul>
                    </div>

                    {/* Chambre */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors duration-300">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center"><i className="fas fa-bed mr-2 text-slate-400"></i><Translate fr="Chambre" en="Bedroom" es="Habitación" de="Schlafzimmer" /></h3>
                        <ul className="text-sm space-y-2 text-slate-600 list-none">
                            <li><i className="fas fa-moon text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Oreillers & Couettes fournis." en="Pillows & Duvets provided." es="Almohadas y edredones incluidos." de="Kissen & Bettdecken vorhanden." /></li>
                        </ul>
                    </div>

                    {/* Salon */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors duration-300">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center"><i className="fas fa-couch mr-2 text-slate-400"></i><Translate fr="Salon" en="Living Room" es="Salón" de="Wohnzimmer" /></h3>
                        <ul className="text-sm space-y-2 text-slate-600 list-none">
                            <li><i className="fas fa-tv text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Télévision" en="Television" es="Televisión" de="Fernseher" /></li>
                            <li><i className="fas fa-dice text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Livres, jeux & jouets" en="Books, games & toys" es="Libros, juegos y juguetes" de="Bücher, Spiele & Spielzeug" /></li>
                            <li><i className="fas fa-map-location-dot text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Brochures loisirs & activités" en="Leisure & activity brochures" es="Folletos de ocio y activités" de="Freizeit-Broschüren" /></li>
                        </ul>
                    </div>

                    {/* Entretien du Linge */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors duration-300">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center"><i className="fas fa-tshirt mr-2 text-slate-400"></i><Translate fr="Entretien du linge" en="Linen Maintenance" es="Mantenimiento de ropa" de="Wäschepflege" /></h3>
                        <ul className="text-sm space-y-2 text-slate-600 list-none">
                            <li><i className="fas fa-shirt text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Lave-linge (ou laverie à 500m)" en="Washing machine (or laundry at 500m)" es="Lavadora (o lavandería a 500m)" de="Waschmaschine (oder Wäscherei in 500m)" /></li>
                            <li><i className="fas fa-bolt text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Fer & Table à repasser" en="Iron & Ironing board" es="Plancha y tabla" de="Bügeleisen & Bügelbrett" /></li>
                            <li><i className="fas fa-wind text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Étendoir à linge" en="Drying rack" es="Tendedero" de="Wäscheständer" /></li>
                            <li><i className="fas fa-temperature-high text-slate-400 w-5 text-center mr-1"></i> <Translate fr="Sèche-serviette" en="Towel dryer" es="Calentador de toallas" de="Handtuchtrockner" /></li>
                        </ul>
                    </div>

                    {/* Entretien Divers */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors duration-300">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center"><i className="fas fa-broom mr-2 text-slate-400"></i><Translate fr="Entretien & Divers" en="Cleaning & Others" es="Limpieza y varios" de="Reinigung & Sonstiges" /></h3>
                        <ul className="text-sm space-y-2 text-slate-600 list-none">
                            <li><i className="fas fa-wind text-slate-400 mr-2 text-center w-5"></i> <Translate fr="Sèche-cheveux" en="Hairdryer" es="Secador de pelo" de="Haartrockner" /></li>
                            <li><i className="fas fa-stream text-slate-400 mr-2 text-center w-5"></i> <Translate fr="Aspirateur" en="Vacuum" es="Aspiradora" de="Staubsauger" /></li>
                            <li><i className="fas fa-bucket text-slate-400 mr-2 text-center w-5"></i> <Translate fr="Seau & Serpillère" en="Bucket & Mop" es="Cubo y fregona" de="Eimer & Mopp" /></li>
                            <li><i className="fas fa-brush text-slate-400 mr-2 text-center w-5"></i> <Translate fr="Balais / Balayette & Pelle" en="Broom & Dustpan" es="Escoba y recogedor" de="Besen & Schaufel" /></li>
                        </ul>
                    </div>

                    {/* Local à Skis */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-colors duration-300">
                        <h3 className="font-bold text-blue-900 mb-3 flex items-center"><i className="fas fa-snowflake mr-2 text-slate-400"></i><Translate fr="Local à Skis" en="Ski Locker" es="Guardaesquís" de="Skikeller" /></h3>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-around text-center gap-4 transition-colors duration-300">
                            <div>
                                <p className="text-xs text-slate-400 font-bold uppercase">Porte / Door</p>
                                <p className="text-xl font-bold text-slate-800">202</p>
                            </div>
                            <RevealBox>
                                <p className="text-xs text-slate-400 font-bold uppercase"><Translate fr="Code (Tapper)" en="Code (Tap)" es="Código (Tocar)" de="Code (Tippen)" /></p>
                                <p className="text-xl font-bold text-red-600 font-mono blur-text">C1568</p>
                            </RevealBox>
                        </div>
                    </div>

                    {/* Infos Techniques */}
                    <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 md:col-span-2 transition-colors duration-300">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center text-sm"><i className="fas fa-tools mr-2 text-slate-500"></i><Translate fr="INFOS TECHNIQUES" en="TECHNICAL INFO" es="INFO TÉCNICA" de="TECHNIK-INFOS" /></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm transition-colors duration-300">
                                <p className="font-bold text-blue-600"><Translate fr="Électricité" en="Electricity" es="Electricidad" de="Elektrizität" /></p>
                                <p className="text-slate-700"><Translate fr="Tableau à l'entrée" en="Panel at the entrance" es="Cuadro eléctrico a la entrada" de="Sicherungskasten am Eingang" /></p>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm transition-colors duration-300">
                                <p className="font-bold text-blue-600"><Translate fr="Coupure Eau" en="Water Cut-off" es="Corte de agua" de="Wasserabsperrung" /></p>
                                <p className="text-slate-700"><Translate fr="Sous le lavabo" en="Under the sink" es="Debajo del lavabo" de="Unter dem Waschbecken" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}