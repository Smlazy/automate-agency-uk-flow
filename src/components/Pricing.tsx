
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Crown, Zap, Shield, Users } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "£1,200",
      period: " setup + £295/month",
      icon: Zap,
      description: "Perfect for small businesses, single automation",
      features: [
        "1-2 automation workflows",
        "Basic system integration",
        "Email support",
        "Monthly performance review",
        "Setup and training included",
        "30-day money-back guarantee"
      ],
      popular: false,
      color: "from-blue-600 to-blue-800",
      buttonText: "Get Started"
    },
    {
      name: "Professional Package",
      price: "£2,500",
      period: " setup + £495/month",
      icon: Star,
      description: "Perfect for growing companies, multiple automations",
      features: [
        "3-5 automation workflows",
        "Advanced system integrations",
        "Priority support (24-48hr response)",
        "Bi-weekly optimization sessions",
        "Performance reporting dashboard",
        "CRM and marketing automation",
        "Dedicated account manager",
        "Free monthly strategy call"
      ],
      popular: true,
      color: "from-[#8B1538] to-[#7A1230]",
      buttonText: "Most Popular"
    },
    {
      name: "Enterprise Package",
      price: "£4,500",
      period: " setup + £795/month",
      icon: Crown,
      description: "Perfect for large organizations, complex automation needs",
      features: [
        "Unlimited automation workflows",
        "Custom API integrations",
        "Dedicated account manager",
        "Weekly optimization sessions",
        "Advanced analytics and reporting",
        "Priority 24/7 support",
        "Monthly training sessions",
        "Custom automation development",
        "Multi-department coordination"
      ],
      popular: false,
      color: "from-purple-600 to-purple-800",
      buttonText: "Contact Sales"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flexible Automation Packages for Every Business Stage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect automation solution to transform your business operations
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`bg-[#0F0F0F] border-gray-700 p-8 transition-all duration-300 hover:border-[#8B1538] hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full relative ${pkg.popular ? 'ring-2 ring-[#8B1538] shadow-xl' : 'shadow-lg'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#8B1538] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
                <pkg.icon className="text-white" size={32} />
              </div>

              {/* Header Section */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white">
                    {pkg.price}
                    <span className="text-lg text-[#C0C0C0] font-normal">{pkg.period}</span>
                  </div>
                </div>
                <p className="text-[#C0C0C0] font-medium leading-relaxed">{pkg.description}</p>
              </div>

              {/* Features Section - Grows to fill space */}
              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[#C0C0C0]">
                      <Check className="text-[#8B1538] mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button Section - Always at bottom */}
              <div className="mt-auto">
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-200 active:scale-95 ${
                    pkg.popular 
                      ? 'bg-[#8B1538] hover:bg-[#A01B42] text-white hover:shadow-lg' 
                      : 'bg-transparent border-2 border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white'
                  }`}
                >
                  Schedule Your Free Consultation
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-[#0F0F0F] border-[#8B1538] p-8 shadow-xl">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <Shield className="text-[#8B1538] mr-3" size={32} />
                <h3 className="text-2xl font-bold text-white">All Packages Include</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Users className="text-[#8B1538] mx-auto mb-3" size={24} />
                  <div className="text-white font-semibold mb-2">UK-Based Support Team</div>
                  <div className="text-gray-400 text-sm">Dedicated British support specialists</div>
                </div>
                <div className="text-center">
                  <Shield className="text-[#8B1538] mx-auto mb-3" size={24} />
                  <div className="text-white font-semibold mb-2">Ongoing Support & Maintenance</div>
                  <div className="text-gray-400 text-sm">Continuous optimization and updates</div>
                </div>
                <div className="text-center">
                  <Check className="text-[#8B1538] mx-auto mb-3" size={24} />
                  <div className="text-white font-semibold mb-2">No Long-Term Contracts</div>
                  <div className="text-gray-400 text-sm">Cancel anytime with 30 days notice</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8B1538]/10 to-[#7A1230]/10 rounded-lg p-6 mb-6">
                <p className="text-white text-lg font-semibold mb-2">Free consultation to determine best fit for your business</p>
                <p className="text-gray-300">No obligation - discover your automation potential risk-free</p>
              </div>

              <Button 
                onClick={scrollToContact}
                className="bg-[#8B1538] hover:bg-[#A01B42] text-white px-8 py-3 font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Schedule Your Free Consultation
              </Button>
            </div>
          </Card>
        </div>

        {/* Money-back guarantee and flexibility */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-[#8B1538] to-[#7A1230] p-6 text-white shadow-xl">
            <div className="flex items-center mb-4">
              <Shield className="mr-3" size={24} />
              <h3 className="text-xl font-bold">30-Day Money-Back Guarantee</h3>
            </div>
            <ul className="space-y-2 text-sm mb-4">
              <li>• Risk-free trial of our automation services</li>
              <li>• Full refund if not completely satisfied</li>
              <li>• No questions asked guarantee</li>
            </ul>
            <div className="text-sm italic opacity-90">Your success is our commitment</div>
          </Card>

          <Card className="bg-[#0F0F0F] border-gray-700 p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <Check className="text-[#8B1538] mr-3" size={24} />
              <h3 className="text-xl font-bold text-white">Complete Flexibility</h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• No long-term contracts required</li>
              <li>• Scale up or down as needed</li>
              <li>• Pause service during slow periods</li>
            </ul>
            <div className="text-sm italic text-gray-400">Adapt our services to your business needs</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
