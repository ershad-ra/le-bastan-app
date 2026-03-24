import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { fetchWeather } from '../../utils/weatherApi';
import Translate from './Translate';

const getWeatherIcon = (code) => {
    const iconMap = {
        '01d': 'fa-sun text-yellow-300', '01n': 'fa-moon text-blue-200',
        '02d': 'fa-cloud-sun text-yellow-100', '02n': 'fa-cloud-moon text-blue-200',
        '03d': 'fa-cloud text-white', '03n': 'fa-cloud text-slate-300',
        '04d': 'fa-cloud text-white', '04n': 'fa-cloud text-slate-300',
        '09d': 'fa-cloud-showers-heavy text-blue-200', '09n': 'fa-cloud-showers-heavy text-blue-300',
        '10d': 'fa-cloud-sun-rain text-yellow-100', '10n': 'fa-cloud-moon-rain text-blue-300',
        '11d': 'fa-bolt text-yellow-400', '11n': 'fa-bolt text-yellow-400',
        '13d': 'fa-snowflake text-white', '13n': 'fa-snowflake text-white',
        '50d': 'fa-smog text-white/70', '50n': 'fa-smog text-slate-400'
    };
    return iconMap[code] || 'fa-cloud';
};

const getWeatherTheme = (code) => {
    const themes = {
        '01d': 'from-blue-500 to-sky-400', '01n': 'from-indigo-900 to-blue-900',
        '02d': 'from-blue-400 to-sky-300', '02n': 'from-slate-800 to-indigo-900',
        '03d': 'from-slate-400 to-slate-300', '04d': 'from-slate-500 to-slate-400',
        '03n': 'from-slate-800 to-slate-700', '04n': 'from-slate-900 to-slate-800',
        '09d': 'from-blue-700 to-slate-500', '10d': 'from-blue-600 to-slate-400',
        '09n': 'from-slate-900 to-blue-900', '10n': 'from-slate-800 to-blue-900',
        '11d': 'from-slate-700 to-purple-800', '11n': 'from-slate-900 to-purple-900',
        '13d': 'from-cyan-500 to-blue-400', '13n': 'from-blue-800 to-cyan-700',
        '50d': 'from-gray-400 to-gray-300', '50n': 'from-slate-700 to-gray-600'
    };
    return themes[code] || 'from-blue-600 to-cyan-500'; 
};

export default function WeatherWidget() {
    const { language } = useContext(AppContext);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchWeather(language).then(data => {
            setWeather(data);
            setLoading(false);
        });
    }, [language]);

    const formatHour = (unixTs) => new Date(unixTs * 1000).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' });
    const formatDay = (unixTs) => new Date(unixTs * 1000).toLocaleDateString(language, { weekday: 'long' });
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    if (loading) {
        return <div id="meteo-box" className="animate-pulse bg-slate-200 h-96 rounded-3xl w-full mb-8 border border-slate-300"></div>;
    }

    // Si pas de météo, on ne retourne rien (la section webcams est indépendante maintenant)
    if (!weather || !weather.current || !weather.forecast) {
        return null; 
    }

    const current = weather.current;
    const dynamicGradient = getWeatherTheme(current.weather[0].icon);

    return (
        <div id="meteo-box" className={`mb-8 rounded-[2rem] shadow-2xl overflow-hidden text-white border border-white/20 transition-all duration-700 bg-gradient-to-b ${dynamicGradient}`}>
            
            <div className="relative z-10 p-6 sm:p-8 space-y-6">
                
                {/* 1. HEADER & DISCLAIMER SÉCURITÉ */}
                <div className="text-center pt-2">
                    <h3 className="text-3xl font-light tracking-tight drop-shadow-md flex items-center justify-center gap-2">
                        <i className="fas fa-map-marker-alt text-xl opacity-80"></i> Barèges
                    </h3>
                    
                    <p className="text-[10px] sm:text-xs text-white/75 mt-1.5 font-medium tracking-wide drop-shadow-sm flex items-center justify-center gap-1.5">
                        <i className="fas fa-info-circle text-white/60"></i>
                        <Translate 
                            fr="Météo au village (1250m). Vérifiez les webcams pour l'altitude." 
                            en="Village weather (1250m). Check webcams for high altitude." 
                            es="Clima del pueblo (1250m). Ver webcams para la altitud." 
                            de="Dorfwetter (1250m). Webcams für die Höhe prüfen." 
                        />
                    </p>

                    <div className="text-7xl font-extralight tracking-tighter drop-shadow-xl mt-3 mb-1">
                        {Math.round(current.main.temp)}°
                    </div>
                    <p className="text-lg font-medium text-white/90 drop-shadow-md capitalize">
                        {current.weather[0].description}
                    </p>
                    <div className="flex justify-center items-center gap-3 text-sm font-semibold text-white/80 mt-1 drop-shadow-sm">
                        <span>H:{Math.round(current.today_max)}°</span>
                        <span>L:{Math.round(current.today_min)}°</span>
                    </div>
                </div>

                {/* 2. HOURLY FORECAST */}
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-inner">
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <i className="fas fa-clock"></i> <Translate fr="Prévisions par heure" en="Hourly forecast" es="Pronóstico por hora" de="Stündliche Vorhersage" />
                    </p>
                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                        {weather.hourly.map((hour, idx) => (
                            <div key={idx} className="flex flex-col items-center shrink-0 min-w-[50px]">
                                <span className="text-sm font-medium mb-2">{idx === 0 ? <Translate fr="Maint." en="Now" es="Ahora" de="Jetzt" /> : formatHour(hour.dt).split(':')[0] + 'h'}</span>
                                <i className={`fas ${getWeatherIcon(hour.weather[0].icon)} text-2xl mb-1 drop-shadow-md`}></i>
                                {hour.pop > 0.1 ? (
                                    <span className="text-[10px] text-blue-300 font-bold mb-1">{Math.round(hour.pop * 100)}%</span>
                                ) : (
                                    <span className="text-[10px] opacity-0 mb-1">-</span>
                                )}
                                <span className="text-lg font-bold">{Math.round(hour.temp)}°</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. 5-DAY DAILY FORECAST */}
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-inner">
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <i className="fas fa-calendar-alt"></i> <Translate fr="Prévisions sur 5 jours" en="5-day forecast" es="Pronóstico de 5 días" de="5-Tage Vorhersage" />
                    </p>
                    <div className="flex flex-col gap-3">
                        {weather.forecast.map((day, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-white/10 last:border-0 pb-3 last:pb-0">
                                <span className="text-base font-semibold w-24 capitalize">{capitalize(formatDay(day.dt))}</span>
                                <div className="flex flex-col items-center w-16">
                                    <i className={`fas ${getWeatherIcon(day.weather[0].icon)} text-xl drop-shadow-md`}></i>
                                    {day.pop > 0.1 && (
                                        <span className="text-[10px] text-blue-300 font-bold mt-0.5">{Math.round(day.pop * 100)}%</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 w-24 justify-end">
                                    <span className="text-sm font-medium text-white/60">{Math.round(day.main.temp_min)}°</span>
                                    <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-amber-400 opacity-80"></div>
                                    <span className="text-sm font-bold">{Math.round(day.main.temp_max)}°</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. DETAILS GRID */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-black/20 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex flex-col">
                        <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i className="fas fa-temperature-half"></i> <Translate fr="Ressenti" en="Feels Like" es="Sensación" de="Gefühlt" /></span>
                        <span className="text-2xl font-bold mt-auto">{Math.round(current.main.feels_like)}°</span>
                    </div>
                    <div className="bg-black/20 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex flex-col">
                        <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i className="fas fa-tint"></i> <Translate fr="Humidité" en="Humidity" es="Humedad" de="Feuchtigkeit" /></span>
                        <span className="text-2xl font-bold mt-auto">{current.main.humidity}%</span>
                    </div>
                    <div className="bg-black/20 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex flex-col">
                        <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i className="fas fa-wind"></i> <Translate fr="Vent" en="Wind" es="Viento" de="Wind" /></span>
                        <span className="text-2xl font-bold mt-auto">{Math.round(current.wind.speed * 3.6)} <span className="text-sm font-medium text-white/70">km/h</span></span>
                    </div>
                    <div className="bg-black/20 backdrop-blur-xl p-4 rounded-2xl border border-white/10 flex flex-col">
                        <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1 flex items-center gap-1.5"><i className="fas fa-sun"></i> Soleil</span>
                        <div className="flex flex-col mt-auto text-sm font-medium">
                            <span><i className="fas fa-arrow-up text-white/50 text-[10px] mr-1"></i> {formatHour(current.sys.sunrise)}</span>
                            <span><i className="fas fa-arrow-down text-white/50 text-[10px] mr-1"></i> {formatHour(current.sys.sunset)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}