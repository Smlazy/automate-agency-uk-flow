
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Users, Wrench } from 'lucide-react';

const Solutions = () => {
  const niches = [
    {
      icon: Monitor,
      title: "SAAS",
      subtitle: "Software as a Service Companies",
      description: "Streamline user onboarding, boost feature adoption, and reduce churn with intelligent automation workflows designed for software companies.",
      results: [
        "80% reduction in manual onboarding time while improving user activation rates by 35%",
        "Intelligent ticket routing and automated response systems",
        "Automated reporting dashboards and performance tracking",
        "Smart trial management and strategic upgrade prompting"
      ],
      color: "from-emerald-600 to-emerald-800"
    },
    {
      icon: Users,
      title: "Agencies", 
      subtitle: "Including Real Estate, Marketing & Recruitment",
      description: "Automate client communication, project coordination, and performance reporting to scale your agency operations without hiring additional staff.",
      results: [
        "70% reduction in client reporting time and improved project delivery consistency by 45%",
        "Automated communication workflows and milestone tracking",
        "Real-time client dashboards and automated report generation",
        "Smart qualification systems and conversion optimization"
      ],
      color: "from-indigo-600 to-indigo-800"
    },
    {
      icon: Wrench,
      title: "Service Professionals",
      subtitle: "Plumbers, Electricians & Trade Specialists", 
      description: "Automate appointment booking, customer follow-ups, and invoice processing to focus on what you do best while growing your business.",
      results: [
        "85% reduction in no-shows and 60% faster payment collection",
        "Automated booking confirmations and customer reminder sequences",
        "Streamlined invoicing and automated payment reminders",
        "Digital documentation workflows and quality control systems"
      ],
      color: "from-purple-600 to-purple-800"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tailored Automation Solutions for Your Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialise in the unique workflows and challenges of three high-growth industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {niches.map((niche, index) => (
            <Card key={index} className="bg-[#0F0F0F] border-gray-700 p-8 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 flex flex-col h-full">
              <div className={`w-20 h-20 rounded-lg bg-gradient-to-r ${niche.color} flex items-center justify-center mb-6 shadow-lg`}>
                <niche.icon className="text-white" size={48} />
              </div>
              
              {/* Content Section - Grows to fill space */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{niche.title}</h3>
                {niche.subtitle && (
                  <p className="text-indigo-400 text-sm mb-4 font-medium min-h-[40px] flex items-center">{niche.subtitle}</p>
                )}
                <p className="text-gray-300 mb-6 leading-relaxed">{niche.description}</p>

                {/* Results Section - Consistent Height */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Typical Results:</h4>
                  <div className="space-y-2 min-h-[120px] flex flex-col justify-start">
                    {niche.results.map((result, idx) => (
                      <div key={idx} className="flex items-start text-gray-300 text-sm">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button Section - Always at bottom */}
              <div className="mt-auto">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 font-medium transition-all duration-200 hover:shadow-lg active:scale-95"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-[#0F0F0F] p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-300 mb-6">
              We've successfully automated workflows for dozens of other business types. 
              Our process works for any business with repetitive tasks and growth ambitions.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
            >
              Schedule Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
