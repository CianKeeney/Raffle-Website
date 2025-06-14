'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  PlusCircle, 
  Users, 
  BarChart3, 
  Ticket, 
  LogOut,
  ChevronRight,
  Clock,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import { Raffle } from '@/types/raffle';
import { raffleService } from '@/services/raffleService';
import { useToast } from '@/components/ui/use-toast';

interface DashboardStats {
  totalRaffles: number;
  activeRaffles: number;
  totalEntries: number;
  totalRevenue: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalRaffles: 0,
    activeRaffles: 0,
    totalEntries: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/admin/login');
      } else {
        setUser(user);
        fetchData();
      }
    };
    checkUser();
  }, [router]);

  const fetchData = async () => {
    try {
      const activeRaffles = await raffleService.getActiveRaffles();
      const totalEntries = activeRaffles.reduce((sum, raffle) => sum + (raffle.entries?.length || 0), 0);
      const totalRevenue = activeRaffles.reduce((sum, raffle) => sum + (raffle.price * (raffle.entries?.length || 0)), 0);

      setStats({
        totalRaffles: activeRaffles.length,
        activeRaffles: activeRaffles.length,
        totalEntries,
        totalRevenue,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch dashboard data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Welcome back, {user.email}</p>
          </div>
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Raffles</p>
                <p className="text-2xl font-bold text-blue-600">{stats.totalRaffles}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Raffles</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeRaffles}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Entries</p>
                <p className="text-2xl font-bold text-purple-600">{stats.totalEntries}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                <p className="text-2xl font-bold text-purple-600">€{stats.totalRevenue.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Raffle Management */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Ticket className="h-5 w-5 text-blue-600" />
                Raffle Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/admin/dashboard/create-raffle" className="block">
                <Button className="w-full justify-between group">
                  <span className="flex items-center gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Create New Raffle
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/admin/dashboard/raffles" className="block">
                <Button variant="outline" className="w-full justify-between group">
                  <span className="flex items-center gap-2">
                    <Ticket className="h-4 w-4" />
                    View All Raffles
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Users className="h-5 w-5 text-green-600" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/admin/dashboard/users" className="block">
                <Button variant="outline" className="w-full justify-between group">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    View All Users
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/admin/dashboard/analytics" className="block">
                <Button variant="outline" className="w-full justify-between group">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Analytics
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 