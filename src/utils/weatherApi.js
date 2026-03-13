const API_KEY = '67bdf3399c6447c6570faece590c12b1';

// Coordonnées GPS exactes de l'appartement (Le Bastan 202, Barèges)
const LAT = '42.895292';
const LON = '0.062885';

export const fetchWeather = async (lang = 'fr') => {
    // Cache v9 pour forcer le retour à Barèges
    const cacheKey = `weatherCache_onecall_v9_${lang}`;
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < 3600000) {
            return parsed.data;
        }
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=${LON}&exclude=minutely,alerts&units=metric&appid=${API_KEY}&lang=${lang}`);

        if (!response.ok) {
            throw new Error("One Call API Fetch failed.");
        }

        const oneCallData = await response.json();

        const data = {
            current: {
                weather: oneCallData.current.weather,
                main: { 
                    temp: oneCallData.current.temp,
                    feels_like: oneCallData.current.feels_like,
                    humidity: oneCallData.current.humidity
                },
                wind: { speed: oneCallData.current.wind_speed },
                sys: {
                    sunrise: oneCallData.current.sunrise,
                    sunset: oneCallData.current.sunset
                },
                snow: oneCallData.current.snow || null,
                today_min: oneCallData.daily[0].temp.min,
                today_max: oneCallData.daily[0].temp.max
            },
            hourly: oneCallData.hourly.slice(1, 25).map(hour => ({
                dt: hour.dt,
                temp: hour.temp,
                weather: hour.weather,
                pop: hour.pop
            })),
            forecast: oneCallData.daily.slice(1, 6).map(day => ({
                dt: day.dt,
                weather: day.weather,
                main: { 
                    temp_max: day.temp.max,
                    temp_min: day.temp.min
                },
                pop: day.pop
            }))
        };

        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            data: data
        }));

        return data;
    } catch (error) {
        console.error("Error fetching One Call weather:", error);
        return null;
    }
};