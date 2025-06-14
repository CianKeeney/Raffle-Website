export interface Raffle {
  id: string;
  title: string;
  description: string;
  image_url: string;
  ticket_price: number;
  total_tickets: number;
  available_tickets: number;
  sold_tickets: number;
  end_date: string;
  prize_description: string;
  status: 'active' | 'completed' | 'cancelled';
  winner?: string;
  created_at: string;
  updated_at: string;
} 