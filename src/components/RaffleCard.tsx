'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from '@supabase/auth-helpers-react';
import { useToast } from '@/components/ui/use-toast';
import { Raffle } from '@/types/raffle';
import { raffleService } from '@/services/raffleService';

interface RaffleCardProps {
  raffle: Raffle;
  onEnter?: () => void;
}

export default function RaffleCard({ raffle, onEnter }: RaffleCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const { toast } = useToast();

  const handleEnterRaffle = async () => {
    if (!session) {
      toast({
        title: 'Authentication Required',
        description: 'Please sign in to enter the raffle',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      await raffleService.enterRaffle(raffle.id);
      toast({
        title: 'Success',
        description: 'You have successfully entered the raffle',
      });
      onEnter?.();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to enter raffle. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const availableTickets = raffle.total_tickets - raffle.tickets_sold;
  const endDate = new Date(raffle.end_date).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={raffle.imageUrl || '/placeholder.jpg'}
          alt={raffle.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{raffle.title}</h3>
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
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">€{raffle.price}</span>
          <button
            onClick={handleEnterRaffle}
            disabled={isLoading || availableTickets === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Entering...' : 'Enter Now'}
          </button>
        </div>
      </div>
    </div>
  );
} 