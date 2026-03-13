import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ src, title, icon = "fa-microphone" }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [timeStr, setTimeStr] = useState("0:00");
    const audioRef = useRef(null);
    const progressContainerRef = useRef(null);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration || 0;
        const percent = duration > 0 ? (current / duration) * 100 : 0;
        setProgress(percent);
        
        const min = Math.floor(current / 60);
        const sec = Math.floor(current % 60);
        setTimeStr(`${min}:${sec.toString().padStart(2, '0')}`);
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        setTimeStr("0:00");
    };

    const seekAudio = (e) => {
        if (!audioRef.current.duration) return;
        const rect = progressContainerRef.current.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        audioRef.current.currentTime = pos * audioRef.current.duration;
    };

    return (
        <div className="bg-blue-50 border border-blue-100 p-3 sm:p-4 rounded-2xl shadow-sm flex items-center gap-3 sm:gap-4 w-full max-w-full relative transition-colors duration-300">
            <button 
                onClick={toggleAudio} 
                className={`w-10 h-10 shrink-0 ${isPlaying ? 'bg-slate-600' : 'bg-blue-600 animate-pulse'} text-white rounded-full flex items-center justify-center text-sm hover:scale-105 transition-all shadow-md outline-none cursor-pointer focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50`}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-1'}`}></i>
            </button>
            
            <div className="flex-1 flex flex-col justify-center min-w-0">
                <div className="flex justify-between items-start mb-1.5 gap-2">
                    {/* FIX: Removed truncate, allowed text to wrap normally */}
                    <span className="text-[10px] sm:text-xs font-bold text-blue-900 uppercase tracking-widest flex-1 leading-snug break-words">
                        <i className={`fas ${icon} text-blue-500 mr-1.5`}></i> 
                        {title}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-blue-800/60 font-mono shrink-0 mt-0.5">{timeStr}</span>
                </div>
                <div className="w-full h-6 flex items-center cursor-pointer relative" ref={progressContainerRef} onClick={seekAudio}>
                    <div className="w-full bg-blue-200 rounded-full h-1.5 absolute"></div>
                    <div className="bg-blue-600 h-1.5 rounded-full absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none" style={{ width: `${progress}%` }}></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full absolute top-1/2 -translate-y-1/2 -ml-1.5 shadow" style={{ left: `${progress}%` }}></div>
                </div>
            </div>
            
            <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
        </div>
    );
}