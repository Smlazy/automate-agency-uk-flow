
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    challenge: '',
    timeline: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 2 hours to schedule your free automation audit.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      challenge: '',
      timeline: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your free automation strategy call and discover exactly how much time and money 
            automation can save your agency
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[#1A1A1A] border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Book Your Free Automation Strategy Call</h3>
            <p className="text-gray-300 mb-6">
              30-minute consultation • Custom automation recommendations • ROI projections • No obligation
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-[#0F0F0F] border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-[#0F0F0F] border-gray-600 text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="bg-[#0F0F0F] border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company Name *</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="bg-[#0F0F0F] border-gray-600 text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Industry *</label>
                  <Select value={formData.industry} onValueChange={(value) => handleChange('industry', value)}>
                    <SelectTrigger className="bg-[#0F0F0F] border-gray-600 text-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F0F0F] border-gray-600">
                      <SelectItem value="recruitment">Recruitment Agency</SelectItem>
                      <SelectItem value="realestate">Real Estate Agency</SelectItem>
                      <SelectItem value="marketing">Marketing Agency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Timeline</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                    <SelectTrigger className="bg-[#0F0F0F] border-gray-600 text-white">
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F0F0F] border-gray-600">
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                      <SelectItem value="quarter">Within 3 months</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Biggest Challenge</label>
                <Textarea
                  value={formData.challenge}
                  onChange={(e) => handleChange('challenge', e.target.value)}
                  placeholder="What manual process is taking up most of your team's time?"
                  className="bg-[#0F0F0F] border-gray-600 text-white min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#8B1538] hover:bg-[#7A1230] text-white py-3 text-lg">
                Book Free Strategy Call
              </Button>
            </form>
          </Card>

          {/* Contact Info & Quick Audit */}
          <div className="space-y-8">
            <Card className="bg-[#1A1A1A] border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Instant Automation Audit</h3>
              <p className="text-gray-300 mb-6">
                Quick online assessment • Immediate opportunities report • Takes less than 5 minutes
              </p>
              <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 mb-6">
                Start Quick Audit
              </Button>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">What You'll Get:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Personalized automation opportunities</li>
                  <li>• Time savings calculations</li>
                  <li>• ROI projections for your business</li>
                  <li>• Recommended automation roadmap</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-[#1A1A1A] border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-[#8B1538] mr-4" size={20} />
                  <div>
                    <div className="text-white font-medium">0800 XXX XXXX</div>
                    <div className="text-gray-400 text-sm">Free consultation line</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-[#8B1538] mr-4" size={20} />
                  <div>
                    <div className="text-white font-medium">hello@automateuk.co.uk</div>
                    <div className="text-gray-400 text-sm">General inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-[#8B1538] mr-4" size={20} />
                  <div>
                    <div className="text-white font-medium">Response within 2 hours</div>
                    <div className="text-gray-400 text-sm">During business hours</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 mt-6">
                <div className="text-sm text-gray-300">
                  <div className="font-medium text-white mb-2">Service Areas:</div>
                  <div>Proudly serving UK businesses nationwide</div>
                  <div className="mt-2">
                    <span className="font-medium text-white">Specialization:</span> 
                    <span className="ml-1">Automation for growing agencies</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-[#8B1538] to-[#7A1230] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">Why Choose AutomateUK?</h3>
              <ul className="space-y-2 text-white text-sm">
                <li>✓ UK-based team with local expertise</li>
                <li>✓ Specialized in agency workflows</li>
                <li>✓ Guaranteed ROI within 90 days</li>
                <li>✓ Same timezone support</li>
                <li>✓ Proven track record with UK agencies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
