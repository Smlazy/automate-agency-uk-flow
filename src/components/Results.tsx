
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Results = () => {
  const caseStudies = [
    {
      industry: "Local Recruitment Agency - Manchester",
      challenge: "Manually screening 200+ CVs weekly",
      solution: "AI-powered candidate scoring and automated initial screening", 
      results: "85% reduction in screening time, 40% increase in successful placements",
      quote: "The automation system transformed how we work - we're placing more candidates with less effort",
      author: "Sarah M., Recruitment Director"
    },
    {
      industry: "Property Agency - Birmingham", 
      challenge: "Losing leads due to slow response times",
      solution: "Automated lead nurturing and instant inquiry responses",
      results: "300% increase in lead conversion, significantly improved sales pipeline", 
      quote: "The instant response system captures leads we would have lost before",
      author: "James H., Property Manager"
    },
    {
      industry: "Digital Marketing Firm - London",
      challenge: "Spending 20+ hours weekly on client reports",
      solution: "Automated reporting dashboard and client communication",
      results: "90% reduction in reporting time, better client satisfaction",
      quote: "Now our team focuses on strategy instead of manual reporting", 
      author: "Lisa C., Marketing Agency Owner"
    }
  ];

  const benchmarks = [
    { label: "Typical time savings", value: "20-40 hours per week" },
    { label: "Expected ROI", value: "200-400% within first year" },
    { label: "Implementation success", value: "95% of automations go live successfully" },
    { label: "Client satisfaction", value: "Consistently high ratings across projects" }
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
            Proven Automation Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real UK agencies who transformed their operations with our automation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-[#1A1A1A] border-gray-700 p-6 hover:border-[#8B1538] transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[#8B1538] mb-2">{study.industry}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Challenge: </span>
                    <span className="text-gray-300">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Solution: </span>
                    <span className="text-gray-300">{study.solution}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Results: </span>
                    <span className="text-white font-medium">{study.results}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0F0F0F] p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300 italic mb-2">"{study.quote}"</p>
                <p className="text-[#8B1538] text-sm font-medium">— {study.author}</p>
              </div>
            </Card>
          ))}
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
            <div className="text-gray-300">Faster growth with automation</div>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 text-center">
            <div className="text-4xl font-bold text-[#8B1538] mb-2">87%</div>
            <div className="text-gray-300">Business leaders increasing automation investment in 2025</div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every automation project we deliver is designed for measurable impact. 
            See how your agency can achieve similar results.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-3 text-lg"
          >
            Get Your Success Story Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
