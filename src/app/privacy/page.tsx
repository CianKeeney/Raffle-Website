'use client';

import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-blue-500">
          <h1 className="text-4xl font-bold text-center text-blue-500 mb-8 font-orbitron">
            Power Picks Privacy Policy
          </h1>
          <p className="text-gray-600 italic mb-8">Last Updated: 03 February 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              1. Introduction: Important Information and Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to the Power Picks privacy policy.
            </p>
            <p className="text-gray-700">
              We&apos;re committed to protecting your privacy and ensuring that your personal data is handled in accordance with applicable data protection laws. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              2. Purpose of This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              This privacy policy provides information about how Power Picks collects and processes your personal data when you use our website, including when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Sign up for newsletters</li>
              <li>Register and create an account</li>
              <li>Enter a competition</li>
              <li>Complete a survey</li>
              <li>Win a prize</li>
              <li>Participate in a Power Picks event</li>
            </ul>
            <p className="text-gray-700">
              This website is not intended for children, and we do not knowingly collect data from children. Please read this policy alongside any additional privacy notices we provide on specific occasions.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-500 mb-4">2.1. Controller</h3>
            <p className="text-gray-700 mb-4">
              When we mention <strong className="text-gray-900">"Power Picks"</strong>, <strong className="text-gray-900">"we"</strong>, <strong className="text-gray-900">"us"</strong>, or <strong className="text-gray-900">"our"</strong> in this policy, we're referring to <strong className="text-gray-900">Power Picks Limited</strong>, the legal entity responsible for your personal data. Power Picks Limited is the data controller of this website.
            </p>
            <p className="text-gray-700 mb-4">
              We have appointed a Data Protection Officer (DPO) to oversee this privacy policy. For any questions or requests regarding your data, contact the DPO at: <a href="mailto:privacy@powerpicks.com" className="text-blue-600 hover:text-blue-500">privacy@powerpicks.com</a>
            </p>
            <p className="text-gray-700">
              You also have the right to contact your local data protection authority or the UK's Information Commissioner's Office (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">www.ico.org.uk</a>, but we kindly ask you to contact us first so we can address your concerns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              3. Third-Party Links
            </h2>
            <p className="text-gray-700">
              Our website may include links to third-party websites and services. Clicking those may allow third parties to collect or share data about you. Power Picks is not responsible for their privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              4. The Data We Collect
            </h2>
            <p className="text-gray-700 mb-4">We may collect and process the following personal data:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong className="text-gray-900">Identity Data:</strong> Name, username, or similar identifier.</li>
              <li><strong className="text-gray-900">Contact Data:</strong> Address, email, phone number.</li>
              <li><strong className="text-gray-900">Technical Data:</strong> IP address, browser info, device data.</li>
              <li><strong className="text-gray-900">Usage Data:</strong> Information about how you use our website.</li>
              <li><strong className="text-gray-900">Marketing Preferences:</strong> Communication and promotional settings.</li>
              <li><strong className="text-gray-900">Verification Documents:</strong> Driving licence, passport, or ID (when claiming prizes).</li>
              <li><strong className="text-gray-900">Transaction Data:</strong> Payments made or received, competition ticket info, outcomes.</li>
              <li><strong className="text-gray-900">Media Content:</strong> Photos/videos of prize collection (with your consent).</li>
              <li><strong className="text-gray-900">Financial Info:</strong> Partial card details via our secure third-party payment processors.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We may also collect Aggregated Data (e.g., statistical or demographic data), which is not personal unless combined with identifiable information.
            </p>
            <p className="text-gray-700 mb-4"><strong className="text-gray-900">We do not collect:</strong></p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Special categories of data (e.g. race, religion, health)</li>
              <li>Criminal conviction or offence information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-500 mb-4">4.1. How We Collect Data</h3>
            <p className="text-gray-700 mb-4">We collect data in three ways:</p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li className="mb-2">
                <strong className="text-gray-900">Directly from you:</strong><br />
                When you create an account, enter competitions, subscribe to marketing, contact us, or provide feedback.
              </li>
              <li className="mb-2">
                <strong className="text-gray-900">Automatically:</strong><br />
                We use cookies and similar tools to gather Technical and Usage Data. Please refer to our Cookie Policy for more.
              </li>
              <li>
                <strong className="text-gray-900">From third parties:</strong><br />
                We may receive data from analytics providers (e.g. Google), secure payment processors, and marketing partners.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-500 mb-4">4.2. Legal Basis for Using Your Data</h3>
            <p className="text-gray-700 mb-4">We&apos;ll only use your personal data when the law allows us to. Most commonly, we&apos;ll use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Performing our contract with you (e.g., managing your entries or awarding prizes)</li>
              <li>Complying with legal obligations</li>
              <li>Our legitimate interests (e.g., improving user experience)</li>
              <li>With your consent (for marketing or media features)</li>
            </ul>
            <p className="text-gray-700">
              You can withdraw consent at any time by contacting: <a href="mailto:privacy@powerpicks.com" className="text-blue-600 hover:text-blue-500">privacy@powerpicks.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-blue-500 mb-4">4.3. Purposes for Data Use</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-700">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-4 text-left">Purpose</th>
                    <th className="p-4 text-left">Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Registering an account</td>
                    <td className="p-4">Contract</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Processing competition entries</td>
                    <td className="p-4">Contract</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Verifying winners (age, identity)</td>
                    <td className="p-4">Legal obligation</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Managing accounts and communications</td>
                    <td className="p-4">Contract</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Awarding and delivering prizes</td>
                    <td className="p-4">Contract</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Publicity and media content</td>
                    <td className="p-4">Consent</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Marketing communications</td>
                    <td className="p-4">Consent</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Customer support and complaint resolution</td>
                    <td className="p-4">Contract, Legal obligation, Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Improving website and competition experience</td>
                    <td className="p-4">Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Fraud prevention and security</td>
                    <td className="p-4">Legal obligation, Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Analytics and website usage tracking</td>
                    <td className="p-4">Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Regulatory compliance</td>
                    <td className="p-4">Legal obligation</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4">Market research and surveys</td>
                    <td className="p-4">Legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="p-4">Responding to data rights requests</td>
                    <td className="p-4">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              5. Data Security and Retention
            </h2>
            <p className="text-gray-700">
              We&apos;ve put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
            </p>
            <p className="text-gray-700">
              We retain personal data only as long as necessary for the purposes described in this policy or to meet legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              6. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">You have rights under data protection laws, including the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access your personal data</li>
              <li>Correct or update your data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Withdraw marketing consent</li>
            </ul>
            <p className="text-gray-700">
              To exercise any of these rights, email us at: <a href="mailto:privacy@powerpicks.com" className="text-blue-600 hover:text-blue-500">privacy@powerpicks.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              7. Glossary
            </h2>
            <p className="text-gray-700 mb-4">
              <strong className="text-gray-900">Legitimate Interest</strong> means the interest of the Promoter's business in conducting and managing its business to enable the Promoter to give you the best service/product and the best and most secure experience. The Promoter considers and balances any potential impact on you (both positive and negative) and your rights before processing your personal data for its own legitimate interests. The Promoter does not use your personal data for activities where its interests are overridden by the impact on you (unless the Promoter has your consent or is otherwise required or permitted to by law). You can obtain further information about how the Promoter assesses its legitimate interests against any potential impact on you in respect of specific activities by contacting the Promoter.
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-gray-900">Performance of Contract</strong> means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-gray-900">Comply with a legal obligation</strong> means processing your personal data where it is necessary for compliance with a legal obligation that the Promoter is subject to.
            </p>
            <p className="text-gray-700 mb-4"><strong className="text-gray-900">External Third Parties</strong></p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Service providers who provide IT and system administration services.</li>
              <li>Third parties that are providing the prize to winners for instance and not limited to, travel agents, airlines, hotels, venues.</li>
              <li>Professional advisers including lawyers, bankers, auditors and insurers who may provide consultancy, banking, legal, insurance and accounting services.</li>
              <li>HM Revenue & Customs, regulators and other applicable authorities who require reporting of processing activities in certain circumstances.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              8. Marketing
            </h2>
            <p className="text-gray-700 mb-4">
              The Promoter provides you with choices regarding certain personal data uses, particularly around marketing communications from the Promoter. You will receive marketing communications from the Promoter if you have previously entered a competition, and you have not opted out of receiving that marketing.
            </p>

            <h3 className="text-xl font-bold text-blue-500 mb-4">8.1. Third-party marketing</h3>
            <p className="text-gray-700 mb-4">
              The Promoter does not share your personal data with any third party for marketing purposes. In the event the Promoter wishes to do so, the Promoter will get your express opt-in consent before sharing your personal data with any third party for marketing purposes.
            </p>

            <h3 className="text-xl font-bold text-blue-500 mb-4">8.2. Opting out</h3>
            <p className="text-gray-700">
              You can ask the Promoter to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by contacting the Promoter at any time at <a href="mailto:privacy@ooosch.com" className="text-blue-600 hover:text-blue-500">privacy@ooosch.com</a>. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of the website may become inaccessible or not function properly. For more information about the cookies the Promoter uses, please see the Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              9. Change of Purpose
            </h2>
            <p className="text-gray-700">
              We&apos;ll only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact the Promoter. If the Promoter needs to use your personal data for an unrelated purpose, the Promoter will notify you and will explain the legal basis which allows the Promoter to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              10. How long the Promoter keeps your personal data
            </h2>
            <p className="text-gray-700">
              We&apos;ll only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. At the end of that retention period, your data will either be deleted or anonymised (so that it can no longer be associated with you) and used for research or statistical purposes. To determine the appropriate retention period for personal data, the Promoter considers the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which the Promoter processes your personal data and whether the Promoter can achieve those purposes through other means, and the applicable legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              11. Disclosures of your personal data
            </h2>
            <p className="text-gray-700 mb-4">
              The Promoter may share your personal data with the parties set out below for the purposes set out in the table of purposes for which the Promoter will use your personal data above.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>External Third Parties as set out in the Glossary.</li>
              <li>Third parties to whom the Promoter may choose to sell, transfer or merge parts of the Promoter's business or assets. Alternatively, the Promoter may seek to acquire other businesses or merge with them. If a change happens to the Promoter's business, then the new owners may use your personal data in the same way as set out in this privacy policy.</li>
            </ul>
            <p className="text-gray-700">
              The Promoter requires all third parties to respect the security of your personal data and to treat it in accordance with the law. The Promoter does not allow third-party service providers to use your personal data for their own purposes and only permits them to process your personal data for specified purposes and in accordance with the Promoter's instructions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              12. International transfers
            </h2>
            <p className="text-gray-700 mb-4">
              Your personal data may be used, stored and/or accessed by staff operating outside the UK and EEA working for the Promoter, or suppliers. If the Promoter transfers your personal data outside the UK or EEA, the Promoter will take appropriate security measures to ensure the respective recipient protects your personal data adequately in accordance with this privacy policy. These measures may include the following:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To countries that have been deemed to provide an adequate level of protection for personal data by the UK and/or the EU Commission.</li>
              <li>To entities in countries based outside the UK and EEA, by entering into the European Commission's approved Standard Contractual Clauses and/or the ICO's approved Addendum or the ICO's International Data Transfer Agreement, that is equivalent with them.</li>
              <li>To entities, that are US organisations, that are certified under the UK extension to the EU-US Data Privacy Framework (the "UK extension").</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              13. How the Promoter keeps your personal data safe
            </h2>
            <p className="text-gray-700 mb-4">
              At Ooosch, information security is very important to its business. The Promoter is fully committed to ensuring information security, accuracy, confidentiality and integrity.
            </p>
            <p className="text-gray-700 mb-4">
              The methods the Promoter uses to ensure data is safeguarded while being sent over the internet are of the industry standard. When information reaches the Promoter, the Promoter stores it securely and only provides access to authorised personnel or data processors.
            </p>
            <p className="text-gray-700">
              Ooosch maintains strict physical, electronic, and administrative safeguards to protect your personal data from unauthorised or inappropriate access. The data the Promoter collects is stored in secure operating environments not accessible by the public.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-500 mb-4 font-orbitron border-b border-blue-500 pb-2">
              14. Data Breach
            </h2>
            <p className="text-gray-700 mb-4">
              We&apos;ve put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
} 