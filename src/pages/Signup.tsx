import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/hooks/useAuth';
import { Loader2, Mail, User, Building } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import NetworkBackground from '@/components/NetworkBackground';
import { toast } from '@/hooks/use-toast';

export default function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    company: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleTermsChange = (checked: boolean | 'indeterminate') => {
    setAcceptedTerms(checked === true);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!acceptedTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    const result = await signUp(formData.email, formData.password, formData.fullName);
    if (!result.error) {
      // Check if package was selected
      const selectedPackage = sessionStorage.getItem('selectedPackage');
      if (selectedPackage) {
        navigate('/payment-confirmation');
      } else {
        navigate('/dashboard');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4 relative overflow-hidden">
      <NetworkBackground />
      
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20 relative z-10">
        <CardHeader className="text-center">
          <Link to="/" className="text-2xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity duration-200 mb-4 inline-block">
            V<span className="text-emerald-500">A</span>NT<span className="text-emerald-500">I</span>VE DIGITAL
          </Link>
          <CardTitle className="text-2xl font-bold text-white">Create Your Account</CardTitle>
          <CardDescription className="text-gray-300">
            Start your automation journey today
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <Alert className="bg-emerald-950/20 border-emerald-500/30">
              <Mail className="h-4 w-4 text-emerald-400" />
              <AlertDescription className="text-emerald-300">
                Email verification is required for all new accounts.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Company Name (Optional)</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password (min. 6 characters)"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-500"
                required
                minLength={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-emerald-500"
                required
                minLength={6}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptedTerms}
                onCheckedChange={handleTermsChange}
                className="border-white/20 text-emerald-500"
              />
              <Label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{' '}
                <Link to="/terms" className="text-emerald-400 hover:text-emerald-300 underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
