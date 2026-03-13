import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { fetchWeather } from '../../utils/weatherApi';
import Translate from './Translate';

// 1. Dynamic Icon Helper
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

// 2. NEW: Dynamic Background Color Helper based on Weather Code
const getWeatherTheme = (code) => {
    const themes = {
        // Clear Sky (Sunny / Night)
        '01d': 'from-blue-500 to-sky-400',
        '01n': 'from-indigo-900 to-blue-900',
        // Few Clouds
        '02d': 'from-blue-400 to-sky-300',
        '02n': 'from-slate-800 to-indigo-900',
        // Scattered / Broken Clouds (Greyish)
        '03d': 'from-slate-400 to-slate-300',
        '04d': 'from-slate-500 to-slate-400',
        '03n': 'from-slate-800 to-slate-700',
        '04n': 'from-slate-900 to-slate-800',
        // Rain
        '09d': 'from-blue-700 to-slate-500',
        '10d': 'from-blue-600 to-slate-400',
        '09n': 'from-slate-900 to-blue-900',
        '10n': 'from-slate-800 to-blue-900',
        // Thunderstorm
        '11d': 'from-slate-700 to-purple-800',
        '11n': 'from-slate-900 to-purple-900',
        // Snow (Icy Cyan)
        '13d': 'from-cyan-400 to-blue-300',
        '13n': 'from-blue-800 to-cyan-700',
        // Mist/Fog
        '50d': 'from-gray-400 to-gray-300',
        '50n': 'from-slate-700 to-gray-600'
    };
    return themes[code] || 'from-blue-600 to-cyan-500'; // Default fallback
};

// 3. The highly visual N-PY Banner Button
const VisualNpyLink = () => (
    <a href="https://www.n-py.com/fr/grand-tourmalet" target="_blank" rel="noreferrer" className="group relative block w-full mt-6 rounded-2xl overflow-hidden shadow-md border border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-slate-900">
        {/* Animated Background Image */}
        <div className="absolute inset-0 bg-[url('/outside-the-apartment.jpeg')] bg-cover bg-center opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"></div>
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:bg-blue-500/40 transition-colors duration-300">
                    <i className="fas fa-video text-white text-base sm:text-lg"></i>
                </div>
                <div>
                    <h4 className="text-white font-bold text-base sm:text-lg leading-tight tracking-wide drop-shadow-md">
                        <Translate fr="Webcams & Pistes" en="Webcams & Slopes" es="Webcams y Pistas" de="Webcams & Pisten" />
                    </h4>
                    <p className="text-blue-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mt-0.5 drop-shadow-md">
                        <Translate fr="En direct du Grand Tourmalet" en="Live from Grand Tourmalet" es="En vivo desde Grand Tourmalet" de="Live vom Grand Tourmalet" />
                    </p>
                </div>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-1">
                <i className="fas fa-arrow-right"></i>
            </div>
        </div>
    </a>
);

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

    const formatTime = (unixTs) => new Date(unixTs * 1000).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' });
    const formatDay = (unixTs) => new Date(unixTs * 1000).toLocaleDateString(language, { weekday: 'short' }).toUpperCase();

    if (loading) {
        return <div id="meteo-box" className="animate-pulse bg-slate-200 h-80 rounded-3xl w-full mb-8 border border-slate-300"></div>;
    }

    if (!weather || !weather.current || !weather.forecast) {
        return <div id="meteo-box" className="mb-8"><VisualNpyLink /></div>;
    }

    const isSnowing = weather.current.snow || weather.current.weather[0].icon.includes('13');
    const weatherCode = weather.current.weather[0].icon;
    const dynamicGradient = getWeatherTheme(weatherCode);

    return (
        <div id="meteo-box" className={`mb-8 rounded-3xl shadow-xl overflow-hidden text-white border border-white/20 transition-all duration-700 bg-gradient-to-br ${dynamicGradient}`}>
            
            <div className="relative z-10 p-6 sm:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight flex items-center drop-shadow-md">
                            <i className="fas fa-map-marker-alt mr-2 opacity-80"></i> Barèges
                        </h3>
                        <p className="text-white/90 text-sm font-medium capitalize mt-1 drop-shadow-sm">
                            {weather.current.weather[0].description}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-5xl sm:text-6xl font-light tracking-tighter drop-shadow-lg">
                            {Math.round(weather.current.main.temp)}°
                        </div>
                    </div>
                </div>

                {/* Sub-info: Snow, Sunrise, Sunset */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                    {isSnowing && (
                        <div className="bg-white/30 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-full text-xs font-bold flex items-center shadow-sm text-slate-900">
                            <i className="fas fa-snowflake animate-spin-slow mr-2 text-blue-600"></i>
                            <Translate fr="Neige prévue !" en="Snowing!" es="¡Nevando!" de="Schneefall!" />
                        </div>
                    )}
                    <div className="bg-black/15 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-sm">
                        <i className="fas fa-wind text-white/70 mr-2"></i> {Math.round(weather.current.wind.speed * 3.6)} km/h
                    </div>
                    <div className="bg-black/15 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-sm">
                        <i className="fas fa-sunrise text-yellow-300 mr-2"></i> {formatTime(weather.current.sys.sunrise)}
                    </div>
                    <div className="bg-black/15 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-sm">
                        <i className="fas fa-sunset text-orange-300 mr-2"></i> {formatTime(weather.current.sys.sunset)}
                    </div>
                </div>

                {/* Forecast Grid */}
                <div className="border-t border-white/20 pt-6">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-4 drop-shadow-sm">
                        <Translate fr="Prévisions" en="Forecast" es="Pronóstico" de="Vorhersage" />
                    </p>
                    <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                        {weather.forecast.map((day, idx) => (
                            <div key={idx} className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl py-3 px-1 hover:bg-white/20 transition-colors shadow-sm">
                                <p className="text-xs font-bold text-white/90 mb-2 drop-shadow-sm">{formatDay(day.dt)}</p>
                                <i className={`fas ${getWeatherIcon(day.weather[0].icon)} text-2xl mb-2 drop-shadow-md`}></i>
                                <p className="text-sm font-bold drop-shadow-sm">{Math.round(day.main.temp)}°</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interactive Visual Webcams Button */}
                <VisualNpyLink />

            </div>
        </div>
    );
}