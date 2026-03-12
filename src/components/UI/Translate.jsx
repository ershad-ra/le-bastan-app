import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Translate({ fr, en, es, de }) {
    const { language } = useContext(AppContext);
    const text = { fr, en, es, de }[language] || fr; // Fallback to French
    return <>{text}</>;
}