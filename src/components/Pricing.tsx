
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Automation Starter",
      price: "£497",
      icon: Zap,
      description: "Perfect for testing automation impact",
      features: [
        "Free automation audit (£500 value)",
        "One high-impact workflow automation",
        "Basic integration with existing tools",
        "2 weeks delivery + 1 month support",
        "Save 5+ hours/week"
      ],
      popular: false,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Growth Automation",
      price: "£2,997",
      icon: Star,
      description: "Most popular for established agencies",
      features: [
        "Comprehensive automation audit",
        "3-5 custom workflow automations",
        "Full CRM/tool integrations",
        "Staff training and documentation",
        "4-6 weeks delivery + 3 months support",
        "3x return within 90 days"
      ],
      popular: true,
      color: "from-[#8B1538] to-[#7A1230]"
    },
    {
      name: "Enterprise Automation",
      price: "£7,997",
      icon: Crown,
      description: "Complete automation transformation",
      features: [
        "Full business process automation",
        "8-12 advanced workflow systems",
        "Custom dashboards and reporting",
        "Priority support and optimisation",
        "8-10 weeks delivery + 6 months support",
        "40%+ efficiency gain"
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
            Choose the perfect automation solution to transform your agency's operations
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`bg-[#0F0F0F] border-gray-700 p-8 relative transition-all duration-300 hover:border-[#8B1538] ${pkg.popular ? 'ring-2 ring-[#8B1538]' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#8B1538] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6`}>
                <pkg.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold text-[#8B1538] mb-4">{pkg.price}</div>
              <p className="text-gray-300 mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToContact}
                className={`w-full ${pkg.popular ? 'bg-[#8B1538] hover:bg-[#7A1230]' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Monthly Partnership Option */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-[#0F0F0F] border-[#8B1538] p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Automation Partnership</h3>
              <div className="text-3xl font-bold text-[#8B1538] mb-4">£897-£2,497/month</div>
              <p className="text-gray-300 mb-6">Ongoing optimisation and support for sustained growth</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-white font-semibold mb-2">Monthly performance reviews</div>
                  <div className="text-gray-400 text-sm">Track and optimise results</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Continuous workflow optimisation</div>
                  <div className="text-gray-400 text-sm">Always improving efficiency</div>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">Priority technical support</div>
                  <div className="text-gray-400 text-sm">Direct access to our team</div>
                </div>
              </div>

              <Button 
                onClick={scrollToContact}
                className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-3"
              >
                Discuss Partnership
              </Button>
            </div>
          </Card>
        </div>

        {/* Special Offers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-[#8B1538] to-[#7A1230] p-6 text-white">
            <h3 className="text-xl font-bold mb-3">🎁 New Client Special</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>• First automation project at 50% off</li>
              <li>• Free 3-month optimisation period</li>
              <li>• Bonus automation training session</li>
            </ul>
            <div className="text-sm italic">Valid for first 10 clients this quarter</div>
          </Card>

          <Card className="bg-[#0F0F0F] border-gray-700 p-6">
            <h3 className="text-xl font-bold text-white mb-3">💡 Risk-Free Trial</h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• 30-day money-back option</li>
              <li>• No setup fees for first project</li>
              <li>• Free audit regardless of decision</li>
            </ul>
            <div className="text-sm italic text-gray-400">See results before you fully commit</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
