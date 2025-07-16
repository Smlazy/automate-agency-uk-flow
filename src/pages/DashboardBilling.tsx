
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CreditCard, Download, Calendar, Package } from 'lucide-react';

export default function DashboardBilling() {
  // Mock data - replace with actual API calls
  const subscription = {
    package: 'Growth Package',
    status: 'Active',
    billingCycle: 'Monthly',
    nextBilling: '2024-02-15',
    amount: '£997.00',
  };

  const paymentMethod = {
    type: 'Visa',
    lastFour: '4242',
    expiry: '12/26',
  };

  const billingHistory = [
    { id: 1, date: '2024-01-15', description: 'Growth Package - Monthly', amount: '£997.00', status: 'Paid' },
    { id: 2, date: '2023-12-15', description: 'Growth Package - Monthly', amount: '£997.00', status: 'Paid' },
    { id: 3, date: '2023-11-15', description: 'Growth Package - Monthly', amount: '£997.00', status: 'Paid' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Billing & Subscriptions</h1>
          <p className="text-gray-300">Manage your subscription and payment methods</p>
        </div>

        {/* Subscription Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Subscription */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Package className="mr-2 h-5 w-5 text-emerald-500" />
                Current Subscription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">{subscription.package}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className="bg-emerald-600 text-white">{subscription.status}</Badge>
                  <span className="text-gray-400 text-sm">({subscription.billingCycle})</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Next billing date:</span>
                  <span className="text-white">{new Date(subscription.nextBilling).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount:</span>
                  <span className="text-white font-semibold">{subscription.amount}</span>
                </div>
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Manage Subscription
              </Button>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-emerald-500" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                  {paymentMethod.type}
                </div>
                <div>
                  <p className="text-white">•••• •••• •••• {paymentMethod.lastFour}</p>
                  <p className="text-gray-400 text-sm">Expires {paymentMethod.expiry}</p>
                </div>
              </div>

              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                Update Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Billing History */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-emerald-500" />
                Billing History
              </div>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                View All History
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-gray-400 font-medium">Date</th>
                    <th className="text-left py-3 text-gray-400 font-medium">Description</th>
                    <th className="text-left py-3 text-gray-400 font-medium">Amount</th>
                    <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 text-gray-400 font-medium">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((item) => (
                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 text-white">{new Date(item.date).toLocaleDateString()}</td>
                      <td className="py-3 text-white">{item.description}</td>
                      <td className="py-3 text-white font-medium">{item.amount}</td>
                      <td className="py-3">
                        <Badge className="bg-emerald-600 text-white">{item.status}</Badge>
                      </td>
                      <td className="py-3">
                        <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300 hover:bg-white/10">
                          <Download className="mr-1 h-4 w-4" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
