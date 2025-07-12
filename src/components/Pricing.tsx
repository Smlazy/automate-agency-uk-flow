
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Crown, Zap, Shield, Users } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Starter Package",
      setupFee: "£1,200",
      monthlyRetainer: "£295",
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
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Professional Package",
      setupFee: "£2,500",
      monthlyRetainer: "£495",
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
      color: "from-[#8B1538] to-[#7A1230]"
    },
    {
      name: "Enterprise Package",
      setupFee: "£4,500",
      monthlyRetainer: "£795",
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
      color: "from-purple-600 to-purple-800"
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`bg-[#0F0F0F] border-gray-700 p-8 relative transition-all duration-300 hover:border-[#8B1538] hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-[#8B1538] shadow-xl' : 'shadow-lg'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#8B1538] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
                <pkg.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-1">Setup Fee</div>
                <div className="text-3xl font-bold text-[#8B1538] mb-3">{pkg.setupFee}</div>
                <div className="text-sm text-gray-400 mb-1">Monthly Retainer</div>
                <div className="text-3xl font-bold text-[#8B1538] mb-4">{pkg.monthlyRetainer}<span className="text-lg text-gray-400">/month</span></div>
              </div>
              
              <p className="text-gray-300 mb-6 font-medium">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Check className="text-[#8B1538] mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                className={`w-full ${pkg.popular ? 'bg-[#8B1538] hover:bg-[#7A1230]' : 'bg-gray-700 hover:bg-gray-600'} text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg`}
              >
                Schedule Your Free Consultation
              </Button>
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
                className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-3 font-semibold text-lg transition-all duration-300 hover:shadow-lg"
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
