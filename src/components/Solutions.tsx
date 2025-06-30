
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Home, Search } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Users,
      title: "Recruitment Agency Automation",
      problems: [
        "Manual candidate sourcing and screening",
        "Repetitive interview scheduling", 
        "Time-consuming client communication",
        "Inefficient job posting management"
      ],
      solutions: [
        "AI Candidate Sourcing: Automatically find and rank qualified candidates from multiple platforms",
        "Smart Screening System: Pre-qualify candidates with AI-powered questionnaires and assessments", 
        "Interview Automation: Automated scheduling, reminders, and follow-up sequences",
        "Client Communication Hub: Automated updates, reports, and placement confirmations"
      ],
      result: "Local recruitment firm increased placements by 180% whilst reducing manual work by 25 hours/week",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Home,
      title: "Real Estate Agency Automation", 
      problems: [
        "Lead qualification and nurturing",
        "Property matching inefficiencies",
        "Manual appointment scheduling",
        "Repetitive market reports and valuations"
      ],
      solutions: [
        "Lead Scoring & Nurturing: AI-powered lead qualification and automated follow-up sequences",
        "Property Matching Engine: Automatically match properties to buyer preferences",
        "Smart Scheduling: Automated viewing bookings with calendar integration", 
        "Market Intelligence: Automated property valuations and market reports"
      ],
      result: "Regional estate agency increased lead conversion by 250% and freed up 30 hours/week for high-value activities",
      color: "from-green-600 to-green-800"
    },
    {
      icon: Search,
      title: "Marketing Agency Automation",
      problems: [
        "Campaign setup and management overhead",
        "Manual reporting and client updates", 
        "Inefficient content creation workflows",
        "Time-consuming client onboarding"
      ],
      solutions: [
        "Campaign Management Hub: Automated ad setup, optimisation, and budget management",
        "Smart Reporting: Automated client dashboards and performance reports",
        "Content Workflow Engine: Streamlined content creation, approval, and publishing",
        "Client Onboarding System: Automated welcome sequences and project kickoffs"
      ],
      result: "Growing marketing agency reduced client onboarding time by 75% and increased campaign ROI by 40%",
      color: "from-purple-600 to-purple-800"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tailored Automation Solutions for Your Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialise in the unique workflows and challenges of three high-growth industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-[#0F0F0F] border-gray-700 p-8 hover:border-[#8B1538] transition-all duration-300 flex flex-col h-full">
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6`}>
                <solution.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">{solution.title}</h3>
              
              <div className="mb-6 flex-grow">
                <h4 className="text-lg font-semibold text-[#8B1538] mb-3">Core Problems We Solve:</h4>
                <ul className="space-y-2 mb-6">
                  {solution.problems.map((problem, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {problem}
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-[#8B1538] mb-3">Our Automation Solutions:</h4>
                <ul className="space-y-3 mb-6">
                  {solution.solutions.map((sol, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      <div className="font-medium text-white">{sol.split(':')[0]}:</div>
                      <div className="ml-4">{sol.split(':')[1]}</div>
                    </li>
                  ))}
                </ul>

                <div className="bg-[#1A1A1A] p-4 rounded-lg border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">Results:</div>
                  <div className="text-white font-medium italic">"{solution.result}"</div>
                </div>
              </div>

              <Button 
                onClick={scrollToContact}
                className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white mt-auto"
              >
                Get Custom Solution
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-[#0F0F0F] p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-300 mb-6">
              We've successfully automated workflows for dozens of other business types. 
              Our process works for any business with repetitive tasks and growth ambitions.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-[#8B1538] hover:bg-[#7A1230] text-white px-8 py-3"
            >
              Discuss Your Custom Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
