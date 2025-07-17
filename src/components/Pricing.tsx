
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Crown, Zap, Shield, Users, Clock, MessageSquare, Phone, Headphones } from 'lucide-react';
import SectionBackground from '@/components/SectionBackground';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState('growth');
  const [selectedSupport, setSelectedSupport] = useState('premium');

  const setupPackages = [
    {
      id: 'starter',
      name: "Starter Package",
      price: "£1,199",
      period: " one-time setup",
      icon: Zap,
      description: "Template-based workflows adapted to your operations",
      features: [
        "Template-based workflows adapted to your operations",
        "2-3 core business tool integrations",
        "Basic email sequences and CRM synchronization",
        "Complete documentation and self-service guides",
        "30 days of included support during launch period"
      ],
      popular: false,
      color: "from-indigo-600 to-indigo-800",
      buttonText: "Get Started",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      id: 'growth',
      name: "Growth Package",
      price: "£2,385",
      period: " one-time setup",
      icon: Star,
      description: "Bespoke automation architecture designed for your processes",
      features: [
        "Bespoke automation architecture designed for your processes",
        "Full tech stack integration across all business platforms",
        "Advanced conditional logic and multi-step workflows",
        "Performance dashboard and optimization tracking",
        "30 days of included support during launch period"
      ],
      popular: true,
      color: "from-emerald-600 to-emerald-800",
      buttonText: "Get Started",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      id: 'enterprise',
      name: "Enterprise Package",
      price: "Custom Quote",
      period: " tailored solution",
      icon: Crown,
      description: "End-to-end process re-engineering and optimization",
      features: [
        "End-to-end process re-engineering and optimization",
        "Custom API development and unlimited platform connections",
        "AI-powered decision workflows and predictive automation",
        "Executive-level implementation and change management",
        "30 days of included support during launch period"
      ],
      popular: false,
      color: "from-purple-600 to-purple-800",
      buttonText: "Get Custom Quote",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700"
    }
  ];

  const supportPackages = [
    {
      id: 'none',
      name: "No Support",
      price: "£0",
      period: "/month",
      icon: Shield,
      description: "Self-manage with provided documentation",
      features: [
        "Self-manage with provided documentation",
        "Complete training materials included",
        "Ad-hoc support available at hourly rates"
      ],
      recommended: false
    },
    {
      id: 'basic',
      name: "Basic Support",
      price: "£195",
      period: "/month",
      icon: MessageSquare,
      description: "Proactive monitoring and issue resolution",
      features: [
        "Proactive monitoring and issue resolution",
        "Email support (24-hour response)",
        "Minor updates and improvements",
        "Monthly performance reports"
      ],
      recommended: false
    },
    {
      id: 'premium',
      name: "Premium Support",
      price: "£485",
      period: "/month",
      icon: Phone,
      description: "Everything in Basic plus priority response",
      features: [
        "Everything in Basic plus priority 4-hour response",
        "Monthly strategy and optimization calls",
        "Workflow improvements and additions",
        "Dedicated support channel"
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: "Enterprise Support",
      price: "£975",
      period: "/month",
      icon: Headphones,
      description: "Complete managed service experience",
      features: [
        "Everything in Premium plus dedicated account manager",
        "Quarterly business reviews and strategic planning",
        "Custom development and new integrations",
        "Same-day response with comprehensive SLA"
      ],
      recommended: false
    }
  ];

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    sessionStorage.setItem('selectedPackage', packageId);
  };

  const handleSupportSelect = (supportId: string) => {
    setSelectedSupport(selectedSupport === supportId ? null : supportId);
    sessionStorage.setItem('selectedSupport', supportId);
  };

  const handleGetStarted = (packageId: string) => {
    handlePackageSelect(packageId);
    window.location.href = '/signup';
  };

  return (
    <SectionBackground id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Flexible Pricing That Works for You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Choose your setup package, then add optional support if you want us to handle the technical details.
          </p>
          <p className="text-emerald-400 font-medium">
            All packages include 30 days of support. Ongoing support packages begin after your launch period.
          </p>
        </div>

        {/* Step 1: Setup Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Step 1: Choose Your Setup Package</h3>
            <p className="text-gray-300">One-time investment to get your automation systems built and launched</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupPackages.map((pkg, index) => {
              const isSelected = selectedPackage === pkg.id;
              const isGrowth = pkg.id === 'growth';
              const shouldScale = isSelected && !isGrowth;
              
              return (
                <Card 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm border-white/20 p-8 transition-all duration-400 hover:border-emerald-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full relative cursor-pointer
                    ${isSelected ? 'ring-2 ring-emerald-500 shadow-xl border-emerald-500' : 'shadow-lg'}
                    ${shouldScale ? 'scale-105' : ''}
                    ${isGrowth && (isSelected || pkg.id === 'growth') ? 'scale-105' : ''}
                  `}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  {(pkg.popular && (isSelected || pkg.id === 'growth')) && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 hover:scale-110`}>
                    <pkg.icon className="text-white" size={32} />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-white">
                        {pkg.price}
                        <span className="text-lg text-gray-400 font-normal">{pkg.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 font-medium leading-relaxed">{pkg.description}</p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <Check className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetStarted(pkg.id);
                      }}
                      className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${pkg.buttonColor} text-white`}
                    >
                      {pkg.buttonText}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Step 2: Support Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Step 2: Add Support Package (Optional)</h3>
            <p className="text-gray-300 mb-2">All packages include 30 days of support. Choose ongoing support to continue after your launch period.</p>
            <p className="text-indigo-400 font-medium">Paid support begins after your included 30-day period</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportPackages.map((pkg, index) => {
              const isSelected = selectedSupport === pkg.id;
              const isPremium = pkg.id === 'premium';
              
              return (
                <Card 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm border-white/20 p-6 transition-all duration-400 hover:border-emerald-500 hover:shadow-lg hover:-translate-y-2 flex flex-col h-full relative cursor-pointer
                    ${isPremium ? 'ring-2 ring-indigo-500 border-indigo-500' : ''}
                    ${isSelected ? 'ring-2 ring-emerald-500 bg-indigo-950/20 border-emerald-500' : ''}
                  `}
                  onClick={() => handleSupportSelect(pkg.id)}
                >
                  {/* Always show Recommended tag for Premium Support */}
                  {isPremium && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                      <pkg.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{pkg.name}</h4>
                    <div className="text-xl font-bold text-white">
                      {pkg.price}
                      <span className="text-sm text-gray-400 font-normal">{pkg.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{pkg.description}</p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Combined Information Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-emerald-500 p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
                    <Clock className="text-indigo-500 mr-3" size={24} />
                    After Your 30-Day Launch Period
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Users className="text-indigo-500 mr-2" size={18} />
                      Self-Managed
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">Complete control over systems</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">No ongoing monthly costs</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg border border-emerald-500">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Headphones className="text-emerald-500 mr-2" size={18} />
                      Supported
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">Expert monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">Continuous optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
                    <Shield className="text-emerald-500 mr-3" size={24} />
                    Why Choose Our Approach
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Users className="text-emerald-500 mx-auto mb-2" size={24} />
                    <div className="text-white font-semibold mb-1">UK-Based Team</div>
                    <div className="text-gray-400 text-sm">Expert support in your timezone</div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Shield className="text-emerald-500 mx-auto mb-2" size={24} />
                    <div className="text-white font-semibold mb-1">30-Day Guarantee</div>
                    <div className="text-gray-400 text-sm">Full refund if not satisfied</div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-gray-700 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Check className="text-emerald-500 mx-auto mb-2" size={24} />
                    <div className="text-white font-semibold mb-1">No Lock-ins</div>
                    <div className="text-gray-400 text-sm">Cancel support anytime</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-gray-700">
              <Button 
                onClick={() => window.location.href = '/signup'}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Start Your Automation Journey
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Pricing;
