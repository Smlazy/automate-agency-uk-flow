
import { ArrowRight, CheckCircle, Zap, Clock, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

const WorkflowAutomation = () => {
  const tools = [
    "Zapier", "Microsoft 365", "Google Workspace", "Slack", "Trello", 
    "Asana", "Monday.com", "Notion", "Airtable", "Dropbox"
  ];

  const achievements = [
    "Eliminate 60-80% of manual administrative tasks",
    "Reduce processing time from hours to minutes", 
    "Ensure 100% consistency in repetitive processes",
    "Free up staff time for strategic work",
    "Reduce human error by 95%"
  ];

  const steps = [
    {
      icon: BarChart3,
      title: "Process Mapping",
      description: "We analyse your current workflows to identify automation opportunities"
    },
    {
      icon: Zap,
      title: "Automation Design", 
      description: "Create intelligent triggers and actions that work seamlessly"
    },
    {
      icon: Users,
      title: "Integration Setup",
      description: "Connect all your existing tools into unified workflows"
    },
    {
      icon: CheckCircle,
      title: "Testing & Launch",
      description: "Ensure flawless operation before going live"
    }
  ];

  const examples = [
    {
      industry: "SaaS Companies",
      description: "Automate user onboarding, feature adoption tracking, and renewal processes"
    },
    {
      industry: "Agencies", 
      description: "Streamline client onboarding, project management, and reporting workflows"
    },
    {
      industry: "Service Businesses",
      description: "Automate appointment confirmations, follow-ups, and invoice generation"
    }
  ];

  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Workflow <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Eliminate Manual Tasks, Maximise Efficiency
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Transform repetitive processes into intelligent, automated workflows that run 24/7 without human intervention.
            </p>
            <Button
              onClick={navigateToContact}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Book Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </SectionBackground>

      {/* Tools Integration Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tools We Integrate With</h2>
            <p className="text-gray-400">Connect your existing tools into powerful automated workflows</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-3 mx-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-semibold text-sm">{tool}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400 text-lg">And 500+ more</p>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What You'll Achieve
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start">
                    <CheckCircle className="text-emerald-400 mr-4 mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-300">{achievement}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Examples Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Industry Examples
            </h2>
            
            <div className="space-y-6">
              {examples.map((example, index) => (
                <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-emerald-400 mb-3">{example.industry}</h3>
                    <p className="text-gray-300">{example.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert automation guidance tailored to your specific business needs and processes.
              </p>
              <Button
                onClick={navigateToContact}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Book Your Free Consultation
              </Button>
              <div className="mt-6 text-white/80 text-sm">
                ✓ 30-minute strategy session ✓ Custom automation recommendations ✓ ROI projections
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkflowAutomation;
