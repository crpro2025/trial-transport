'use client';

import { useState, useEffect } from 'react';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { DemoDataBadge } from '@/components/DemoDataBadge';
import { User, Building, Mail, Phone, MapPin, CreditCard, Save, X, Upload, Camera } from 'lucide-react';

export default function ShipperProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'shipper@trial.com',
    phone: '(555) 123-4567',
    
    // Company Information
    companyName: 'BioTech Research Inc.',
    companyAddress: '123 Research Parkway',
    city: 'Boston',
    state: 'MA',
    zipCode: '02101',
    country: 'United States',
    
    // Billing Information
    taxId: '12-3456789',
    billingEmail: 'billing@biotechresearch.com',
    billingPhone: '(555) 123-4568',
  });

  useEffect(() => {
    // Check authentication
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'shipper') {
      window.location.href = '/login';
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // In production, this would save to backend
    console.log('Saving profile:', formData);
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <DashboardNavigation role="shipper" />
      <DemoDataBadge />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
          <p className="text-gray-300 mt-2">Manage your account information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Photo */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Profile Photo</h2>
              
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                    {profilePhoto ? (
                      <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <span>{formData.firstName[0]}{formData.lastName[0]}</span>
                    )}
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                      <Camera className="w-4 h-4" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-gray-300">{formData.companyName}</p>
                <p className="text-sm text-gray-400 mt-1">{formData.email}</p>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6 mt-6">
              <h2 className="text-lg font-semibold text-white mb-4">Account Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Shipments</span>
                  <span className="font-semibold text-white">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Active Shipments</span>
                  <span className="font-semibold text-white">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Member Since</span>
                  <span className="font-semibold text-white">Jan 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-white">Personal Information</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-white">Company Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-sm border border-white/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-white">Billing Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Tax ID / EIN
                  </label>
                  <input
                    type="text"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Billing Email
                  </label>
                  <input
                    type="email"
                    name="billingEmail"
                    value={formData.billingEmail}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Billing Phone
                  </label>
                  <input
                    type="tel"
                    name="billingPhone"
                    value={formData.billingPhone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 disabled:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex gap-4 justify-end">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 border border-white/30 text-gray-200 rounded-lg hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors font-medium flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}