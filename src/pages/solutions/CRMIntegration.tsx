
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Users, Clock, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function CRMIntegration() {
  const tools = [
    {
      name: "Salesforce",
      logo: "https://img.icons8.com/color/96/salesforce.png",
      category: "CRM Platform"
    },
    {
      name: "HubSpot",
      logo: "https://img.icons8.com/color/96/hubspot.png",
      category: "CRM Platform"
    },
    {
      name: "Pipedrive",
      logo: "https://img.icons8.com/color/96/pipedrive.png",
      category: "CRM Platform"
    },
    {
      name: "Zoho CRM",
      logo: "https://img.icons8.com/color/96/zoho-crm.png",
      category: "CRM Platform"
    },
    {
      name: "ActiveCampaign",
      logo: "https://img.icons8.com/color/96/activecampaign.png",
      category: "Marketing CRM"
    },
    {
      name: "Mailchimp",
      logo: "https://img.icons8.com/color/96/mailchimp.png",
      category: "Email Marketing"
    },
    {
      name: "Google Analytics",
      logo: "https://img.icons8.com/color/96/google-analytics.png",
      category: "Analytics"
    },
    {
      name: "Stripe",
      logo: "https://img.icons8.com/color/96/stripe.png",
      category: "Payments"
    },
    {
      name: "QuickBooks",
      logo: "https://img.icons8.com/color/96/quickbooks.png",
      category: "Accounting"
    },
    {
      name: "Calendly",
      logo: "https://img.icons8.com/color/96/calendly.png",
      category: "Scheduling"
    },
    {
      name: "Zoom",
      logo: "https://img.icons8.com/color/96/zoom.png",
      category: "Video Conferencing"
    },
    {
      name: "Microsoft Teams",
      logo: "https://img.icons8.com/color/96/microsoft-teams.png",
      category: "Communication"
    }
  ];

  const benefits = [
    { 
      title: '360-Degree Customer View', 
      description: 'Unify all customer interactions and data across every touchpoint for complete visibility',
      impact: 'Make informed decisions with complete customer context'
    },
    { 
      title: 'Eliminate Data Silos', 
      description: 'Break down barriers between systems and create seamless data flow across your entire tech stack',
      impact: 'End duplicate data entry and inconsistent information'
    },
    { 
      title: 'Boost Sales Productivity', 
      description: 'Automate routine tasks and provide sales teams with the insights they need to close more deals',
      impact: 'Increase sales team efficiency by 40-60%'
    },
    { 
      title: 'Improve Lead Conversion', 
      description: 'Track and nurture leads more effectively with automated scoring and follow-up processes',
      impact: 'Convert more prospects into paying customers'
    },
    { 
      title: 'Streamlined Reporting', 
      description: 'Generate comprehensive reports across all systems without manual data compilation',
      impact: 'Get real-time insights for better decision making'
    },
    { 
      title: 'Enhanced Customer Service', 
      description: 'Provide support teams with complete customer history and interaction timeline',
      impact: 'Resolve issues faster and improve satisfaction'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Data Audit',
      description: 'Map all customer touchpoints and data sources across your entire business ecosystem'
    },
    {
      step: '2',
      title: 'Integration Architecture',
      description: 'Design seamless data flow and connection strategies between all your systems'
    },
    {
      step: '3',
      title: 'Automation Rules',
      description: 'Set up intelligent triggers for automatic updates, notifications, and actions'
    },
    {
      step: '4',
      title: 'Unified Reporting',
      description: 'Create comprehensive dashboards that provide insights across all integrated platforms'
    }
  ];

  const useCases = [
    {
      title: 'Sales Pipeline Management',
      description: 'Automatically track leads from first contact through close, with real-time updates across all systems.',
      processes: ['Lead scoring automation', 'Deal progression tracking', 'Sales forecast accuracy']
    },
    {
      title: 'Customer Support Integration',
      description: 'Provide support teams with complete customer history, purchase data, and interaction timeline.',
      processes: ['Ticket context enrichment', 'Escalation workflows', 'Satisfaction tracking']
    },
    {
      title: 'Marketing Attribution',
      description: 'Track the complete customer journey from marketing touchpoint to final purchase and beyond.',
      processes: ['Multi-touch attribution', 'Campaign ROI tracking', 'Customer lifetime value']
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
              <Users className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CRM Integration & Automation
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Unify Your Customer Data Across All Platforms
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect your CRM with every tool you use to create a single source of truth for customer relationships, enabling better decisions and stronger growth.
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
              Connect your entire business ecosystem
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={tool.logo} 
                    alt={tool.name} 
                    className="w-12 h-12 mb-2 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                  />
                  <p className="text-gray-300 text-sm font-medium text-center">{tool.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-400 font-medium">
              And 500+ more business platforms
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
              Ready to Unify Your Customer Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Create a complete view of every customer relationship
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
