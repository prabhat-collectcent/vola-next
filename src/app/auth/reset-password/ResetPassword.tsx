'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useState, startTransition } from 'react';
import FormTextField from '@/components/form/fields/Text';
import FormPasswordField from '@/components/form/fields/Password';

import { useToast } from '@/components/toast/ToastProvider';
import Submit from '@/components/form/Submit';
import { resetPasswordAction } from '@/actions/profile.actions';

export default function SignUpForm() {

    const router = useRouter();
    const { showToast } = useToast();
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const searchParams = useSearchParams();

    const token = decodeURIComponent(searchParams.get('token') || '');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password != repeatPassword) {
            setError("Password does not match");
            return;
        }
        try {
            setLoading(true);
            const apiResponse: any = await resetPasswordAction({ token, password });
            console.log('apiResponse', apiResponse);
            if (apiResponse?.success) {
                showToast('Your password has been reset successfully', 'success');
                router.push('/auth/login')
            } else {
                // @ts-ignore
                showToast(apiResponse?.message || 'Something went wrong', 'error');
            }

        } catch (error) {
            showToast((error as Error)?.message || 'Something went wrong', 'error');
        } finally {
            setLoading(false)
        }

        setError('')

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
                    Reset password        </div>

                {/* Form */}
                <form onSubmit={handleSubmit}
                    className="space-y-[18px]">


                    <FormPasswordField
                        label=""
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormPasswordField
                        label=""
                        name="repeatPassword"
                        placeholder="Confirm Password"
                        value={repeatPassword}
                        error={ error}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />


                    <div className="flex justify-center">
                        <Submit text="Reset Password" loading={loading} />
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
