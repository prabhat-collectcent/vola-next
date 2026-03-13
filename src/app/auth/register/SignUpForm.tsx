'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useState, startTransition } from 'react';
import { signupSchema } from "@/lib/validations/signup";
import { useRef } from "react";
import FormTextField from '@/components/form/fields/Text';
import FormPasswordField from '@/components/form/fields/Password';
import Link from 'next/link';
import { useToast } from '@/components/toast/ToastProvider';
import Submit from '@/components/form/Submit';
import { signupAction } from './actions';

export default function SignUpForm() {

  const [state, formAction, isPending] = useActionState(signupAction, {});

  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);


  const router = useRouter();
  const { showToast } = useToast();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const data = { firstname, lastname, email, password, repeatPassword };

    const result = signupSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const key = String(err.path[0]);
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (formRef.current) {
      startTransition(() => {
        formAction(new FormData(formRef.current!));
      });
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
        <form ref={formRef} onSubmit={handleSubmit}
          className="space-y-[18px]">

          {/* Server Error Message */}
          {state.error && (
            <div className="rounded bg-red-100 p-3 text-sm text-red-600">
              {state.error}
            </div>
          )}

          <FormTextField
            label=""
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            error={errors.firstname || state.fieldErrors?.firstname}

          />

          <FormTextField
            label=""
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            error={errors.lastname || state.fieldErrors?.lastname}
          />

          <FormTextField
            label=""
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email || state.fieldErrors?.email}
          />

          <FormPasswordField
            label=""
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password || state.fieldErrors?.password}
          />

          <FormPasswordField
            label=""
            name="repeatPassword"
            placeholder="Confirm Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            error={errors.repeatPassword || state.fieldErrors?.repeatPassword}
          />

          <div className="flex justify-center">
            <Submit text="Sign up" loading={isPending} />
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
