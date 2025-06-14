'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const code = searchParams.get('code');
        if (!code) {
          router.push('/login');
          return;
        }

        // Exchange the code for a session
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) throw error;

        // Get the stored redirect URL
        const redirectUrl = sessionStorage.getItem('redirectUrl');
        console.log('Redirect URL:', redirectUrl); // Debug log

        // Clear the stored URL
        sessionStorage.removeItem('redirectUrl');
        
        if (redirectUrl) {
          console.log('Redirecting to:', redirectUrl); // Debug log
          router.push(redirectUrl);
        } else {
          console.log('No redirect URL found, going to home'); // Debug log
          router.push('/');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        toast.error('Authentication failed. Please try again.');
        router.push('/login');
      }
    };

    handleAuthCallback();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Completing sign in...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
} 