import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [language, setLanguage] = useState('fr');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'day');

    useEffect(() => {
        if (theme === 'night') {
            document.body.classList.add('night-mode');
            localStorage.setItem('theme', 'night');
        } else {
            document.body.classList.remove('night-mode');
            localStorage.setItem('theme', 'day');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'night' ? 'day' : 'night');

    return (
        <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}