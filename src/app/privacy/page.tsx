'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p>
          At Power Picks, we take your privacy seriously. This Privacy Policy explains how we collect, use, and share your personal information when you use our raffle platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Name and contact information</li>
          <li>Payment information</li>
          <li>Account credentials</li>
          <li>Raffle entries and participation history</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Process your raffle entries</li>
          <li>Communicate with you about your entries and prizes</li>
          <li>Send you important updates about our services</li>
          <li>Improve our platform and user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Service providers who help us operate our platform</li>
          <li>Law enforcement when required by law</li>
          <li>Other parties with your consent</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mt-4">
          Email: privacy@powerpicks.com<br />
          Address: 123 Raffle Street, Dublin, Ireland
        </p>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4">
            <Link href="/terms" className="text-blue-600 hover:underline">
              View our Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 