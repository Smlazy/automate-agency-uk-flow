
import { ArrowRight, CheckCircle, Magnet, Target, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

const LeadGeneration = () => {
  const tools = [
    "HubSpot", "Salesforce", "Pipedrive", "Typeform", "Gravity Forms",
    "Facebook Ads", "Google Ads", "LinkedIn", "Mailchimp", "ConvertKit"
  ];

  const achievements = [
    "Increase lead quality by 50-70%",
    "Capture leads from multiple sources automatically",
    "Qualify prospects before they reach your sales team", 
    "Reduce cost per lead by 30-50%",
    "Improve conversion rates through targeted nurturing"
  ];

  const steps = [
    {
      icon: Target,
      title: "Lead Capture Setup",
      description: "Deploy forms, landing pages, and tracking systems across all channels"
    },
    {
      icon: BarChart3,
      title: "Scoring System",
      description: "Create intelligent qualification criteria based on behaviour and fit"
    },
    {
      icon: Users,
      title: "Nurturing Flows",
      description: "Design targeted follow-up sequences that guide prospects to purchase"
    },
    {
      icon: CheckCircle,
      title: "CRM Integration",
      description: "Seamlessly transfer qualified leads to your sales team"
    }
  ];

  const examples = [
    {
      industry: "SaaS Companies",
      description: "Free trial sign-ups, demo requests, and feature-based lead scoring systems"
    },
    {
      industry: "Professional Services",
      description: "Contact form submissions, consultation requests, and expertise-based qualification"
    },
    {
      industry: "B2B Companies", 
      description: "LinkedIn lead generation, webinar attendees, and content download tracking"
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
              Lead Generation <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Turn Visitors Into Qualified Prospects Automatically
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Capture, qualify, and nurture leads through intelligent automation that works around the clock.
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
