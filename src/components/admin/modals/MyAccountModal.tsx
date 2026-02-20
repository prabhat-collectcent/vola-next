'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Text from '@/components/admin/form/fields/Text';
import Select from '@/components/admin/form/fields/Select';
import Textarea from '@/components/admin/form/fields/Textarea';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface Props {
  onClose: () => void;
}

export default function MyAccountModal({ onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');

  // Profile states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  // Password states
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

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
    if (!company.trim()) newErrors.company = 'Company is required';
    if (!country) newErrors.country = 'Country is required';
    if (!timezone) newErrors.timezone = 'Time zone is required';
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!city.trim()) newErrors.city = 'City is required';
    if (!zipcode.trim()) newErrors.zipcode = 'Zipcode is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
            className={`relative px-4 py-3 text-sm text-left ${
              activeTab === 'profile' ? 'bg-[#FBF7FB]' : ''
            }`}
          >
            Profile Settings
          </button>

          <button
            onClick={() => setActiveTab('password')}
            className={`relative px-4 py-3 text-sm text-left ${
              activeTab === 'password' ? 'bg-[#FBF7FB]' : ''
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
              className={`flex-1 py-2 text-sm ${
                activeTab === 'profile'
                  ? 'border-b-2 border-indigo-800 text-black'
                  : 'text-neutral-500'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`flex-1 py-2 text-sm ${
                activeTab === 'password'
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
                      onChange={(v) => setFirstName(v)}
                      placeholder="First Name"
                      className="flex-1"
                      error={errors.firstName}
                    />
                    <Text
                      label="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={(v) => setLastName(v)}
                      placeholder="Last Name"
                      className="flex-1"
                      error={errors.lastName}
                    />
                  </div>

                  <Text
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(v) => setEmail(v)}
                    placeholder="demo@vola.ad"
                    error={errors.email}
                  />

                  <Text
                    label="Company"
                    name="company"
                    value={company}
                    onChange={(v) => setCompany(v)}
                    placeholder="Collectcent"
                    error={errors.company}
                  />

                  <div className="flex flex-col md:flex-row gap-4">
                    <Select
                      label="Country"
                      name="country"
                      value={country}
                      onChange={(v) => setCountry(v)}
                      placeholder="Select Country"
                      options={[
                        { label: 'India', value: 'india' },
                        { label: 'USA', value: 'usa' },
                      ]}
                      className="flex-1"
                      error={errors.country}
                    />
                    <Select
                      label="Time Zone"
                      name="timezone"
                      value={timezone}
                      onChange={(v) => setTimezone(v)}
                      placeholder="Select Timezone"
                      options={[
                        { label: 'IST', value: 'ist' },
                        { label: 'UTC', value: 'utc' },
                      ]}
                      className="flex-1"
                      error={errors.timezone}
                    />
                  </div>

                  <Textarea
                    label="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    error={errors.address}
                  />

                  <div className="flex flex-col md:flex-row gap-4">
                    <Text
                      label="City"
                      name="city"
                      value={city}
                      onChange={(v) => setCity(v)}
                      placeholder="Enter City"
                      className="flex-1"
                      error={errors.city}
                    />
                    <Text
                      label="Zipcode"
                      name="zipcode"
                      value={zipcode}
                      onChange={(v) => setZipcode(v)}
                      placeholder="122002"
                      className="flex-1"
                      error={errors.zipcode}
                    />
                  </div>
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
                    onChange={(v) => setOldPassword(v)}
                    type="password"
                    error={errors.oldPassword}
                  />
                  <Text
                    label="New Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(v) => setNewPassword(v)}
                    type="password"
                    error={errors.newPassword}
                  />
                  <Text
                    label="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(v) => setConfirmPassword(v)}
                    type="password"
                    error={errors.confirmPassword}
                  />
                </div>
              </>
            )}
          </div>

          {/* Fixed Bottom Button */}
          <div className="pt-6">
            <button
              onClick={() =>
                activeTab === 'profile' ? validateProfile() : validatePassword()
              }
              className="w-full h-9 px-4 py-2.5 bg-[#FBF7FB] rounded-xl outline outline-1 outline-[#F0E6FF] text-xs text-black"
            >
              {activeTab === 'profile' ? 'Save Profile' : 'Save Password'}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
