
import SectionBackground from '@/components/SectionBackground';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Cookie Policy
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies to remember your preferences, analyze site traffic, and provide 
                personalized content and advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in your browser settings. Please note that removing 
                or blocking cookies may impact your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about our Cookie Policy, please contact us at{' '}
                <a href="mailto:cookies@vantivedigital.com" className="text-emerald-400 hover:text-emerald-300">
                  cookies@vantivedigital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
