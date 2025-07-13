
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        // Redirect to auth page if authentication is required but user is not logged in
        navigate('/auth', { state: { from: location }, replace: true });
      } else if (!requireAuth && user) {
        // Redirect authenticated users away from auth page
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      }
    }
  }, [user, loading, requireAuth, navigate, location]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Show children if:
  // - Auth is not required, OR
  // - Auth is required and user is authenticated
  if (!requireAuth || user) {
    return <>{children}</>;
  }

  // Don't render anything while redirecting
  return null;
}
