
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Search, Cog, TestTube, Rocket, HeadphonesIcon } from "lucide-react";
import SectionBackground from '@/components/SectionBackground';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Discovery & Consultation",
      description: "We start with a comprehensive analysis of your current processes, identifying automation opportunities and defining clear objectives.",
      duration: "1-2 days"
    },
    {
      icon: Search,
      number: "02", 
      title: "Strategy & Planning",
      description: "Our experts design a custom automation roadmap tailored to your business needs, priorities, and technical requirements.",
      duration: "2-3 days"
    },
    {
      icon: Cog,
      number: "03",
      title: "Development & Integration",
      description: "We build and integrate your automation solutions using industry-leading tools and best practices for maximum reliability.",
      duration: "1-3 weeks"
    },
    {
      icon: TestTube,
      number: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing ensures your automations work flawlessly before deployment, with fine-tuning for optimal performance.",
      duration: "3-5 days"
    },
    {
      icon: Rocket,
      number: "05",
      title: "Launch & Training",
      description: "We deploy your solutions and provide comprehensive training to ensure your team can leverage the new automations effectively.",
      duration: "1-2 days"
    },
    {
      icon: HeadphonesIcon,
      number: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and optimization ensure your automations continue delivering value as your business grows.",
      duration: "Ongoing"
    }
  ];

  return (
    <SectionBackground id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Proven Automation Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial consultation to ongoing optimization, we follow a structured approach that guarantees results and maximizes your ROI.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="text-white" size={28} />
                      </div>
                      <div className="text-2xl font-bold text-emerald-400 text-center">{step.number}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">
                        <span className="font-medium">Timeline: {step.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-white font-medium">Ready to automate your business processes?</p>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Process;
