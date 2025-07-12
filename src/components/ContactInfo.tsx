
import { Card } from '@/components/ui/card';
import { Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-[#1A1A1A] border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="text-[#8B1538] mr-4" size={20} />
            <div>
              <div className="text-white font-medium">info@vantive.digital</div>
              <div className="text-gray-400 text-sm">General enquiries</div>
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
              <span className="font-medium text-white">Specialisation:</span> 
              <span className="ml-1">Automation for growing businesses</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-gradient-to-r from-[#8B1538] to-[#7A1230] p-6 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-3">Why Choose Vantive Digital?</h3>
        <ul className="space-y-2 text-white text-sm">
          <li>✓ UK-based team with local expertise</li>
          <li>✓ Specialised in business automation workflows</li>
          <li>✓ Proven methodologies for ROI delivery</li>
          <li>✓ Same timezone support</li>
          <li>✓ Flexible, no long-term contracts</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
