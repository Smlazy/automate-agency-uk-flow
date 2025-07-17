import { ArrowRight, CheckCircle, Magnet, Target, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

const LeadGeneration = () => {
  const tools = [
    {
      name: "HubSpot",
      logo: "https://img.icons8.com/color/96/hubspot.png",
      category: "CRM"
    },
    {
      name: "Salesforce", 
      logo: "https://img.icons8.com/color/96/salesforce.png",
      category: "CRM"
    },
    {
      name: "Pipedrive",
      logo: "https://img.icons8.com/color/96/pipedrive.png",
      category: "CRM"
    },
    {
      name: "Typeform",
      logo: "https://img.icons8.com/color/96/typeform.png",
      category: "Forms"
    },
    {
      name: "Facebook Ads",
      logo: "https://img.icons8.com/color/96/facebook.png",
      category: "Advertising"
    },
    {
      name: "Google Ads",
      logo: "https://img.icons8.com/color/96/google-ads.png",
      category: "Advertising"
    },
    {
      name: "LinkedIn",
      logo: "https://img.icons8.com/color/96/linkedin.png",
      category: "Social Media"
    },
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
      name: "Calendly",
      logo: "https://img.icons8.com/color/96/calendly.png",
      category: "Scheduling"
    },
    {
      name: "Webflow",
      logo: "https://img.icons8.com/color/96/webflow.png",
      category: "Website"
    },
    {
      name: "WordPress",
      logo: "https://img.icons8.com/color/96/wordpress.png",
      category: "Website"
    }
  ];

  const benefits = [
    {
      title: "Higher Quality Leads",
      description: "Automatically score and qualify prospects based on behaviour and criteria",
      impact: "Focus sales efforts on ready-to-buy prospects"
    },
    {
      title: "24/7 Lead Capture",
      description: "Never miss a potential customer, regardless of when they visit",
      impact: "Capture leads around the clock from all sources"
    },
    {
      title: "Intelligent Lead Nurturing",
      description: "Guide prospects through tailored journeys based on their interests and actions",
      impact: "Increase conversion rates through targeted messaging"
    },
    {
      title: "Multi-Source Lead Collection",
      description: "Centralise leads from website, social media, ads, and events automatically",
      impact: "Gain complete visibility of your lead pipeline"
    },
    {
      title: "Faster Sales Handoff",
      description: "Instantly notify sales teams when qualified leads are ready for contact",
      impact: "Strike while leads are hot and interested"
    },
    {
      title: "Reduced Cost Per Lead",
      description: "Optimise lead generation processes to maximise ROI from marketing spend",
      impact: "Get more qualified leads for less investment"
    }
  ];

  const steps = [
    {
      icon: Target,
      title: "Lead Capture Setup",
      description: "Deploy forms, landing pages, and tracking systems across all channels to capture prospect information seamlessly."
    },
    {
      icon: BarChart3,
      title: "Scoring System",
      description: "Create intelligent qualification criteria based on behaviour, demographics, and engagement to identify your best prospects."
    },
    {
      icon: Users,
      title: "Nurturing Flows",
      description: "Design targeted follow-up sequences that guide prospects through your sales funnel with relevant content."
    },
    {
      icon: CheckCircle,
      title: "CRM Integration",
      description: "Seamlessly transfer qualified leads to your sales team with complete context and interaction history."
    }
  ];

  const useCases = [
    {
      title: "Website Lead Capture",
      description: "Automatically capture visitor information through intelligent forms, exit-intent popups, and content downloads.",
      processes: ["Contact form automation", "Content gate management", "Exit-intent capture"]
    },
    {
      title: "Social Media Lead Generation",
      description: "Generate and nurture leads from social platforms with automated follow-up sequences and engagement tracking.",
      processes: ["LinkedIn outreach", "Facebook lead ads", "Social media monitoring"]
    },
    {
      title: "Event & Webinar Leads",
      description: "Capture, qualify, and follow up with event attendees through automated sequences tailored to their level of engagement.",
      processes: ["Registration automation", "Follow-up sequences", "Engagement scoring"]
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
              <Magnet className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Lead Generation <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Turn Visitors Into Qualified Prospects Automatically
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Capture, qualify, and nurture leads through intelligent automation that works around the clock to identify and convert your most promising prospects.
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
            <p className="text-gray-400">Connect your lead generation tools into a unified system</p>
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
                <span className="text-sm font-semibold text-gray-300 text-center">{tool.name}</span>
                <span className="text-xs text-gray-500 mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400 text-lg">And 500+ more lead generation tools</p>
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
                Ready to Generate More Qualified Leads?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert lead generation automation guidance tailored to your specific business needs.
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

export default LeadGeneration;
