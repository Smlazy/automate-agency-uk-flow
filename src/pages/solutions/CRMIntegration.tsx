
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Users, Clock, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function CRMIntegration() {
  const integrationTools = [
    'Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'ActiveCampaign', 'Mailchimp',
    'Google Analytics', 'Stripe', 'QuickBooks', 'Calendly', 'Zapier', 'Microsoft Dynamics'
  ];

  const achievements = [
    { title: '360-degree view of every customer interaction', icon: Target },
    { title: 'Eliminate duplicate data entry across platforms', icon: Check },
    { title: 'Increase sales team productivity by 40%', icon: TrendingUp },
    { title: 'Improve lead-to-customer conversion rates', icon: Clock },
    { title: 'Automate pipeline management and reporting', icon: Users }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Data Audit',
      description: 'Map all customer touchpoints and data sources across your business'
    },
    {
      step: '2',
      title: 'Integration Architecture',
      description: 'Design seamless data flow between all your systems'
    },
    {
      step: '3',
      title: 'Automation Rules',
      description: 'Set up triggers for automatic updates and actions'
    },
    {
      step: '4',
      title: 'Reporting Dashboard',
      description: 'Create unified reporting across all platforms'
    }
  ];

  const industryExamples = [
    {
      industry: 'Sales Teams',
      description: 'Automatic lead capture from website, email tracking, and deal progression',
      benefits: ['Faster lead response', 'Complete sales history', 'Automated follow-up']
    },
    {
      industry: 'Marketing Agencies',
      description: 'Client data synchronisation, campaign tracking, and ROI reporting',
      benefits: ['Better client insights', 'Unified reporting', 'Improved ROI tracking']
    },
    {
      industry: 'Service Providers',
      description: 'Customer history tracking, support ticket integration, and billing automation',
      benefits: ['Complete customer view', 'Faster support resolution', 'Automated billing']
    }
  ];

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
              Connect your CRM with every tool you use to create a single source of truth for customer relationships.
            </p>
            <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
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
              {integrationTools.map((tool, index) => (
                <Card key={index} className="bg-white/5 border-white/10 p-4 text-center hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
                    <span className="text-white text-xs font-bold">{tool.slice(0, 2)}</span>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{tool}</p>
                </Card>
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
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/10 border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{achievement.title}</h3>
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

      {/* Industry Examples Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Industry Examples
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industryExamples.map((example, index) => (
                <Card key={index} className="bg-white/10 border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <h3 className="text-emerald-400 font-bold text-lg mb-3">{example.industry}</h3>
                  <p className="text-gray-300 mb-4">{example.description}</p>
                  <div className="space-y-2">
                    {example.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <Check className="text-emerald-500 mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
              <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg">
                View Pricing
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
