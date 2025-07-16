
import SectionBackground from '@/components/SectionBackground';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our services, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our automation services, 
                process transactions, and communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@vantivedigital.com" className="text-emerald-400 hover:text-emerald-300">
                  privacy@vantivedigital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
