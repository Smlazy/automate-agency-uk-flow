
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <NetworkBackground />
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="text-gray-400 mb-8">Last updated: January 2024</div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-4">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fill out our contact forms or request consultations</li>
                  <li>Subscribe to our newsletters or blog updates</li>
                  <li>Create an account on our platform</li>
                  <li>Communicate with us via email, phone, or chat</li>
                </ul>
                <p>This may include your name, email address, phone number, company information, and any other details you choose to provide.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our automation services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and marketing communications</li>
                  <li>Analyze usage patterns to improve our website and services</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <div className="text-gray-300 space-y-4">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <div className="text-gray-300 space-y-4">
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights (GDPR)</h2>
              <div className="text-gray-300 space-y-4">
                <p>Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Erase your personal data</li>
                  <li>Restrict processing of your personal data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                </ul>
                <p>To exercise these rights, please contact us at info@vantive.digital</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
              <div className="text-gray-300 space-y-4">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
