import { useState, useEffect } from 'react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000); // Swipes every 4 seconds
        
        // Reset the timer if the user manually clicks/swipes
        return () => clearInterval(timer);
    }, [currentIndex]);

    // Touch swipe handling for mobile
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div 
            className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-md group border border-slate-200 transition-colors duration-300"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Image Track */}
            <div 
                className="flex transition-transform duration-500 ease-out h-full" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <img 
                        key={idx} 
                        src={img} 
                        alt={`Appartement ${idx + 1}`} 
                        className="w-full h-full object-cover flex-shrink-0"
                        loading={idx === 0 ? "eager" : "lazy"} // Optimize loading
                    />
                ))}
            </div>

            {/* Hover Arrows (Desktop) */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 sm:group-hover:opacity-100 transition-all backdrop-blur-sm focus:outline-none"
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 sm:group-hover:opacity-100 transition-all backdrop-blur-sm focus:outline-none"
            >
                <i className="fas fa-chevron-right"></i>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${currentIndex === idx ? 'bg-white scale-125 w-4' : 'bg-white/60 hover:bg-white'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}