
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Crown, Zap, Shield, Users, Clock, MessageSquare, Phone, Headphones } from 'lucide-react';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState('growth');
  const [selectedSupport, setSelectedSupport] = useState('basic');

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
      buttonText: "Select Starter",
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
      buttonText: "Select Growth",
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
      recommended: true
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
      recommended: false
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const handleSupportSelect = (supportId: string) => {
    setSelectedSupport(selectedSupport === supportId ? null : supportId);
  };

  return (
    <section id="pricing" className="py-20 bg-[#1A1A1A]">
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
                  className={`bg-[#0F0F0F] border-gray-700 p-8 transition-all duration-300 hover:border-emerald-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full relative cursor-pointer
                    ${isSelected ? 'ring-2 ring-emerald-500 shadow-xl' : 'shadow-lg'}
                    ${shouldScale ? 'scale-105' : ''}
                    ${isGrowth && !isSelected ? '' : isGrowth ? 'scale-105' : ''}
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
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
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
                        scrollToContact();
                      }}
                      className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-200 active:scale-95 ${pkg.buttonColor} text-white hover:shadow-lg`}
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
              
              return (
                <Card 
                  key={index} 
                  className={`bg-[#0F0F0F] border-gray-700 p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg flex flex-col h-full relative cursor-pointer
                    ${pkg.recommended && !isSelected ? 'ring-2 ring-indigo-500' : ''}
                    ${isSelected ? 'ring-2 ring-emerald-500 bg-emerald-950/20 border-emerald-500' : ''}
                  `}
                  onClick={() => handleSupportSelect(pkg.id)}
                >
                  {pkg.recommended && !isSelected && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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

        {/* Combined Information Section - Compact Design */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-[#0F0F0F] border-emerald-500 p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - What Happens After Launch */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
                    <Clock className="text-indigo-500 mr-3" size={24} />
                    What Happens After Your 30-Day Launch Period?
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Users className="text-indigo-500 mr-2" size={18} />
                      Self-Managed Approach
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">Complete control over your automation systems</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">No ongoing monthly costs or commitments</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-0.5">⚠</span>
                        <span className="text-gray-400">Requires internal technical knowledge for maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-0.5">⚠</span>
                        <span className="text-gray-400">You handle troubleshooting and optimizations</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1A1A1A] p-4 rounded-lg border border-emerald-500">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Headphones className="text-emerald-500 mr-2" size={18} />
                      Supported Approach
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">Continuous expert support and optimization</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-300">Proactive monitoring and maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-0.5">💡</span>
                        <span className="text-gray-400">Monthly investment for peace of mind</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-0.5">💡</span>
                        <span className="text-gray-400">We handle all technical aspects for you</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Why Choose Our Flexible Approach */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
                    <Shield className="text-emerald-500 mr-3" size={24} />
                    Why Choose Our Flexible Approach
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700 text-center">
                      <Users className="text-emerald-500 mx-auto mb-2" size={24} />
                      <div className="text-white font-semibold mb-1">UK-Based Expert Team</div>
                      <div className="text-gray-400 text-sm">Dedicated British support team with deep automation expertise and same-timezone availability</div>
                    </div>
                    
                    <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700 text-center">
                      <Shield className="text-emerald-500 mx-auto mb-2" size={24} />
                      <div className="text-white font-semibold mb-1">30-Day Risk-Free Guarantee</div>
                      <div className="text-gray-400 text-sm">Complete satisfaction guarantee with full refund if systems don't deliver promised results</div>
                    </div>
                    
                    <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700 text-center">
                      <Check className="text-emerald-500 mx-auto mb-2" size={24} />
                      <div className="text-white font-semibold mb-1">No Long-Term Lock-ins</div>
                      <div className="text-gray-400 text-sm">Flexible contracts, cancel support anytime, keep your automation systems forever</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-lg p-4 border border-emerald-500/30">
                    <div className="text-center">
                      <h4 className="text-white font-bold mb-2">Start with a Free Strategy Consultation</h4>
                      <p className="text-gray-300 text-sm mb-3">No obligation consultation to discover your automation potential and discuss the best approach for your business</p>
                      <div className="flex justify-center space-x-2 text-xs text-gray-400">
                        <span>✓ Risk-free assessment</span>
                        <span>✓ Tailored recommendations</span>
                        <span>✓ Clear roadmap</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-gray-700">
              <Button 
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Schedule Your Free Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
