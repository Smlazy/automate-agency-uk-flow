
import { Card } from '@/components/ui/card';
import { Search, FileText, Settings, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Automation Audit",
      timeline: "Step 1",
      description: "We analyse your current workflows to identify the highest-ROI automation opportunities",
      details: [
        "Map current workflows and identify bottlenecks",
        "Calculate time spent on repetitive tasks", 
        "Identify highest-ROI automation opportunities",
        "Create custom automation roadmap"
      ]
    },
    {
      icon: FileText,
      title: "Solution Design", 
      timeline: "Step 2",
      description: "Custom workflow design tailored to your specific business needs and existing tools",
      details: [
        "Design workflows specific to your business",
        "Create mockups and process flows",
        "Get stakeholder approval and feedback", 
        "Finalise technical requirements"
      ]
    },
    {
      icon: Settings,
      title: "Build & Test",
      timeline: "Step 3", 
      description: "Development and rigorous testing of your automation systems with full integration",
      details: [
        "Develop custom automation solutions",
        "Integrate with existing tools and systems",
        "Comprehensive testing and refinement",
        "Staff training and documentation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Launch & Optimise",
      timeline: "Step 4",
      description: "Go-live support with ongoing optimisation to maximise your automation ROI",
      details: [
        "Go-live support and monitoring", 
        "Performance tracking and optimisation",
        "Ongoing maintenance and updates",
        "Monthly strategy and improvement calls"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Manual Processes to Automated Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step framework transforms business operations with measurable results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-indigo-500 z-10 transform translate-x-4"></div>
                )}
                
                <Card className="bg-[#1A1A1A] border-gray-700 p-6 h-full hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="text-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <step.icon className="text-white" size={28} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="text-sm text-emerald-500 font-semibold mb-2">{step.timeline}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>

                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <div className="text-gray-300">{detail}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#1A1A1A] p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Why Our Process Works</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">95%</div>
                  <div className="text-gray-300">Implementation Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">30 Days</div>
                  <div className="text-gray-300">Average Time to ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
