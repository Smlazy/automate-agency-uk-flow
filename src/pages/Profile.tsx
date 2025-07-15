
import { AuthGuard } from '@/components/auth/AuthGuard';
import { UserProfileForm } from '@/components/profile/UserProfileForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';

export default function Profile() {
  return (
    <AuthGuard>
      <div className="relative min-h-screen bg-[#0F0F0F]">
        <NetworkBackground />
        <Header />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Profile Settings</h1>
            <UserProfileForm />
          </div>
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}
