import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'FitPro',
    description: 'Fitness website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
        </body>
        </html>
    );
}
