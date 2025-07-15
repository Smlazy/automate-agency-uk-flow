
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';

const CookiePolicy = () => {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F]">
      <NetworkBackground />
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="text-gray-400 mb-8">Last updated: January 2024</div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <div className="text-gray-300 space-y-4">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <div className="text-gray-300 space-y-4">
                <p>We use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your browsing experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="text-gray-300 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Cookies</h3>
                  <p>These cookies collect information about how visitors use our website, such as which pages are visited most often.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functionality Cookies</h3>
                  <p>These cookies allow the website to remember choices you make and provide enhanced features.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p>These cookies are used to deliver advertisements relevant to you and your interests.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may use third-party services that place cookies on your device, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for social sharing</li>
                  <li>Marketing platforms for targeted advertising</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <div className="text-gray-300 space-y-4">
                <p>You can control and manage cookies in several ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                  <li>Opt-out tools: Many advertising networks provide opt-out tools</li>
                  <li>Privacy settings: Adjust privacy settings on social media platforms</li>
                </ul>
                <p>Please note that disabling cookies may affect the functionality of our website.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with the updated date.</p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="text-gray-300 space-y-4">
                <p>If you have questions about our use of cookies, contact us:</p>
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

export default CookiePolicy;
