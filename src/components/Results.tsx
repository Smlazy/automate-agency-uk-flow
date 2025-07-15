
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Results = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="results" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Results from Our Automation Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our clients have transformed their operations with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">15-25hrs</div>
            <div className="text-gray-300">Weekly time savings for most clients</div>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">30 Days</div>
            <div className="text-gray-300">Average time to see operational results</div>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">95%</div>
            <div className="text-gray-300">Client satisfaction with automation outcomes</div>
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
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
          >
            Start Your Automation Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
