import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'LPK Pejuang Pertiwi Indonesia.',
    description: 'Lembaga Pelatihan Kerja untuk bekerja di luar negri',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.className} antialiased`}>{children}</body>
        </html>
    );
}
