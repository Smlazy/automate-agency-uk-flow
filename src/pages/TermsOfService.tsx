
import SectionBackground from '@/components/SectionBackground';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using our automation services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Description</h2>
              <p className="mb-4">
                Vantive Digital provides business automation solutions including workflow optimization, 
                system integrations, and custom automation development.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <p className="mb-4">
                Services are billed according to the package selected. All fees are non-refundable 
                except as required by law or as specifically provided in these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:legal@vantivedigital.com" className="text-emerald-400 hover:text-emerald-300">
                  legal@vantivedigital.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
