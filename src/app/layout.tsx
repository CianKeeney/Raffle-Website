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
        <footer className="bg-gray-100 mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">RaffleHub</h3>
                <p className="text-gray-600">Your chance to win amazing prizes</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-600 hover:text-purple-600">Home</Link></li>
                  <li><Link href="/raffles" className="text-gray-600 hover:text-purple-600">Raffles</Link></li>
                  <li><Link href="/winners" className="text-gray-600 hover:text-purple-600">Winners</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="text-gray-600 hover:text-purple-600">Terms & Conditions</Link></li>
                  <li><Link href="/privacy" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-600">Email: support@rafflehub.com</li>
                  <li className="text-gray-600">Phone: (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              © 2024 RaffleHub. All rights reserved.
            </div>
          </div>
        </footer>
        <Toaster />
        <HotToaster position="top-center" />
      </body>
    </html>
  );
}
