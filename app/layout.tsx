import './globals.css';
import Navbar from '@/components/Navbar';
import React from "react";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'REPZ',
    description: 'Fitness website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
