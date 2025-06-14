'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    return null;
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">RaffleHub</div>
        <div className="space-x-6">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
              Home
            </Link>
            <Link href="/raffles" className="text-purple-600 hover:text-purple-700 font-medium">
              Raffles
            </Link>
            <Link href="/winners" className="text-purple-600 hover:text-purple-700 font-medium">
              Winners
            </Link>
          </div>
        </div>
        <Link 
          href="/admin/login" 
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
        >
          Admin Sign In
        </Link>
      </nav>
    </header>
  );
} 