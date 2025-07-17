
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Workflow, Magnet, Users, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SectionBackground from '@/components/SectionBackground';

const Solutions = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and create seamless workflows that operate 24/7 without human intervention.",
      features: ["Task scheduling", "Data processing", "File management", "Report generation"],
      link: "/solutions/workflow-automation"
    },
    {
      icon: MessageSquare,
      title: "Communication Automation", 
      description: "Automate customer communications, follow-ups, and internal notifications across all your channels.",
      features: ["Email sequences", "SMS campaigns", "Slack integration", "Customer support"],
      link: "/solutions/communication-automation"
    },
    {
      icon: Magnet,
      title: "Lead Generation",
      description: "Automate lead capture, qualification, and nurturing processes to transform prospects into customers seamlessly.",
      features: ["Automated lead scoring and qualification", "Multi-channel lead capture systems", "Intelligent lead nurturing workflows", "CRM synchronisation and data enrichment"],
      link: "/solutions/lead-generation"
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Connect and synchronize your customer data across all platforms for a unified business view.",
      features: ["Lead management", "Customer tracking", "Sales automation", "Pipeline optimization"],
      link: "/solutions/crm-integration"
    },
    {
      icon: Calendar,
      title: "Scheduling & Booking",
      description: "Automate appointment scheduling, calendar management, and booking confirmations.",
      features: ["Calendar sync", "Automated reminders", "Booking forms", "Resource management"],
      link: "/solutions/scheduling-booking"
    },
    {
      icon: Zap,
      title: "Custom Integrations",
      description: "Build bespoke connections between your tools and create custom automation solutions.",
      features: ["API integrations", "Custom workflows", "Third-party connections", "Scalable solutions"],
      link: "/solutions/custom-integrations"
    }
  ];

  return (
    <SectionBackground id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automation Solutions That Drive Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From simple task automation to complex business process optimization, we deliver solutions that transform how you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-400 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 group flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link to={solution.link}>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

export default Solutions;
