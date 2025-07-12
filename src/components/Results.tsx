
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Results = () => {
  const benchmarks = [
    { label: "Typical time savings", value: "20-40 hours per week" },
    { label: "Expected ROI", value: "200-400% within first year" },
    { label: "Implementation success", value: "95% of automations go live successfully" },
    { label: "Industry adoption", value: "Growing rapidly across UK businesses" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry Automation Insights & Benchmarks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the potential impact of automation on UK businesses with industry-leading benchmarks and insights
          </p>
        </div>

        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Industry Benchmarks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benchmarks.map((benchmark, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#8B1538] mb-2">{benchmark.value}</div>
                <div className="text-gray-300 text-sm">{benchmark.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-[#8B1538] mb-2">£47B</div>
            <div className="text-gray-300">UK businesses waste annually on manual processes</div>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-[#8B1538] mb-2">40%</div>
            <div className="text-gray-300">Faster growth potential with automation</div>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-[#8B1538] mb-2">87%</div>
            <div className="text-gray-300">Business leaders increasing automation investment in 2025</div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business Operations?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every automation project we deliver is designed for measurable impact. 
            Discover how your business can benefit from intelligent automation.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-3 text-lg"
          >
            Start Your Automation Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
