import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      
      <div className="prose prose-lg">
        <p>
          Welcome to Power Picks. By using our service, you agree to these terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          These terms and conditions (&quot;Terms&quot;) govern your use of the Power Picks raffle platform. By accessing or using our service, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use our service. By using Power Picks, you represent and warrant that you are at least 18 years old.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Entry Rules</h2>
        <p>
          Each raffle entry must be purchased through our platform. We reserve the right to limit the number of entries per person. All entries are final and non-refundable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Winner Selection</h2>
        <p>
          Winners are selected randomly using our automated system. The selection process is fair and transparent. Winners will be notified via email and must respond within 48 hours to claim their prize.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prizes</h2>
        <p>
          Prizes are as described in each raffle listing. We make every effort to ensure prize descriptions are accurate, but we reserve the right to substitute prizes of equal or greater value.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Publicity</h2>
        <p>
          By entering our raffles, you agree that we may use your name and likeness for promotional purposes without additional compensation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Intellectual Property</h2>
        <p>
          All content on our platform, including text, graphics, logos, and software, is the property of Power Picks and is protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Prize Storage</h2>
        <p>
          We will store prizes securely until they are claimed by winners. Unclaimed prizes may be forfeited after 30 days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
        <p>
          Power Picks is not liable for any indirect, incidental, or consequential damages arising from your use of our service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Refunds</h2>
        <p>
          All entry purchases are final and non-refundable, except where required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Electronic Communications</h2>
        <p>
          By using our service, you consent to receive electronic communications from us regarding your entries and account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Amendments to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Continued use of our service after such modifications constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Free Entry by Post</h2>
        <p>
          To enter any raffle for free, send a postcard with your name, address, and the raffle you wish to enter to: Power Picks, 123 Raffle Street, Dublin, Ireland.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">14. Data Protection</h2>
        <p>
          We process your personal data in accordance with our Privacy Policy. By using our service, you consent to such processing.
        </p>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mt-4">
            <Link href="/privacy" className="text-blue-600 hover:underline">
              View our Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 