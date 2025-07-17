
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Clock, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function CustomIntegrations() {
  const integrationTools = [
    'APIs', 'Webhooks', 'Custom Databases', 'Legacy Systems', 'Specialist Software', 'Cloud Platforms',
    'Security Tools', 'IoT Devices', 'Enterprise Systems', 'Industry-Specific Tools', 'Custom Apps', 'Microservices'
  ];

  const achievements = [
    { title: 'Connect previously incompatible systems', icon: Target },
    { title: 'Eliminate manual data transfer between platforms', icon: Check },
    { title: 'Create unique competitive advantages through automation', icon: TrendingUp },
    { title: 'Scale complex processes without additional staff', icon: Clock },
    { title: 'Future-proof your technology stack', icon: Zap }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'System Analysis',
      description: 'Map your unique tool ecosystem and identify integration opportunities'
    },
    {
      step: '2',
      title: 'Integration Strategy',
      description: 'Design custom connection architecture for your specific needs'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Build and validate custom integrations with thorough testing'
    },
    {
      step: '4',
      title: 'Monitoring & Maintenance',
      description: 'Ensure ongoing reliability and performance optimization'
    }
  ];

  const industryExamples = [
    {
      industry: 'Manufacturing',
      description: 'ERP system integration with inventory management and supplier portals',
      benefits: ['Real-time inventory sync', 'Automated supplier orders', 'Production planning']
    },
    {
      industry: 'Financial Services',
      description: 'Compliance tool integration with client management and reporting systems',
      benefits: ['Automated compliance reporting', 'Risk monitoring', 'Client data protection']
    },
    {
      industry: 'Healthcare',
      description: 'Patient management system integration with billing, insurance, and communication platforms',
      benefits: ['Streamlined patient flow', 'Automated billing', 'Better patient experience']
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
              <Zap className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom Integrations
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Connect Any Tool to Any System
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build bespoke connections between your unique combination of tools and create automation solutions tailored specifically to your business.
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
              What We Can Connect
            </h2>
            <p className="text-gray-300 text-center mb-12">
              No system is too complex or unique
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
              And virtually any system with an API or data interface
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
              Ready for Custom Integration Solutions?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Transform your unique business challenges into competitive advantages
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
