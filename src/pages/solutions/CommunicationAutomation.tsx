import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, MessageSquare, Clock, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function CommunicationAutomation() {
  const tools = [
    {
      name: "Mailchimp",
      logo: "https://img.icons8.com/color/96/mailchimp.png",
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
    },
    {
      name: "ConvertKit",
      logo: "https://img.icons8.com/color/96/convertkit.png",
      category: "Email Marketing"
    }
  ];

  const benefits = [
    {
      title: "Instant Response Times",
      description: "Respond to enquiries and requests within minutes, not hours",
      impact: "Improve customer satisfaction scores"
    },
    {
      title: "Personalised at Scale",
      description: "Deliver relevant, timely messages to thousands of contacts",
      impact: "Increase engagement rates significantly"
    },
    {
      title: "Multi-Channel Coordination",
      description: "Orchestrate consistent messaging across email, SMS, chat, and social",
      impact: "Create seamless customer experiences"
    },
    {
      title: "Smart Follow-Up Sequences", 
      description: "Nurture leads and customers with intelligent, behaviour-triggered communications",
      impact: "Boost conversion rates and retention"
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

  const processSteps = [
    {
      step: '1',
      title: 'Channel Assessment',
      description: 'Identify all communication touchpoints and current processes across your business'
    },
    {
      step: '2',
      title: 'Message Mapping',
      description: 'Design personalised communication flows for each customer journey stage'
    },
    {
      step: '3',
      title: 'Platform Integration',
      description: 'Connect email, SMS, chat, and social channels seamlessly'
    },
    {
      step: '4',
      title: 'Smart Triggers',
      description: 'Set up intelligent response systems and automated sequences'
    }
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description: "Instantly acknowledge enquiries, route tickets, and provide relevant information based on customer history.",
      processes: ["Automatic ticket routing", "FAQ responses", "Escalation triggers"]
    },
    {
      title: "Marketing Nurture Sequences",
      description: "Guide prospects through tailored email journeys based on their interests and engagement level.",
      processes: ["Welcome sequences", "Abandoned cart recovery", "Re-engagement campaigns"]
    },
    {
      title: "Event-Triggered Communications",
      description: "Send personalised messages based on customer actions, milestones, or important dates.",
      processes: ["Birthday messages", "Purchase confirmations", "Renewal reminders"]
    }
  ];

  const navigateToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Communication Automation
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Never Miss a Customer Touchpoint Again
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Automate personalised communications across all channels while maintaining the human touch that builds lasting customer relationships and drives business growth.
            </p>
            <Button 
              onClick={navigateToContact}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </SectionBackground>

      {/* Tools Integration Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Tools We Integrate With
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Connect all your communication channels
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-12 h-12 mb-2 transition-all duration-300" 
                    style={{
                      filter: 'sepia(100%) saturate(150%) hue-rotate(180deg) brightness(0.9) contrast(1.1)',
                      opacity: 0.8
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'none';
                      e.target.style.opacity = '1';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'sepia(100%) saturate(150%) hue-rotate(180deg) brightness(0.9) contrast(1.1)';
                      e.target.style.opacity = '0.8';
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  <p className="text-gray-300 text-sm font-medium text-center">{tool.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-400 font-medium">
              And 500+ more communication platforms
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* What You'll Achieve Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What You'll Achieve
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white/10 border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <h3 className="text-emerald-400 font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">{benefit.description}</p>
                  <p className="text-green-400 font-medium text-sm">{benefit.impact}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* How It Works Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Use Cases Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Common Use Cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-slate-900/80 border-white/20 p-6 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <h3 className="text-emerald-400 font-bold text-lg mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.processes.map((process, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                        {process}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Communications?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Transform how you connect with customers across every touchpoint
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={navigateToContact}
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Check className="text-emerald-500 mr-2" size={16} />
                <span className="text-sm">UK-Based Team</span>
              </div>
              <div className="flex items-center">
                <Check className="text-emerald-500 mr-2" size={16} />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
              <div className="flex items-center">
                <Check className="text-emerald-500 mr-2" size={16} />
                <span className="text-sm">No Long-Term Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      <Footer />
    </div>
  );
}
