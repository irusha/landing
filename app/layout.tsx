import './globals.css';
import Navbar from '@/components/Navbar';
import React from "react";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'REPZ',
    description: 'Fitness website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="repz-theme"
        >
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}
