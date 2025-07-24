
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <Card className="bg-[rgba(30,41,59,0.6)] border-[rgba(34,211,238,0.2)] p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
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
              className="bg-[rgba(15,23,42,0.8)] border-[rgba(34,211,238,0.2)] text-white focus:border-[rgba(34,211,238,0.4)] focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-300"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Email *</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="bg-[rgba(15,23,42,0.8)] border-[rgba(34,211,238,0.2)] text-white focus:border-[rgba(34,211,238,0.4)] focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-300"
              placeholder="your.email@company.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Company Name *</label>
          <Input
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="bg-[rgba(15,23,42,0.8)] border-[rgba(34,211,238,0.2)] text-white focus:border-[rgba(34,211,238,0.4)] focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-300"
            placeholder="Your company name"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-medium mb-2">Industry *</label>
            <Select value={formData.industry} onValueChange={(value) => handleChange('industry', value)}>
              <SelectTrigger className="bg-[rgba(15,23,42,0.8)] border-[rgba(34,211,238,0.2)] text-white focus:border-[rgba(34,211,238,0.4)] transition-all duration-300">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-[rgba(15,23,42,0.9)] border-[rgba(34,211,238,0.2)]">
                <SelectItem value="saas" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">SaaS & Technology</SelectItem>
                <SelectItem value="property" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Property & Real Estate</SelectItem>
                <SelectItem value="marketing" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Marketing & Advertising</SelectItem>
                <SelectItem value="recruitment" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Recruitment & HR</SelectItem>
                <SelectItem value="education" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Education & Training</SelectItem>
                <SelectItem value="trade" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Trade & Professional Services</SelectItem>
                <SelectItem value="other" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Timeline</label>
            <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
              <SelectTrigger className="bg-[rgba(15,23,42,0.8)] border-[rgba(34,211,238,0.2)] text-white focus:border-[rgba(34,211,238,0.4)] transition-all duration-300">
                <SelectValue placeholder="When do you want to start?" />
              </SelectTrigger>
              <SelectContent className="bg-[rgba(15,23,42,0.9)] border-[rgba(34,211,238,0.2)]">
                <SelectItem value="asap" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">ASAP</SelectItem>
                <SelectItem value="month" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Within a month</SelectItem>
                <SelectItem value="quarter" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Within 3 months</SelectItem>
                <SelectItem value="exploring" className="text-white hover:bg-[rgba(30,41,59,0.6)] focus:bg-[rgba(30,41,59,0.6)]">Just exploring</SelectItem>
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
            className="bg-[rgba(15,23,42,0.8)] border-[rgba(34,211,238,0.2)] text-white min-h-[100px] focus:border-[rgba(34,211,238,0.4)] focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-300 resize-none"
          />
        </div>

        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          Book Free Strategy Call
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
