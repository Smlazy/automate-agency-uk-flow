
import { useState } from 'react';
import { Check, Star, Clock, Users, Headphones, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState('growth');
  const [selectedSupport, setSelectedSupport] = useState<string | null>(null);

  const packages = [
    {
      id: 'startup',
      name: 'Startup Launch',
      price: '£2,500',
      description: 'Perfect for new businesses ready to automate their first processes',
      features: [
        '1-2 Core Automation Processes',
        'Basic Integration Setup',
        'Standard Documentation',
        '30-Day Launch Period',
        'Email Support During Setup'
      ],
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth Accelerator',
      price: '£4,500',
      description: 'Ideal for growing businesses wanting comprehensive automation',
      features: [
        '3-5 Advanced Automation Processes',
        'Multi-Platform Integration',
        'Custom Workflow Design',
        '30-Day Launch Period',
        'Priority Support & Training',
        'Performance Analytics Setup'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Scale',
      price: '£7,500',
      description: 'For established businesses requiring complex automation ecosystems',
      features: [
        '6+ Complex Automation Systems',
        'Enterprise-Grade Integrations',
        'Custom API Development',
        '30-Day Launch Period',
        'Dedicated Success Manager',
        'Advanced Analytics & Reporting',
        'Staff Training Program'
      ],
      popular: false
    }
  ];

  const supportPackages = [
    {
      id: 'essential',
      name: 'Essential Support',
      price: '£200/month',
      description: 'Basic ongoing support for your automation systems',
      features: [
        'Email Support (24h response)',
        'Monthly System Health Check',
        'Basic Troubleshooting',
        'Documentation Updates'
      ],
      icon: <Headphones className="h-6 w-6" />
    },
    {
      id: 'professional',
      name: 'Professional Support',
      price: '£400/month',
      description: 'Enhanced support with proactive monitoring',
      features: [
        'Priority Email & Phone Support',
        'Weekly Performance Reviews',
        'Proactive Issue Resolution',
        'Minor Workflow Adjustments',
        'Monthly Strategy Calls'
      ],
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 'premium',
      name: 'Premium Support',
      price: '£600/month',
      description: 'Comprehensive support with continuous optimization',
      features: [
        'White-Glove Support Experience',
        'Daily Monitoring & Alerts',
        'Continuous Optimization',
        'New Feature Development',
        'Dedicated Account Manager',
        'Emergency Response (4h)'
      ],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const handleSupportSelection = (supportId: string) => {
    setSelectedSupport(selectedSupport === supportId ? null : supportId);
  };

  return (
    <section id="pricing" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your automation package and ongoing support level. No hidden fees, no long-term contracts.
          </p>
        </div>

        {/* Setup Packages */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Automation Setup Packages</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative cursor-pointer transition-all duration-300 bg-[#1A1A1A] border-gray-700 hover:border-emerald-500 ${
                  selectedPackage === pkg.id 
                    ? 'scale-105 border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                    : pkg.popular 
                      ? 'scale-105 border-emerald-500 shadow-xl shadow-emerald-500/10' 
                      : ''
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && selectedPackage !== pkg.id && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">{pkg.price}</div>
                  <p className="text-gray-400 text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Ongoing Support Packages</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportPackages.map((support) => (
              <Card
                key={support.id}
                className={`cursor-pointer transition-all duration-300 bg-[#1A1A1A] border-gray-700 hover:border-indigo-500 ${
                  selectedSupport === support.id 
                    ? 'border-indigo-500 bg-indigo-500/5 shadow-lg shadow-indigo-500/20' 
                    : ''
                }`}
                onClick={() => handleSupportSelection(support.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3 text-indigo-400">
                    {support.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">{support.name}</CardTitle>
                  <div className="text-2xl font-bold text-indigo-500 mb-2">{support.price}</div>
                  <p className="text-gray-400 text-sm">{support.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {support.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={selectedSupport === support.id ? "default" : "outline"}
                    className={selectedSupport === support.id 
                      ? "w-full bg-indigo-600 hover:bg-indigo-700 text-white" 
                      : "w-full border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
                    }
                  >
                    {selectedSupport === support.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Post-Launch Information - Combined and Compact */}
        <div className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What Happens After 30 Days */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-bold text-white">What Happens After 30 Days?</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><strong className="text-white">Your systems are live and running.</strong> The 30-day launch period ensures everything is properly configured, tested, and optimized for your business.</p>
                <p><strong className="text-white">Choose your ongoing support level</strong> based on your needs. Our support packages ensure your automation continues to deliver results with proactive monitoring and optimization.</p>
                <p><strong className="text-white">No long-term contracts.</strong> You can adjust or cancel your support package anytime with 30 days' notice.</p>
              </div>
            </div>

            {/* Why Choose Our Flexible Approach */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-indigo-500" />
                <h3 className="text-xl font-bold text-white">Why Choose Our Flexible Approach?</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><strong className="text-white">Pay for what you need.</strong> Start with essential automation and scale up as your business grows. No over-investment in features you don't need yet.</p>
                <p><strong className="text-white">Proven 30-day launch process.</strong> Our structured approach ensures successful deployment every time, with dedicated support throughout the critical launch phase.</p>
                <p><strong className="text-white">Ongoing optimization.</strong> Technology and business needs evolve. Our support packages ensure your automation evolves with you, maintaining peak performance.</p>
                <p><strong className="text-white">UK-based expertise.</strong> Work with automation specialists who understand UK businesses, regulations, and market dynamics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
