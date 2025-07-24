import { ArrowRight, CheckCircle, MessageSquare, Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

const CommunicationAutomation = () => {
  

  const tools = [
    {
      name: "Mailchimp",
      logo: "https://img.icons8.com/color/96/mailchimp.png",
      category: "Email Marketing"
    },
    {
      name: "ConvertKit", 
      logo: "https://img.icons8.com/color/96/convertkit.png",
      category: "Email Marketing"
    },
    {
      name: "HubSpot",
      logo: "https://img.icons8.com/color/96/hubspot.png",
      category: "CRM"
    },
    {
      name: "Intercom",
      logo: "https://img.icons8.com/color/96/intercom.png", 
      category: "Customer Support"
    },
    {
      name: "Zendesk",
      logo: "https://img.icons8.com/color/96/zendesk.png",
      category: "Customer Support"
    },
    {
      name: "Microsoft Teams",
      logo: "https://img.icons8.com/fluency/96/microsoft-teams-2019.png",
      category: "Internal Communication"
    },
    {
      name: "WhatsApp Business",
      logo: "https://img.icons8.com/color/96/whatsapp--v1.png",
      category: "Messaging"
    },
    {
      name: "Twilio",
      logo: "https://img.icons8.com/color/96/twilio.png",
      category: "SMS"
    },
    {
      name: "Calendly",
      logo: "https://img.icons8.com/color/96/calendly.png",
      category: "Scheduling"
    },
    {
      name: "Gmail",
      logo: "https://img.icons8.com/fluency/96/gmail-new.png",
      category: "Email"
    },
    {
      name: "Outlook",
      logo: "https://img.icons8.com/fluency/96/microsoft-outlook-2019.png",
      category: "Email"
    },
    {
      name: "ActiveCampaign",
      logo: "https://img.icons8.com/color/96/activecampaign.png",
      category: "Marketing Automation"
    }
  ];

  const benefits = [
    {
      title: "Instant Response Times",
      description: "Respond to enquiries and requests within minutes, not hours",
      impact: "Improve customer satisfaction scores by 40%"
    },
    {
      title: "Personalised at Scale",
      description: "Deliver relevant, timely messages to thousands of contacts automatically",
      impact: "Increase engagement rates by up to 300%"
    },
    {
      title: "Multi-Channel Coordination",
      description: "Orchestrate consistent messaging across email, SMS, chat, and social platforms",
      impact: "Create seamless customer experiences"
    },
    {
      title: "Smart Follow-Up Sequences", 
      description: "Nurture leads and customers with intelligent, behaviour-triggered communications",
      impact: "Boost conversion rates and customer retention"
    },
    {
      title: "Reduced Communication Workload",
      description: "Automate routine communications while maintaining personal touch",
      impact: "Free up 60-70% of manual communication tasks"
    },
    {
      title: "Never Miss Important Messages",
      description: "Ensure every customer interaction is captured and responded to appropriately",
      impact: "Eliminate communication gaps and lost opportunities"
    }
  ];

  const steps = [
    {
      icon: Zap,
      title: "Communication Audit",
      description: "Analyse your current communication processes to identify automation opportunities and efficiency gaps."
    },
    {
      icon: BarChart3,
      title: "Workflow Design",
      description: "Create intelligent communication sequences with personalisation and behaviour-based triggers."
    },
    {
      icon: Users,
      title: "Channel Integration",
      description: "Connect all your communication channels into unified, automated workflows."
    },
    {
      icon: CheckCircle,
      title: "Launch & Optimise",
      description: "Deploy automated communications and continuously refine based on performance metrics."
    }
  ];

  const useCases = [
    {
      title: "Property Management Communication",
      description: "Automate tenant communications, maintenance requests, and property updates across multiple channels.",
      processes: ["Tenant onboarding sequences", "Maintenance request automation", "Rent payment reminders"]
    },
    {
      title: "Education Provider Updates",
      description: "Streamline communication with students, parents, and staff through automated messaging systems.",
      processes: ["Student progress updates", "Parent communication workflows", "Staff notifications"]
    },
    {
      title: "Professional Services Follow-up",
      description: "Nurture client relationships through automated check-ins, project updates, and service reminders.",
      processes: ["Client onboarding sequences", "Project milestone updates", "Service renewal campaigns"]
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
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Communication <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Never Miss a Customer Touchpoint Again
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Automate personalised communications across all channels while maintaining the human touch that builds lasting customer relationships across all industries.
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
            <p className="text-gray-400">Connect your communication tools into powerful automated workflows</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-8">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/10 border border-white/20 rounded-lg transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:border-emerald-400/40">
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="w-12 h-12 mb-2 transition-all duration-300"
                  style={{
                    filter: 'sepia(100%) saturate(150%) hue-rotate(180deg) brightness(0.9) contrast(1.1)',
                    opacity: 0.8
                  }}
                  onMouseEnter={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.filter = 'none';
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.filter = 'sepia(100%) saturate(150%) hue-rotate(180deg) brightness(0.9) contrast(1.1)';
                    img.style.opacity = '0.8';
                    img.style.transform = 'scale(1)';
                  }}
                />
                <span className="text-sm font-semibold text-gray-300 text-center">{tool.name}</span>
                <span className="text-xs text-gray-500 mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400 text-lg">And 500+ more communication tools</p>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What You'll Achieve
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-emerald-400 mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 mb-3 leading-relaxed">{benefit.description}</p>
                    <p className="text-green-400 font-medium text-sm">{benefit.impact}</p>
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

      {/* Use Cases Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Common Use Cases
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-slate-900/80 border-white/20 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-emerald-400 mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <ul className="space-y-1">
                      {useCase.processes.map((process, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                          {process}
                        </li>
                      ))}
                    </ul>
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
                Ready to Automate Your Communications?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert communication automation guidance tailored to your specific business needs.
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

export default CommunicationAutomation;
