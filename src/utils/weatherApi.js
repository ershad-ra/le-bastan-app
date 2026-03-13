const API_KEY = '67bdf3399c6447c6570faece590c12b1';

// Using exactly Luz-Saint-Sauveur without FR as requested
const CITY = 'Luz-Saint-Sauveur';

export const fetchWeather = async (lang = 'fr') => {
    // Changed the cache key to 'v4' to force your browser to clear the old broken data
    const cacheKey = `weatherCache_v4_${lang}`;
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
        const parsed = JSON.parse(cached);
        // Cache for 1 hour
        if (Date.now() - parsed.timestamp < 3600000) {
            return parsed.data;
        }
    }

    try {
        const [currentRes, forecastRes] = await Promise.all([
            // Switched back to ?q=CITY instead of lat/lon
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}&lang=${lang}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}&lang=${lang}`)
        ]);

        if (!currentRes.ok || !forecastRes.ok) {
            console.error("API Error: Please check if your API key is fully activated (can take 2 hours).");
            throw new Error("API Fetch failed");
        }

        const current = await currentRes.json();
        const forecast = await forecastRes.json();

        // Safe forecast processing: Grab 1 reading per day (jumping 8 periods = 24 hours)
        // We start at index 4 so it grabs the forecast for roughly the middle of the day
        const dailyForecast = forecast.list.filter((_, index) => index % 8 === 4).slice(0, 4);

        const data = {
            current: current,
            forecast: dailyForecast
        };

        // Save successful fetch to local storage
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            data: data
        }));

        return data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null; // Triggers the fallback UI
    }
};