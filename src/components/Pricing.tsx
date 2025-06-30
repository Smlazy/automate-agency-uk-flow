
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Automation Starter",
      price: "£497", 
      subtitle: "Perfect for testing automation impact",
      features: [
        "Free automation audit (£500 value)",
        "One high-impact workflow automation",
        "Basic integration with existing tools", 
        "2 weeks delivery + 1 month support",
        "Save 5+ hours/week or full refund"
      ],
      note: "Great for first-time automation clients",
      popular: false,
      cta: "Start Small"
    },
    {
      name: "Growth Automation",
      price: "£2,997",
      subtitle: "Most popular for established agencies", 
      features: [
        "Comprehensive automation audit",
        "3-5 custom workflow automations",
        "Full CRM/tool integrations",
        "Staff training and documentation",
        "4-6 weeks delivery + 3 months support",
        "3x ROI within 90 days guaranteed"
      ],
      note: "Ideal for agencies ready to scale",
      popular: true,
      cta: "Scale Now"
    },
    {
      name: "Enterprise Automation", 
      price: "£7,997",
      subtitle: "Complete automation transformation",
      features: [
        "Full business process automation",
        "8-12 advanced workflow systems", 
        "Custom dashboards and reporting",
        "Priority support and optimization",
        "8-10 weeks delivery + 6 months support",
        "40%+ efficiency gain or money back"
      ],
      note: "For agencies serious about market dominance",
      popular: false,
      cta: "Transform Business"
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
            From first automation to complete transformation - we have the right solution for your growth stage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative p-8 ${pkg.popular ? 'bg-[#0F0F0F] border-[#8B1538] border-2' : 'bg-[#0F0F0F] border-gray-700'} hover:border-[#8B1538] transition-all duration-300`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#8B1538] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-[#8B1538] mb-2">{pkg.price}</div>
                <p className="text-gray-300 italic">{pkg.subtitle}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-[#8B1538] mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#1A1A1A] p-4 rounded-lg mb-6">
                <p className="text-gray-400 text-sm italic">"{pkg.note}"</p>
              </div>

              <Button 
                onClick={scrollToContact}
                className={`w-full ${pkg.popular ? 'bg-[#8B1538] hover:bg-[#7A1230]' : 'bg-gray-700 hover:bg-gray-600'} text-white py-3`}
              >
                {pkg.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Ongoing Partnership */}
        <div className="bg-[#0F0F0F] p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Automation Partnership</h3>
            <div className="text-3xl font-bold text-[#8B1538] mb-2">£897-£2,497/month</div>
            <p className="text-gray-300 italic">Your dedicated automation team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="text-[#8B1538] mr-3" size={16} />
                  Monthly performance reviews
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="text-[#8B1538] mr-3" size={16} />
                  Continuous workflow optimization
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="text-[#8B1538] mr-3" size={16} />
                  New automation implementations
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="text-[#8B1538] mr-3" size={16} />
                  Priority technical support
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <Check className="text-[#8B1538] mr-3" size={16} />
                  Strategy calls and planning sessions
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support Levels:</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">
                  <span className="text-[#8B1538] font-semibold">Essential (£897):</span> 10 hours monthly support
                </li>
                <li className="text-gray-300 text-sm">
                  <span className="text-[#8B1538] font-semibold">Growth (£1,497):</span> 20 hours monthly support
                </li>
                <li className="text-gray-300 text-sm">
                  <span className="text-[#8B1538] font-semibold">Scale (£2,497):</span> 30 hours monthly support
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button 
              onClick={scrollToContact}
              className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-3"
            >
              Discuss Partnership Options
            </Button>
          </div>
        </div>

        {/* Special Offers */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#8B1538] to-[#7A1230] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-3">🎁 New Client Special</h3>
            <ul className="space-y-2 text-white text-sm mb-4">
              <li>• First automation project at 50% off</li>
              <li>• Free 3-month optimization period</li>
              <li>• Bonus automation training session</li>
            </ul>
            <p className="text-sm text-gray-200 italic">Valid for first 10 clients this quarter</p>
          </div>
          
          <div className="bg-[#0F0F0F] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">💡 Risk-Free Trial</h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• 30-day money-back guarantee</li>
              <li>• No setup fees for first project</li>
              <li>• Free audit regardless of decision</li>
            </ul>
            <p className="text-sm text-gray-400 italic">See results before you fully commit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
