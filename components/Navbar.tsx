'use client';
import { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">🏋️‍♂️</span>
                        <span className="font-bold text-lg">FitPro</span>
                    </div>

                    {/* Menu (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Features', 'Trainers', 'Testimonials', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                className="text-gray-800 hover:text-black font-medium relative group"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                            <Sun className="w-5 h-5" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
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
                        {['Home', 'About', 'Features', 'Trainers', 'Testimonials', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                className="text-gray-800 hover:text-black font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
