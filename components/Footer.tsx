import {Mail, MapPin, Phone} from 'lucide-react';
import {SiFacebook, SiInstagram, SiX, SiYoutube} from '@icons-pack/react-simple-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', href: 'features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Download', href: '#download' },
            { name: 'Updates', href: '#updates' }
        ],
        company: [
            { name: 'About Us', href: 'about' },
            { name: 'Careers', href: '#careers' },
            { name: 'Blog', href: '#blog' },
            { name: 'Press Kit', href: '#press' }
        ],
        support: [
            { name: 'Help Center', href: '#help' },
            { name: 'Contact Us', href: 'contact' },
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' }
        ]
    };

    const socialLinks = [
        { name: 'Facebook', icon: SiFacebook, href: '#', color: 'hover:text-blue-500' },
        { name: 'X', icon: SiX, href: '#', color: 'hover:text-sky-400' },
        { name: 'Instagram', icon: SiInstagram, href: '#', color: 'hover:text-pink-500' },
        { name: 'Youtube', icon: SiYoutube, href: '#', color: 'hover:text-red-500' }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 border-t border-slate-700">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">

                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            Repz
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                            Transform your fitness journey with cutting-edge augmented reality technology.
                            Get real-time feedback and personalized workouts.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <a href="mailto:info@repz.lk" className="hover:text-blue-400 transition-colors">
                                    info@repz.lk
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span>+94 112 123456</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span>Colombo, LK</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold text-white mb-4">Support</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="sm:col-span-2 lg:col-span-4 lg:col-start-6 lg:row-start-2">
                        <h4 className="font-semibold text-white mb-3">Subscribe to our newsletter</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Get the latest updates on new features and exclusive offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all text-sm whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                        {/* Copyright */}
                        <p className="text-sm text-slate-400 text-center sm:text-left">
                            &copy; {currentYear} Repz AR. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className={`text-slate-400 ${social.color} transition-all transform hover:scale-110`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Additional Links */}
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                            <a href="#privacy" className="hover:text-blue-400 transition-colors">
                                Privacy
                            </a>
                            <span className="text-slate-600">•</span>
                            <a href="#terms" className="hover:text-blue-400 transition-colors">
                                Terms
                            </a>
                            <span className="text-slate-600">•</span>
                            <a href="#cookies" className="hover:text-blue-400 transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}