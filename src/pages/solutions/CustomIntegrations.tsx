
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Clock, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function CustomIntegrations() {
  const technologies = [
    {
      name: "REST APIs",
      logo: "https://img.icons8.com/color/96/api-settings.png",
      category: "API Technology"
    },
    {
      name: "GraphQL", 
      logo: "https://img.icons8.com/color/96/graphql.png",
      category: "API Technology"
    },
    {
      name: "MySQL",
      logo: "https://img.icons8.com/color/96/mysql-logo.png",
      category: "Database"
    },
    {
      name: "PostgreSQL",
      logo: "https://img.icons8.com/color/96/postgreesql.png",
      category: "Database"
    },
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/color/96/mongodb.png",
      category: "Database"
    },
    {
      name: "AWS",
      logo: "https://img.icons8.com/color/96/amazon-web-services.png",
      category: "Cloud Platform"
    },
    {
      name: "Google Cloud",
      logo: "https://img.icons8.com/color/96/google-cloud.png", 
      category: "Cloud Platform"
    },
    {
      name: "Microsoft Azure",
      logo: "https://img.icons8.com/color/96/azure-1.png",
      category: "Cloud Platform"
    },
    {
      name: "Shopify",
      logo: "https://img.icons8.com/color/96/shopify.png",
      category: "E-commerce"
    },
    {
      name: "WooCommerce",
      logo: "https://img.icons8.com/color/96/woocommerce.png",
      category: "E-commerce"
    },
    {
      name: "Docker",
      logo: "https://img.icons8.com/color/96/docker.png",
      category: "DevOps"
    },
    {
      name: "Kubernetes",
      logo: "https://img.icons8.com/color/96/kubernetes.png",
      category: "DevOps"
    }
  ];

  const benefits = [
    { 
      title: 'Connect Incompatible Systems', 
      description: 'Bridge the gap between legacy systems and modern applications with custom-built integrations',
      impact: 'Unlock data trapped in silos' 
    },
    { 
      title: 'Eliminate Manual Data Transfer', 
      description: 'Automate complex data synchronisation processes between unique system combinations',
      impact: 'Save hours of manual work daily' 
    },
    { 
      title: 'Create Competitive Advantages', 
      description: 'Build unique automation solutions that competitors cannot replicate easily',
      impact: 'Differentiate your business operations' 
    },
    { 
      title: 'Scale Complex Processes', 
      description: 'Handle increasing complexity and volume without proportional staff increases',
      impact: 'Grow efficiently without operational bottlenecks' 
    },
    { 
      title: 'Future-Proof Technology Stack', 
      description: 'Build integrations that adapt and scale as your business and technology needs evolve',
      impact: 'Protect your automation investment' 
    },
    { 
      title: 'Industry-Specific Solutions', 
      description: 'Address unique challenges and workflows specific to your industry or business model',
      impact: 'Perfect fit for your exact requirements' 
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'System Analysis',
      description: 'Map your unique tool ecosystem and identify complex integration opportunities'
    },
    {
      step: '2',
      title: 'Integration Strategy',
      description: 'Design custom connection architecture tailored to your specific requirements'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Build and validate custom integrations with comprehensive testing protocols'
    },
    {
      step: '4',
      title: 'Monitoring & Maintenance',
      description: 'Ensure ongoing reliability with proactive monitoring and performance optimization'
    }
  ];

  const useCases = [
    {
      title: 'Legacy System Modernisation',
      description: 'Connect outdated but critical business systems with modern cloud applications and databases.',
      processes: ['API development', 'Data transformation', 'System bridging']
    },
    {
      title: 'Multi-Platform E-commerce',
      description: 'Synchronise inventory, orders, and customer data across multiple sales channels and marketplaces.',
      processes: ['Inventory synchronisation', 'Order management', 'Customer data unification']
    },
    {
      title: 'Industry-Specific Workflows',
      description: 'Build automated processes that address unique compliance, reporting, or operational requirements.',
      processes: ['Compliance automation', 'Custom reporting', 'Specialized workflows']
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
              <Zap className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom Integrations
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Connect Any Tool to Any System
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build bespoke connections between your unique combination of tools and create automation solutions tailored specifically to your business requirements and workflows.
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

      {/* Technologies We Work With Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Technologies We Work With
            </h2>
            <p className="text-gray-300 text-center mb-12">
              No system is too complex or unique
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-12 h-12 mb-2 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                  />
                  <p className="text-gray-300 text-sm font-medium text-center">{tech.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{tech.category}</p>
                </div>
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
              Ready for Custom Integration Solutions?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Transform your unique business challenges into competitive advantages
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
