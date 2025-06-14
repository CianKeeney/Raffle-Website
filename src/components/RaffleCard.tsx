'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();

  const handleEnterRaffle = async () => {
    try {
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        console.log('RaffleCard - Logged in, proceeding to raffle:', session.user.id);
        window.location.href = `/raffles/${raffle.id}`;
      } else {
        console.log('RaffleCard - Not logged in, redirecting to login');
        window.location.href = `/login?returnUrl=/raffles/${raffle.id}`;
      }
    } catch (error) {
      console.error('Error entering raffle:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to enter raffle. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const availableTickets = raffle.total_tickets - raffle.tickets_sold;
  const endDate = new Date(raffle.end_date).toLocaleDateString();

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700">
      <div className="relative h-48 w-full">
        <Image
          src={raffle.image_url || '/placeholder.jpg'}
          alt={raffle.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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