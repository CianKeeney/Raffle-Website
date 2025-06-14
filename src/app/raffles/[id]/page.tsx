'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Raffle } from '@/types/raffle';

export default function RafflePurchasePage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isPurchasing, setIsPurchasing] = useState(false);

  useEffect(() => {
    const fetchRaffle = async () => {
      try {
        const { data, error } = await supabase
          .from('raffles')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) throw error;
        setRaffle(data);
      } catch (error) {
        console.error('Error fetching raffle:', error);
        toast({
          title: 'Error',
          description: 'Failed to load raffle details',
          variant: 'destructive',
        });
      }
    };

    fetchRaffle();

    // Subscribe to real-time updates
    const channel = supabase
      .channel(`raffle-${params.id}`)
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'raffles',
        filter: `id=eq.${params.id}`,
      }, (payload) => {
        setRaffle(payload.new as Raffle);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [params.id, toast]);

  const handlePurchase = async () => {
    setIsPurchasing(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // Store the current URL to redirect back after login
        const currentUrl = `/raffles/${params.id}`;
        sessionStorage.setItem('redirectUrl', currentUrl);
        router.push(`/login?redirectUrl=${encodeURIComponent(currentUrl)}`);
        return;
      }

      if (!raffle) return;

      // Create transaction record
      const { data: transaction, error: transactionError } = await supabase
        .from('transactions')
        .insert({
          user_id: user.id,
          raffle_id: raffle.id,
          quantity: quantity,
          total_amount: raffle.ticket_price * quantity,
          status: 'pending'
        })
        .select()
        .single();

      if (transactionError) throw transactionError;

      // Create ticket purchases
      const { error: ticketsError } = await supabase
        .from('ticket_purchases')
        .insert(
          Array(quantity).fill(null).map(() => ({
            user_id: user.id,
            raffle_id: raffle.id,
            transaction_id: transaction.id
          }))
        );

      if (ticketsError) throw ticketsError;

      // Update raffle ticket counts
      const { error: updateError } = await supabase
        .from('raffles')
        .update({
          available_tickets: raffle.available_tickets - quantity,
          sold_tickets: raffle.sold_tickets + quantity
        })
        .eq('id', raffle.id);

      if (updateError) throw updateError;

      // Update transaction status
      const { error: statusError } = await supabase
        .from('transactions')
        .update({ status: 'completed' })
        .eq('id', transaction.id);

      if (statusError) throw statusError;

      toast({
        title: 'Success!',
        description: `You have purchased ${quantity} ticket(s) for ${raffle.title}`,
      });

      setQuantity(1);
    } catch (error: any) {
      console.error('Purchase error:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to purchase tickets',
        variant: 'destructive',
      });
    } finally {
      setIsPurchasing(false);
    }
  };

  if (!raffle) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const totalPrice = raffle.ticket_price * quantity;
  const formattedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalPrice);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{raffle.title}</h1>
        <p className="text-gray-600 mb-6">{raffle.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Prize Details</h3>
            <p className="text-gray-600">{raffle.prize_description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Ticket Information</h3>
            <p className="text-gray-600">Price per ticket: ${raffle.ticket_price.toFixed(2)}</p>
            <p className="text-gray-600">Available tickets: {raffle.available_tickets}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Number of Tickets</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              max={raffle.available_tickets}
              value={quantity}
              onChange={(e) => setQuantity(Math.min(parseInt(e.target.value) || 1, raffle.available_tickets))}
              className="w-full"
            />
          </div>
          
          <div className="text-xl font-bold mb-4">
            Total: {formattedTotalPrice}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handlePurchase}
              className="w-4/5 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
              disabled={isPurchasing || raffle.available_tickets === 0}
            >
              {isPurchasing ? 'Processing...' : 'Purchase Tickets'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
} 