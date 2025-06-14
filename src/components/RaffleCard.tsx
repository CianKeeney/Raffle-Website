'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

interface RaffleCardProps {
  raffle: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    ticket_price: number;
    total_tickets: number;
    tickets_sold: number;
    end_date: string;
  };
}

export default function RaffleCard({ raffle }: RaffleCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleEnterRaffle = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      console.log('RaffleCard - Session check:', session ? 'Found session' : 'No session');
      
      if (!session) {
        const currentUrl = `/raffles/${raffle.id}`;
        const returnUrl = encodeURIComponent(currentUrl);
        console.log('RaffleCard - Not logged in, redirecting to login with return URL:', returnUrl);
        window.location.href = `/login?returnUrl=${returnUrl}`;
        return;
      }

      console.log('RaffleCard - Logged in, proceeding to raffle:', raffle.id);
      window.location.href = `/raffles/${raffle.id}`;
    } catch (error) {
      console.error('Error handling raffle entry:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to enter raffle. Please try again.",
      });
    }
  };

  const availableTickets = raffle.total_tickets - raffle.tickets_sold;
  const endDate = new Date(raffle.end_date).toLocaleDateString();

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={raffle.image_url}
          alt={raffle.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{raffle.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{raffle.description}</p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            Available Tickets: {availableTickets}
          </p>
          <p className="text-sm text-gray-500">
            Ticket Price: ${raffle.ticket_price}
          </p>
          <p className="text-sm text-gray-500">
            Ends: {endDate}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleEnterRaffle}
          className="w-full"
          disabled={isLoading || availableTickets === 0}
        >
          {isLoading ? 'Loading...' : 'Enter Raffle'}
        </Button>
      </CardFooter>
    </Card>
  );
} 