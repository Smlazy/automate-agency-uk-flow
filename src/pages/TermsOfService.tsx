
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';

const TermsOfService = () => {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <NetworkBackground />
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="text-gray-400 mb-8">Last updated: January 2024</div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-4">
                <p>By accessing and using Vantive Digital's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <div className="text-gray-300 space-y-4">
                <p>Vantive Digital provides business automation services including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recruitment automation systems</li>
                  <li>Real estate process automation</li>
                  <li>Marketing automation solutions</li>
                  <li>Custom business automation development</li>
                  <li>Ongoing support and maintenance services</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
              <div className="text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Setup fees are due before project commencement</li>
                  <li>Monthly support fees are billed in advance</li>
                  <li>All prices are in GBP and exclude VAT where applicable</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Client Obligations</h2>
              <div className="text-gray-300 space-y-4">
                <p>Clients agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information and access needed for service delivery</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Test and approve deliverables within agreed timeframes</li>
                  <li>Maintain confidentiality of any proprietary information shared</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <div className="text-gray-300 space-y-4">
                <p>Upon full payment, clients receive ownership of custom automation solutions developed specifically for their business.</p>
                <p>Vantive Digital retains rights to general methodologies, processes, and any pre-existing intellectual property.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>Vantive Digital's liability shall not exceed the amount paid for services in the 12 months preceding the claim.</p>
                <p>We are not liable for indirect, consequential, or punitive damages.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <div className="text-gray-300 space-y-4">
                <p>Either party may terminate ongoing services with 30 days written notice.</p>
                <p>Setup projects cannot be cancelled once development has commenced.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>For questions regarding these terms, contact:</p>
                <ul className="list-none space-y-2">
                  <li>Email: info@vantive.digital</li>
                  <li>Address: United Kingdom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
