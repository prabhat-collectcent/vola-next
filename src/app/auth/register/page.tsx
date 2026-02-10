'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import FormTextField from '@/components/form/fields/Text';
import FormPasswordField from '@/components/form/fields/Password';
import Link from 'next/link';
import { useToast } from '@/components/toast/ToastProvider';
import Submit from '@/components/form/Submit';

export default function SignUpPage() {
  const router = useRouter();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<{
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
  }>({});

  const getPasswordStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-zA-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getPasswordStrength();

  const repeatError =
    repeatPassword.length > 0 && repeatPassword !== password
      ? 'Passwords do not match'
      : '';

  const { status } = useSession();

  const { showToast } = useToast();

  useEffect(() => {
    if (status === 'authenticated') {
      // showToast(
      //   'User registered successfully, please fill additional details',
      //   'success'
      // );
      // router.replace('/auth/onboarding');
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!firstname) newErrors.firstname = 'Firstname is required';

    if (!lastname) newErrors.lastname = 'Lastname is required';

    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = 'Enter a valid email';

    if (strength < 4)
      newErrors.password =
        'Password must include letters, numbers, and symbols, min 8 chars.';

    if (repeatPassword !== password)
      newErrors.repeatPassword = 'Passwords do not match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    const result = await signIn('credentials', {
      email,
      password,
      type: 'signup',
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      showToast(result.error || 'Signup failed', 'error');
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-4 relative">
      {/* Container */}
      <div
        className="flex flex-col justify-center w-full max-w-[580px] min-h-[464px]
          bg-white rounded-[12px]
          shadow-[0px_0px_4px_2px_rgba(110,110,110,0.02)]
          py-[20px] px-[86px]
          max-sm:px-[16px]"
      >
        {/* Title */}
        <div className="text-center text-[24px] font-normal leading-[32px] mb-[17px]">
          Sign up
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <FormTextField
            label=""
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            error={errors.firstname}
          />

          <FormTextField
            label=""
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            error={errors.lastname}
          />

          <FormTextField
            label=""
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <FormPasswordField
            label=""
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <FormPasswordField
            label=""
            name="repeatPassword"
            placeholder="Confirm Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            error={errors.repeatPassword || repeatError}
          />

          <div className="flex justify-center">
            <Submit text="Sign up" loading={loading} />
          </div>
        </form>

        {/* Login Link */}
        <div className="flex justify-center gap-1 text-[11px] mt-[18px]">
          <span className="text-[#000]">I already have an account?</span>
          <Link href="/auth/login" className="text-[#4144E6]">
            Sign in
          </Link>
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center gap-2 text-[11px] mt-[18px] text-[#00000080]">
          <div>Terms of Use</div>
          <div>|</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
