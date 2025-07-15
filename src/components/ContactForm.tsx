
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
              className="bg-[#0F0F0F] border-gray-600 text-white"
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
            className="bg-[#0F0F0F] border-gray-600 text-white"
            placeholder="Your company name"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-medium mb-2">Industry *</label>
            <Select value={formData.industry} onValueChange={(value) => handleChange('industry', value)}>
              <SelectTrigger className="bg-[#0F0F0F] border-gray-600 text-white">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent className="bg-[#0F0F0F] border-gray-600">
                <SelectItem value="recruitment" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Recruitment Agency</SelectItem>
                <SelectItem value="realestate" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Real Estate Agency</SelectItem>
                <SelectItem value="marketing" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Marketing Agency</SelectItem>
                <SelectItem value="other" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Other</SelectItem>
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
                <SelectItem value="asap" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">ASAP</SelectItem>
                <SelectItem value="month" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Within a month</SelectItem>
                <SelectItem value="quarter" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Within 3 months</SelectItem>
                <SelectItem value="exploring" className="text-white hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">Just exploring</SelectItem>
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

        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg">
          Book Free Strategy Call
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
