
import { AuthForm } from '@/components/auth/AuthForm';
import { AuthGuard } from '@/components/auth/AuthGuard';

export default function Auth() {
  return (
    <AuthGuard requireAuth={false}>
      <AuthForm />
    </AuthGuard>
  );
}
