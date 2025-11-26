'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
    name: string;
    path: string;
}

interface PillNavigationProps {
    links: NavLink[];
}

// --- Pill Navigation Component ---
const PillNavigation: React.FC<PillNavigationProps> = ({ links }) => {
    // Determine the active path using Next.js hook
    const pathname = usePathname();

    // Find the name of the link that matches the current pathname, or default to the first link's name
    const initialActiveLink = links.find(link => link.path === pathname)?.name ?? links[0].name;

    const [activeTab, setActiveTab] = useState<string>(initialActiveLink);

    // Type for the indicator style object
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

    // Type for the container ref (HTMLDivElement)
    const containerRef = useRef<HTMLDivElement>(null);

    // Type for the link refs map (mapping string names to HTMLLinkElement or null)
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

    const calculateIndicatorStyle = useCallback(() => {
        if (activeTab && linkRefs.current[activeTab]) {
            const container = containerRef.current;
            const activeLink = linkRefs.current[activeTab];

            if (!container || !activeLink) return;

            // Use getBoundingClientRect for precise positioning
            const containerRect = container.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();

            setIndicatorStyle({
                // Calculate left position relative to the container
                left: linkRect.left - containerRect.left,
                width: linkRect.width,
            });
        }
    }, [activeTab]);

    // Calculate style on initial render, and whenever activeTab changes
    useEffect(() => {
        calculateIndicatorStyle();
    }, [activeTab, calculateIndicatorStyle]);

    // Recalculate on window resize to ensure indicator stays aligned
    useEffect(() => {
        window.addEventListener('resize', calculateIndicatorStyle);
        // Cleanup function
        return () => window.removeEventListener('resize', calculateIndicatorStyle);
    }, [calculateIndicatorStyle]);

    // Handle link clicks: update the active visual state and let Link handle navigation
    const handleLinkClick = (name: string) => {
        setActiveTab(name);
    };

    return (
        <div
            ref={containerRef}
            className="flex relative p-2 bg-gray-100/80 rounded-full shadow-inner backdrop-blur-sm"
        >
            {/* The Moving Focus Indicator */}
            <div
                className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-in-out shadow-lg"
                style={indicatorStyle}
            ></div>

            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.path}
                    // Ref assignment ensures the ref type is correct
                    ref={(el: HTMLAnchorElement | null) => (linkRefs.current[link.name] = el)}
                    onClick={() => handleLinkClick(link.name)}
                    className={`
                        relative z-10 py-2 px-6 text-sm font-semibold whitespace-nowrap
                        transition-colors duration-200
                        ${activeTab === link.name ? 'text-black' : 'text-gray-600 hover:text-gray-800'}
                    `}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};
// --- End Pill Navigation Component ---


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks: NavLink[] = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="w-full fixed top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">🏋️‍♂️</span>
                        <span className="font-bold text-lg text-black">REPZ</span>
                    </div>

                    {/* Menu (Desktop - PillNavigation) */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <PillNavigation links={navLinks} />
                    </div>

                    {/* Right Side Icons & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                            aria-label="Toggle dark mode"
                        >
                            <Sun className="w-5 h-5" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col space-y-2 p-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="text-gray-800 hover:text-black font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;