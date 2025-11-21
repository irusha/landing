import './globals.css';
import Navbar from '@/components/Navbar';
import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'REPZ',
    description: 'Fitness website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
