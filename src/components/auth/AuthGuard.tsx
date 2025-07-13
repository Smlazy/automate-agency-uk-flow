
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireEmailVerified?: boolean;
}

export function AuthGuard({ children, requireAuth = true, requireEmailVerified = false }: AuthGuardProps) {
  const { user, loading, session } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        setIsRedirecting(true);
        navigate('/auth', { state: { from: location }, replace: true });
      } else if (!requireAuth && user) {
        const from = location.state?.from?.pathname || '/';
        setIsRedirecting(true);
        navigate(from, { replace: true });
      } else if (requireEmailVerified && user && !user.email_confirmed_at) {
        // User exists but email not verified
        return;
      }
    }
  }, [user, loading, requireAuth, requireEmailVerified, navigate, location]);

  if (loading || isRedirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin mb-4" />
            <p className="text-sm text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check if email verification is required but not completed
  if (requireEmailVerified && user && !user.email_confirmed_at) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="mx-auto h-12 w-12 text-amber-500 mb-4" />
            <CardTitle className="text-2xl font-bold">Email Verification Required</CardTitle>
            <CardDescription>
              Please verify your email address to access this page. Check your inbox for a verification link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate('/auth')}
            >
              Back to Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Validate session integrity
  if (requireAuth && user && !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="mx-auto h-12 w-12 text-destructive mb-4" />
            <CardTitle className="text-2xl font-bold">Session Invalid</CardTitle>
            <CardDescription>
              Your session has expired. Please sign in again.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full"
              onClick={() => navigate('/auth')}
            >
              Sign In Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show children if all conditions are met
  if (!requireAuth || (user && (!requireEmailVerified || user.email_confirmed_at))) {
    return <>{children}</>;
  }

  // Fallback - shouldn't reach here normally
  return null;
}
