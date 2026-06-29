'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Text from '@/components/admin/form/fields/Text';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { getProfileAction, updatePasswordAction, updateProfileAction } from '@/actions/profile.actions';
import { set } from 'zod';
import { useToast } from '@/components/toast/ToastProvider';

interface Props {
  onClose: () => void;
}

export default function MyAccountModal({ onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { showToast } = useToast();

  const [user, setUser] = useState<any>(null);

  // Profile states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchUserProfile() {
      const result = await getProfileAction();
      if (result.success) {
        const userData = (result as any).data.user;

        setUser(userData);

        // populate fields
        setFirstName(userData.firstname || '');
        setLastName(userData.lastname || '');
        setEmail(userData.email || '');
      } else {
        showToast(result.message || 'Failed to fetch user profile', 'error');
      }

    }
    fetchUserProfile();
  }, []);


  // Password states
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsEditing(false);
  }, [activeTab]);


  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mounted]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    setErrors({});
  }, [activeTab]);

  const validateProfile = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveProfile = async () => {
    if (!validateProfile()) return;

    try {
      setIsSaving(true);

      const payload = {
        firstname: firstName,
        lastname: lastName,
      };

      const result = await updateProfileAction(payload);

      if ((result as any)?.success) {
        setUser((prev: any) => ({
          ...prev,
          ...payload,
        }));

        setIsEditing(false);
      } else {
        // handle API error response
        console.error(result);
      }
    } catch (error) {
      console.error('Update profile failed:', error);
    } finally {
      setIsSaving(false);
    }
  };


  const validatePassword = () => {
    const newErrors: Record<string, string> = {};
    if (!oldPassword) newErrors.oldPassword = 'Old password is required';
    if (!newPassword) newErrors.newPassword = 'New password is required';
    if (newPassword.length < 8)
      newErrors.newPassword = 'Minimum 8 characters required';
    if (!confirmPassword)
      newErrors.confirmPassword = 'Confirm password is required';
    if (newPassword !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSavePassword() {
    console.log("validating password")
    if (!validatePassword()) return;

    try {

      const payload = {
        old_password: oldPassword,
        new_password: newPassword,
      };

      const result = await updatePasswordAction(payload);

      if ((result as any)?.success) {
        setNewPassword("");
        setOldPassword("");
        setConfirmPassword("");
        alert("Password updated successfully");
      } else {
        console.error(result);
      }
    } catch (error) {
      // @ts-ignore
      setErrors({ general: error.message || "Something went wrong" });
      // @ts-ignore
      console.error('Update password failed:', error);
    }

  }

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* Modal */}
      <div
        className="
          relative w-full max-w-[764px]
          h-[90vh] md:h-[490px]
          bg-white rounded-2xl
          shadow-[0px_0px_12px_rgba(0,0,0,0.12)]
          outline outline-1 outline-neutral-100
          flex flex-col md:flex-row
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-40 border-r border-gray-200 pt-6 pb-5 flex-col">
          <div className="flex items-center gap-2 px-4 mb-6 text-sm text-black">
            <PersonOutlineIcon sx={{ fontSize: 18 }} />
            My Account
          </div>

          <button
            onClick={() => setActiveTab('profile')}
            className={`relative px-4 py-3 text-sm text-left ${activeTab === 'profile' ? 'bg-[#FBF7FB]' : ''
              }`}
          >
            Profile Settings
          </button>

          <button
            onClick={() => setActiveTab('password')}
            className={`relative px-4 py-3 text-sm text-left ${activeTab === 'password' ? 'bg-[#FBF7FB]' : ''
              }`}
          >
            Change Password
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col min-h-0 px-6 md:px-16 py-8">
          {/* Mobile Tabs */}
          <div className="md:hidden flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-2 text-sm ${activeTab === 'profile'
                ? 'border-b-2 border-indigo-800 text-black'
                : 'text-neutral-500'
                }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`flex-1 py-2 text-sm ${activeTab === 'password'
                ? 'border-b-2 border-indigo-800 text-black'
                : 'text-neutral-500'
                }`}
            >
              Password
            </button>
          </div>

          {/* Scroll Area */}
          <div className="flex-1 overflow-y-auto pr-2 pb-4 small-scrollbar min-h-0">
            {activeTab === 'profile' ? (
              <>
                <div className="text-lg text-center text-black mb-6">
                  Basic Information
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Text
                      label="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className={`flex-1 ${!isEditing ? 'opacity-60 cursor-not-allowed' : ''}`}
                      error={errors.firstName}
                      disabled={!isEditing}

                    />
                    <Text
                      label="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      className={`flex-1 ${!isEditing ? 'opacity-60 cursor-not-allowed' : ''}`}
                      error={errors.lastName}
                      disabled={!isEditing}
                    />
                  </div>

                  <Text
                    label="Email"
                    name="email"
                    value={email}
                    className={`flex-1 opacity-60 cursor-not-allowed`}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    error={errors.email}
                    disabled={true}
                  />

                </div>
              </>
            ) : (
              <>
                <div className="text-lg text-center text-black mb-6">
                  Change Password
                </div>

                <div className="flex flex-col gap-6">
                  <Text
                    label="Old Password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    type="password"
                    error={errors.oldPassword}
                  />
                  <Text
                    label="New Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    error={errors.newPassword}
                  />
                  <Text
                    label="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    error={errors.confirmPassword}
                  />
                </div>
              </>
            )}
          </div>

          {errors.general && (
            <div className="text-red-500 text-sm text-center">
              {errors.general}
            </div>
          )}

          {/* Fixed Bottom Button */}
          <div className="pt-6">
            {activeTab === 'profile' ? (
              !isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full h-9 px-4 py-2.5 bg-[#FBF7FB] rounded-xl outline outline-1 outline-[#F0E6FF] text-xs text-black"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="w-full h-9 px-4 py-2.5 bg-[#FBF7FB] rounded-xl outline outline-1 outline-[#F0E6FF] text-xs text-black disabled:opacity-60"
                >
                  {isSaving ? 'Saving...' : 'Save Profile'}
                </button>
              )
            ) : (
              <button
                onClick={handleSavePassword}
                className="w-full h-9 px-4 py-2.5 bg-[#FBF7FB] rounded-xl outline outline-1 outline-[#F0E6FF] text-xs text-black"
              >
                Save Password
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
