'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardDetail {
    icon: React.ReactNode;
    text: string;
}

export interface ServiceCardData {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    icon: React.ReactNode;
    category: string;
    details: CardDetail[];
}

interface ServiceCardsProps {
    cards: ServiceCardData[];
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ cards }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 340;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto mt-10 mb-20 px-4 relative group">

            {/* Navigation Buttons - High Visibility */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-100 hover:bg-gray-200 text-black p-3 rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 md:-ml-4 border border-gray-300"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-100 hover:bg-gray-200 text-black p-3 rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 md:-mr-4 border border-gray-300"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="
                    flex gap-6 overflow-x-auto pb-8 pt-4
                    snap-x snap-mandatory
                    /* Hide Scrollbar */
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                "
            >
                {cards.map((card) => (
                    <div
                        key={card.id}
                        // Card Container: Tall height + Dark background to frame screenshots nicely
                        className="relative flex-shrink-0 w-[300px] h-[550px] md:w-[340px] md:h-[600px] snap-center rounded-[32px] overflow-hidden shadow-xl bg-gray-900 transition-transform duration-300 hover:scale-[1.02]"
                    >
                        {/* 1. ACTUAL IMAGE TAG (Instead of background-image)
                           2. object-contain: Ensures full image is visible (no cropping)
                        */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-contain z-0 transition-transform duration-700 hover:scale-105"
                        />

                        {/* Gradient Overlay
                           - Added 'from-black/80' at the top to ensure white text is readable even if the screenshot has a white header.
                           - Added 'to-black/90' at bottom for text readability.
                        */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />

                        {/* Content Layer (z-20 ensures it sits on top of gradient) */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between text-left z-20">

                            {/* Top Section */}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-2 block">
                                    {card.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white leading-tight drop-shadow-md">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="opacity-90">
                                <p className="text-gray-200 text-sm font-medium line-clamp-3 drop-shadow-sm">
                                    {card.description}
                                </p>
                            </div>

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/10">
                                        {card.icon}
                                    </div>
                                    <span className="text-white font-semibold text-lg drop-shadow-md">
                                        {card.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;