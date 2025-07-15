
import { Card } from '@/components/ui/card';
import { Mail, Clock, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-[#1A1A1A] border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="text-emerald-500 mr-4" size={20} />
            <div>
              <div className="text-white font-medium">Info@Vantive.digital</div>
              <div className="text-gray-400 text-sm">General enquiries</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="text-emerald-500 mr-4" size={20} />
            <div>
              <div className="text-white font-medium">Response within 4 hours</div>
              <div className="text-gray-400 text-sm">During business hours</div>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="text-emerald-500 mr-4" size={20} />
            <div>
              <div className="text-white font-medium">Based in London</div>
              <div className="text-gray-400 text-sm">Serving businesses globally</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="text-sm text-gray-300">
            <div className="font-medium text-white mb-2">Specialization:</div>
            <div>Intelligent automation for SAAS, agencies, and service professionals</div>
          </div>
        </div>
      </Card>

      <div className="bg-gradient-to-r from-emerald-500 to-indigo-500 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-3">Why Choose Vantive Digital?</h3>
        <ul className="space-y-2 text-white text-sm">
          <li>✓ UK-based team with local expertise</li>
          <li>✓ Specialised in business automation workflows</li>
          <li>✓ Enterprise-level methodology for growing businesses</li>
          <li>✓ Same timezone support and communication</li>
          <li>✓ Flexible, no long-term contracts</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
