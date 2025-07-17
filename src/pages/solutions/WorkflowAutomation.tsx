
import { ArrowRight, CheckCircle, Zap, Clock, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

const WorkflowAutomation = () => {
  const tools = [
    {
      name: "Microsoft 365",
      logo: "https://img.icons8.com/fluency/96/microsoft-office-2019.png",
      category: "Productivity"
    },
    {
      name: "Google Workspace", 
      logo: "https://img.icons8.com/color/96/google-workspace.png",
      category: "Productivity"
    },
    {
      name: "Slack",
      logo: "https://img.icons8.com/color/96/slack-new.png", 
      category: "Communication"
    },
    {
      name: "Trello",
      logo: "https://img.icons8.com/color/96/trello.png",
      category: "Project Management"
    },
    {
      name: "Asana",
      logo: "https://img.icons8.com/color/96/asana.png",
      category: "Project Management"
    },
    {
      name: "Monday.com",
      logo: "https://img.icons8.com/color/96/monday.png",
      category: "Project Management"
    },
    {
      name: "Notion",
      logo: "https://img.icons8.com/color/96/notion.png",
      category: "Documentation"
    },
    {
      name: "Airtable",
      logo: "https://img.icons8.com/color/96/airtable.png",
      category: "Database"
    },
    {
      name: "Dropbox",
      logo: "https://img.icons8.com/color/96/dropbox.png",
      category: "Storage"
    },
    {
      name: "OneDrive",
      logo: "https://img.icons8.com/color/96/microsoft-onedrive-2019.png",
      category: "Storage"
    },
    {
      name: "SharePoint",
      logo: "https://img.icons8.com/color/96/sharepoint.png",
      category: "Collaboration"
    },
    {
      name: "Zapier",
      logo: "https://img.icons8.com/color/96/zapier.png",
      category: "Integration"
    }
  ];

  const benefits = [
    {
      title: "Eliminate Repetitive Tasks",
      description: "Automate routine processes that consume valuable time",
      impact: "Save 15-25 hours per week per team member"
    },
    {
      title: "Reduce Human Error", 
      description: "Ensure consistent, accurate execution every time",
      impact: "Achieve 99%+ process accuracy"
    },
    {
      title: "Scale Without Hiring",
      description: "Handle increased workload with existing resources",
      impact: "Process 3x more work with the same team"
    },
    {
      title: "Improve Team Satisfaction",
      description: "Free staff from mundane tasks to focus on meaningful work",
      impact: "Boost productivity and job satisfaction"
    },
    {
      title: "24/7 Operations",
      description: "Workflows that run continuously without supervision",
      impact: "Never miss deadlines or opportunities"
    },
    {
      title: "Real-Time Visibility", 
      description: "Track progress and performance across all processes",
      impact: "Make data-driven decisions instantly"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Process Discovery",
      description: "We analyse your current workflows to identify automation opportunities and map optimal process flows.",
      icon: BarChart3
    },
    {
      step: 2, 
      title: "Workflow Design",
      description: "Create intelligent automation sequences with triggers, conditions, and actions tailored to your operations.",
      icon: Zap
    },
    {
      step: 3,
      title: "Integration & Testing", 
      description: "Connect your tools seamlessly and rigorously test all workflows to ensure flawless operation.",
      icon: Users
    },
    {
      step: 4,
      title: "Launch & Optimise",
      description: "Deploy your automated workflows and continuously refine them for maximum efficiency and results.",
      icon: CheckCircle
    }
  ];

  const useCases = [
    {
      title: "Document Processing",
      description: "Automatically route, approve, and file documents based on content and business rules.",
      processes: ["Invoice processing", "Contract management", "Compliance documentation"]
    },
    {
      title: "Team Coordination",
      description: "Streamline project handoffs, status updates, and resource allocation across departments.",
      processes: ["Task assignment", "Progress reporting", "Resource scheduling"]
    },
    {
      title: "Data Management",
      description: "Synchronise information across systems and generate reports without manual intervention.",
      processes: ["Data entry", "Report generation", "System synchronisation"]
    },
    {
      title: "Customer Onboarding",
      description: "Guide new customers through setup processes with automated sequences and checkpoints.",
      processes: ["Welcome sequences", "Account setup", "Training delivery"]
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
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Eliminate Manual Tasks, Maximise Efficiency
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Transform repetitive processes into intelligent, automated workflows that operate seamlessly around the clock, freeing your team to focus on strategic growth initiatives.
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
          
          <div className="tools-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-8">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item flex flex-col items-center p-4 bg-white/10 border border-white/20 rounded-lg transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:border-emerald-400/40">
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="tool-logo w-12 h-12 mb-2 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <span className="tool-name text-sm font-semibold text-gray-300 text-center">{tool.name}</span>
                <span className="tool-category text-xs text-gray-500 mt-1">{tool.category}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400 text-lg">And 500+ more business tools</p>
        </div>
      </section>

      {/* What You'll Achieve Section */}
      <SectionBackground className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What You'll Achieve
            </h2>
            
            <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="benefit-card bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <CardContent className="p-6">
                    <h3 className="benefit-title text-lg font-bold text-emerald-400 mb-3">{benefit.title}</h3>
                    <p className="benefit-description text-gray-300 mb-3 leading-relaxed">{benefit.description}</p>
                    <p className="benefit-impact text-green-400 font-medium text-sm">{benefit.impact}</p>
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
            
            <div className="process-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="process-step text-center">
                  <div className="process-number w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
                    <span className="text-white text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="process-title text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="process-description text-gray-400">{step.description}</p>
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
            
            <div className="use-cases-grid grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="use-case-card bg-slate-900/80 border-white/20 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <CardContent className="p-6">
                    <h3 className="use-case-title text-lg font-bold text-emerald-400 mb-3">{useCase.title}</h3>
                    <p className="use-case-description text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <ul className="use-case-processes space-y-1">
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
