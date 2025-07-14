
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Users, Wrench } from 'lucide-react';

const Solutions = () => {
  const niches = [
    {
      icon: Code,
      title: "SAAS",
      subtitle: null,
      description: "Streamline user onboarding, boost feature adoption, and reduce churn with intelligent automation workflows designed for software companies.",
      results: [
        "40% increase in trial-to-paid conversions",
        "60% reduction in user onboarding time", 
        "35% improvement in feature adoption rates",
        "25% decrease in customer churn"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Users,
      title: "Agencies", 
      subtitle: "Including Real Estate, Marketing & Recruitment",
      description: "Automate lead qualification, client communication, and project management to scale your agency operations without hiring additional staff.",
      results: [
        "300% increase in qualified leads",
        "50% reduction in manual data entry",
        "80% faster client response times", 
        "45% improvement in project delivery speed"
      ],
      color: "from-green-600 to-green-800"
    },
    {
      icon: Wrench,
      title: "Servicemen",
      subtitle: "Plumbers, Electricians & Trade Professionals", 
      description: "Automate appointment booking, customer follow-ups, and invoice processing to focus on what you do best while growing your business.",
      results: [
        "70% more appointments booked automatically",
        "90% reduction in no-shows with automated reminders",
        "55% faster invoice processing and payment collection",
        "40% increase in repeat customer bookings"
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
            <Card key={index} className="bg-[#0F0F0F] border-gray-700 p-8 hover:border-[#8B1538] transition-all duration-300 flex flex-col h-full">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${niche.color} flex items-center justify-center mb-6`}>
                <niche.icon className="text-white" size={32} />
              </div>
              
              {/* Content Section - Grows to fill space */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{niche.title}</h3>
                {niche.subtitle && (
                  <p className="text-[#C0C0C0] text-sm mb-4 font-medium">{niche.subtitle}</p>
                )}
                <p className="text-gray-300 mb-6 leading-relaxed">{niche.description}</p>

                {/* Results Section - Consistent Height */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Results:</h4>
                  <div className="space-y-2 min-h-[120px] flex flex-col justify-start">
                    {niche.results.map((result, idx) => (
                      <div key={idx} className="flex items-start text-[#C0C0C0] text-sm">
                        <span className="w-2 h-2 bg-[#8B1538] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">"{result}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button Section - Always at bottom */}
              <div className="mt-auto">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-[#8B1538] hover:bg-[#A01B42] text-white py-3 px-6 font-medium transition-all duration-200 hover:shadow-lg active:scale-95"
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
              className="bg-[#8B1538] hover:bg-[#A01B42] text-white px-8 py-3"
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
