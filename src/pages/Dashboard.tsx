
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  FolderOpen, 
  User, 
  Zap, 
  Calendar,
  CreditCard,
  FileText,
  MessageSquare 
} from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { useAuth } from '@/hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data - replace with actual API calls
  const stats = {
    currentPackage: 'Growth Package',
    packageStatus: 'Active',
    nextBilling: '2024-02-15',
    activeProjects: 2,
    latestProject: 'CRM Integration',
    memberSince: '2024-01-01',
    accountType: 'Premium'
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.user_metadata?.full_name || 'User'}!
          </h1>
          <p className="text-gray-300">
            {currentTime.toLocaleDateString('en-GB', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Package Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Current Package</CardTitle>
              <Package className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{stats.currentPackage}</div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-emerald-600 text-white">{stats.packageStatus}</Badge>
              </div>
              <p className="text-xs text-gray-400 mb-3">
                Next billing: {new Date(stats.nextBilling).toLocaleDateString()}
              </p>
              <Link to="/dashboard/billing">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Manage Billing
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Active Projects Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{stats.activeProjects}</div>
              <p className="text-xs text-gray-400 mb-3">
                Latest: {stats.latestProject}
              </p>
              <Link to="/dashboard/projects">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  View All Projects
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Account Status Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Account Status</CardTitle>
              <User className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{stats.accountType}</div>
              <p className="text-xs text-gray-400 mb-3">
                Member since {new Date(stats.memberSince).toLocaleDateString()}
              </p>
              <Link to="/dashboard/settings">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Account Settings
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Quick Actions</CardTitle>
              <Zap className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Link to="/dashboard/projects">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white justify-start" size="sm">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Request New Project
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10 justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Download Latest Invoice
              </Button>
              <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10 justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm">Welcome email sent</p>
                  <p className="text-gray-400 text-xs">Just now</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm">Account created successfully</p>
                  <p className="text-gray-400 text-xs">Today</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
