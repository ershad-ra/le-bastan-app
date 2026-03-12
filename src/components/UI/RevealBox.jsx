import { useState } from 'react';

export default function RevealBox({ children, className = '' }) {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div 
            className={`reveal-box ${isRevealed ? 'revealed' : ''} ${className}`}
            onClick={() => setIsRevealed(!isRevealed)}
        >
            {children}
        </div>
    );
}