
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowRight, Calendar, Clock, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBackground from '@/components/SectionBackground';

export default function SchedulingBooking() {
  const tools = [
    {
      name: "Calendly",
      logo: "https://img.icons8.com/color/96/calendly.png",
      category: "Scheduling"
    },
    {
      name: "Google Calendar",
      logo: "https://img.icons8.com/color/96/google-calendar.png",
      category: "Calendar"
    },
    {
      name: "Outlook Calendar",
      logo: "https://img.icons8.com/color/96/microsoft-outlook-2019.png",
      category: "Calendar"
    },
    {
      name: "Zoom",
      logo: "https://img.icons8.com/color/96/zoom.png",
      category: "Video Conferencing"
    },
    {
      name: "Microsoft Teams",
      logo: "https://img.icons8.com/color/96/microsoft-teams.png",
      category: "Video Conferencing"
    },
    {
      name: "Stripe",
      logo: "https://img.icons8.com/color/96/stripe.png",
      category: "Payments"
    },
    {
      name: "PayPal",
      logo: "https://img.icons8.com/color/96/paypal.png",
      category: "Payments"
    },
    {
      name: "Twilio",
      logo: "https://img.icons8.com/color/96/twilio.png",
      category: "SMS"
    },
    {
      name: "Mailchimp",
      logo: "https://img.icons8.com/color/96/mailchimp.png",
      category: "Email"
    },
    {
      name: "HubSpot",
      logo: "https://img.icons8.com/color/96/hubspot.png",
      category: "CRM"
    },
    {
      name: "Square",
      logo: "https://img.icons8.com/color/96/square.png",
      category: "Payments"
    },
    {
      name: "Typeform",
      logo: "https://img.icons8.com/color/96/typeform.png",
      category: "Forms"
    }
  ];

  const benefits = [
    { 
      title: 'Eliminate No-Shows', 
      description: 'Automated reminder sequences via email and SMS significantly reduce missed appointments',
      impact: 'Reduce no-shows by 60-80%' 
    },
    { 
      title: '24/7 Booking Availability', 
      description: 'Allow customers to book appointments anytime, even outside business hours',
      impact: 'Capture bookings around the clock' 
    },
    { 
      title: 'Instant Payment Collection', 
      description: 'Secure payment processing at the time of booking to reduce no-shows and guarantee commitment',
      impact: 'Improve cash flow and reduce cancellations' 
    },
    { 
      title: 'Seamless Rescheduling', 
      description: 'Allow customers to easily reschedule or cancel with automatic calendar updates',
      impact: 'Reduce administrative overhead' 
    },
    { 
      title: 'Complete Booking Workflows', 
      description: 'From initial enquiry to post-appointment follow-up, every step is automated',
      impact: 'Streamline entire customer journey' 
    },
    { 
      title: 'Multi-Calendar Sync', 
      description: 'Prevent double-bookings by synchronising across all your calendar systems',
      impact: 'Eliminate scheduling conflicts entirely' 
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Calendar Integration',
      description: 'Connect all scheduling platforms and availability systems for unified calendar management'
    },
    {
      step: '2',
      title: 'Booking Flow Design',
      description: 'Create seamless customer booking experience with integrated payment collection'
    },
    {
      step: '3',
      title: 'Automated Confirmations',
      description: 'Set up intelligent reminder and confirmation sequences via email and SMS'
    },
    {
      step: '4',
      title: 'Payment Processing',
      description: 'Integrate secure payment collection with automated receipt generation'
    }
  ];

  const useCases = [
    {
      title: 'Professional Services',
      description: 'Consultations, client meetings, and service appointments with automated intake forms and payment collection.',
      processes: ['Consultation booking', 'Client intake automation', 'Service payment processing']
    },
    {
      title: 'Healthcare & Wellness',
      description: 'Patient appointments, therapy sessions, and wellness consultations with insurance verification and reminders.',
      processes: ['Appointment scheduling', 'Insurance verification', 'Treatment reminders']
    },
    {
      title: 'Fitness & Training',
      description: 'Personal training sessions, group classes, and fitness consultations with membership integration.',
      processes: ['Class booking', 'Personal training slots', 'Membership management']
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
              <Calendar className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Scheduling & Booking Automation
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Eliminate Booking Back-and-Forth Forever
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Automate your entire booking process from initial enquiry to post-appointment follow-up, creating seamless experiences that delight customers and save time.
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
              Connect your scheduling and payment systems
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
              And 500+ more scheduling and payment platforms
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
              Ready to Automate Your Scheduling?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Eliminate scheduling hassles and reduce no-shows
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
