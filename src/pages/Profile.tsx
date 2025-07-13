
import { AuthGuard } from '@/components/auth/AuthGuard';
import { UserProfileForm } from '@/components/profile/UserProfileForm';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Loader2 } from 'lucide-react';
import TechBackground from '@/components/TechBackground';

export default function Profile() {
  const { profile, loading, updateProfile } = useUserProfile();

  if (loading) {
    return (
      <AuthGuard>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <TechBackground />
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto">
          <UserProfileForm profile={profile} onProfileUpdate={updateProfile} />
        </div>
      </div>
    </AuthGuard>
  );
}
