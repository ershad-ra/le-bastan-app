import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ src, title, icon = "fa-play" }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        // Ces écouteurs (listeners) natifs sont la clé ! 
        // Ils permettent au bouton de se mettre à jour même si le lecteur
        // est mis en pause "à distance" par un autre lecteur.
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };
        const handleTimeUpdate = () => {
            if (audioEl.duration) {
                setProgress((audioEl.currentTime / audioEl.duration) * 100);
            }
        };

        audioEl.addEventListener('play', handlePlay);
        audioEl.addEventListener('pause', handlePause);
        audioEl.addEventListener('ended', handleEnded);
        audioEl.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audioEl.removeEventListener('play', handlePlay);
            audioEl.removeEventListener('pause', handlePause);
            audioEl.removeEventListener('ended', handleEnded);
            audioEl.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // EXCLUSIVITÉ : Avant de jouer, on met en pause TOUS les autres audios de la page
            const allAudios = document.querySelectorAll('audio');
            allAudios.forEach(a => {
                if (a !== audioRef.current && !a.paused) {
                    a.pause();
                }
            });
            
            // Puis on lance cet audio
            audioRef.current.play();
        }
    };

    const handleProgressClick = (e) => {
        if (!audioRef.current || !audioRef.current.duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        audioRef.current.currentTime = percentage * audioRef.current.duration;
    };

    return (
        <div className="flex-1 w-full bg-white border border-slate-200 rounded-xl p-2 sm:p-3 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow">
            {/* Balise native invisible */}
            <audio ref={audioRef} src={src} preload="metadata" />
            
            {/* Bouton Play/Pause */}
            <button 
                onClick={togglePlay}
                className="w-10 h-10 shrink-0 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none active:scale-95"
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                <i className={`fas ${isPlaying ? 'fa-pause' : icon} ${!isPlaying && icon === 'fa-play' ? 'ml-0.5' : ''}`}></i>
            </button>

            {/* Titre et Barre de progression */}
            <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-800 truncate mb-1.5">
                    {title}
                </div>
                <div 
                    className="h-2 bg-slate-100 rounded-full cursor-pointer relative overflow-hidden group"
                    onClick={handleProgressClick}
                >
                    <div 
                        className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-100 ease-linear rounded-full group-hover:bg-blue-600"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}