
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Workflow, BarChart3, Users, MessageSquare, Calendar } from "lucide-react";
import SectionBackground from '@/components/SectionBackground';

const Solutions = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and create seamless workflows that operate 24/7 without human intervention.",
      features: ["Task scheduling", "Data processing", "File management", "Report generation"]
    },
    {
      icon: MessageSquare,
      title: "Communication Automation", 
      description: "Automate customer communications, follow-ups, and internal notifications across all your channels.",
      features: ["Email sequences", "SMS campaigns", "Slack integration", "Customer support"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Transform raw data into actionable insights with automated reporting and real-time dashboards.",
      features: ["Real-time dashboards", "Automated reports", "Data synchronization", "Performance tracking"]
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Connect and synchronize your customer data across all platforms for a unified business view.",
      features: ["Lead management", "Customer tracking", "Sales automation", "Pipeline optimization"]
    },
    {
      icon: Calendar,
      title: "Scheduling & Booking",
      description: "Automate appointment scheduling, calendar management, and booking confirmations.",
      features: ["Calendar sync", "Automated reminders", "Booking forms", "Resource management"]
    },
    {
      icon: Zap,
      title: "Custom Integrations",
      description: "Build bespoke connections between your tools and create custom automation solutions.",
      features: ["API integrations", "Custom workflows", "Third-party connections", "Scalable solutions"]
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
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

export default Solutions;
