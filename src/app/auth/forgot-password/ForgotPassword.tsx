'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormTextField from '@/components/form/fields/Text';
import { useToast } from '@/components/toast/ToastProvider';
import Submit from '@/components/form/Submit';
import { sendPasswordResetLinkAction } from '@/actions/profile.actions';

export default function SignUpForm() {

  const [emailError, setEmailError] = useState('');

  const router = useRouter();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError('');

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setEmailError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }


    try {
      setLoading(true);
      const apiResponse: any = await sendPasswordResetLinkAction({ email });
      console.log('apiResponse', apiResponse);
      if (apiResponse?.success) {
        showToast('An email containing password reset link has been sent to you', 'success');
      } else {
        // @ts-ignore
        showToast(apiResponse?.message || 'Something went wrong', 'error');
      }

    } catch (error) {
      showToast((error as Error)?.message || 'Something went wrong', 'error');
    } finally {
      setLoading(false)
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
          Forgot password        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}
          className="space-y-[18px]">


          <FormTextField
            label=""
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (emailError) {
                setEmailError('');
              }
            }
            }
            error={emailError}
          />

          <div className="flex justify-center">
            <Submit text="Send email" loading={loading} />
          </div>
        </form>

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
