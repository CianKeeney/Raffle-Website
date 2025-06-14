'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to RaffleHub</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your premier destination for exciting raffles and amazing prizes
        </p>
        <Link href="/raffles">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            View Active Raffles
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Exciting Prizes</h3>
          <p className="text-gray-600">
            Enter to win amazing prizes from luxury items to exclusive experiences
          </p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Fair & Transparent</h3>
          <p className="text-gray-600">
            Our raffles are conducted with complete transparency and fairness
          </p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Easy to Enter</h3>
          <p className="text-gray-600">
            Simple process to enter raffles and purchase tickets
          </p>
        </Card>
      </div>

      {/* How It Works Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
            <h3 className="font-semibold mb-2">Browse Raffles</h3>
            <p className="text-gray-600">Explore our selection of active raffles</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
            <h3 className="font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600">Sign up for free to start participating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
            <h3 className="font-semibold mb-2">Purchase Tickets</h3>
            <p className="text-gray-600">Buy tickets for your chosen raffles</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
            <h3 className="font-semibold mb-2">Win Prizes</h3>
            <p className="text-gray-600">Wait for the draw and claim your prize</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-gray-600 mb-6">
          Join our community and start participating in exciting raffles today
        </p>
        <div className="space-x-4">
          <Link href="/raffles">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Raffles
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
