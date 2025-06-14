import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as HotToaster } from 'react-hot-toast';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaffleHub - Win Amazing Prizes",
  description: "Enter exciting raffles and win incredible prizes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Power Picks</h3>
                <p className="text-gray-400">Your trusted platform for exciting raffles and competitions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/raffles/" className="text-gray-400 hover:text-white transition-colors">Raffles</Link></li>
                  <li><Link href="/winners" className="text-gray-400 hover:text-white transition-colors">Winners</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Power Picks. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Toaster />
        <HotToaster position="top-center" />
      </body>
    </html>
  );
}
