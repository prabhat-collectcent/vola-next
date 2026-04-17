'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { loginSchema } from "@/lib/validations/login";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { signIn } from 'next-auth/react';
import FormTextField from '@/components/form/fields/Text';
import FormPasswordField from '@/components/form/fields/Password';
import { useToast } from '@/components/toast/ToastProvider';
import Submit from '@/components/form/Submit';

export default function SignInForm() {

  const searchParams = useSearchParams();

  const hasShownToast = useRef(false);

  useEffect(() => {
    if (searchParams.get('success') === 'true' && !hasShownToast.current) {
      showToast(`registered successfully, your account has been sent to review, once its approved you'll recieved a confirmation email`, 'success');
      hasShownToast.current = true;
    }
  }, [searchParams]);


  const { showToast } = useToast();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const data = { email, password };

    const result = loginSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const key = String(err.path[0]);
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      console.log(fieldErrors);

      return false;
    }

    setErrors({});
    return true;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/admin/dashboard/home'
    });

    setLoading(false);


    if (result?.ok) {
      showToast('User logged in successfully!', 'success');
      router.replace('/admin/dashboard');
    } else {
      showToast(result?.error || 'Signin failed', 'error');
    }
  };

  const handleGoogle = async () => {
    const res = await fetch('/api/google_auth', { method: 'GET' });
    const data = await res.json();
    window.location.href = data.google_login_url;
  };

  return (
    <div className="w-full flex justify-center items-center px-4 relative">
      <div className="flex flex-col justify-center w-full max-w-[580px] min-h-[464px] rounded-[12px] shadow-[0px_0px_4px_2px_rgba(110,110,110,0.02)] bg-white py-[20px] px-[86px] max-sm:px-[16px]">
        <div className="text-center text-[24px] font-normal leading-[32px] mb-4 text-black">
          Sign in
        </div>

        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <FormTextField
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <FormPasswordField
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div className="text-right">
            <Link
              href="/auth/forgot-password"
              className="text-xs text-[#4144E6] font-normal"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center">
            <Submit text="Sign in" loading={loading} />
          </div>
        </form>

        <div className="flex justify-center items-center gap-[3px] mt-4">
          <span className="text-[11px]">No account yet?</span>
          <Link href="/auth/register" className="text-xs text-[#4144E6]">
            Sign up
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-[#00000080]">
          <span>Terms of Use</span>
          <span>|</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
