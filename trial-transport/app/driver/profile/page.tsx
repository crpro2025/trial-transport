'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from 'next/navigation';
import { demoDriverProfile } from '@/lib/demo-data-extended';

export default function DriverProfile() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'personal' | 'vehicle' | 'equipment' | 'certifications'>('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(demoDriverProfile);

  useEffect(() => {
    if (!user || user.role !== 'driver') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user || user.role !== 'driver') {
    return null;
  }

  const handlePhotoUpload = (type: 'profile' | 'vehicle' | 'equipment') => {
    // In real app, would handle file upload
    alert(`Photo upload for ${type} - would open file picker`);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Driver Profile
                </h1>
                <p className="text-gray-400 mt-1">Manage your profile, vehicle, and certifications</p>
              </div>
              <div className="flex gap-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={() => router.push('/driver/dashboard')}
                      className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all"
                    >
                      ← Back
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Header */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={profile.personalInfo.photo || 'https://via.placeholder.com/150'}
                  alt={profile.personalInfo.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/50"
                />
                {isEditing && (
                  <button
                    onClick={() => handlePhotoUpload('profile')}
                    className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">{profile.personalInfo.name}</h2>
                <p className="text-gray-400 mb-4">{profile.personalInfo.email}</p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm font-medium">Status: {profile.status}</p>
                  </div>
                  <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <p className="text-blue-400 text-sm font-medium">★ {profile.rating} Rating</p>
                  </div>
                  <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                    <p className="text-purple-400 text-sm font-medium">{profile.totalDeliveries} Deliveries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">On-Time Rate</p>
              <p className="text-2xl font-bold text-green-400">{profile.onTimeRate}%</p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                  style={{ width: `${profile.onTimeRate}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Temperature Compliance</p>
              <p className="text-2xl font-bold text-blue-400">{profile.temperatureComplianceRate}%</p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                  style={{ width: `${profile.temperatureComplianceRate}%` }}
                ></div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <p className="text-gray-400 text-sm mb-1">Training Completed</p>
              <p className="text-2xl font-bold text-purple-400">{profile.trainingCompleted.length}/4</p>
              <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${(profile.trainingCompleted.length / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {(['personal', 'vehicle', 'equipment', 'certifications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'personal' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.personalInfo.name}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.personalInfo.email}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profile.personalInfo.phone}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={profile.personalInfo.dateOfBirth}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Address</label>
                  <input
                    type="text"
                    value={profile.personalInfo.address}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">City</label>
                  <input
                    type="text"
                    value={profile.personalInfo.city}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">State</label>
                  <input
                    type="text"
                    value={profile.personalInfo.state}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vehicle' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Vehicle Information</h3>
              
              {/* Vehicle Photos */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-3">Vehicle Photos</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {profile.vehicle.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                      <img src={photo} alt={`Vehicle ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {isEditing && (
                    <button
                      onClick={() => handlePhotoUpload('vehicle')}
                      className="aspect-video rounded-lg border-2 border-dashed border-white/20 hover:border-blue-500 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Make</label>
                  <input
                    type="text"
                    value={profile.vehicle.make}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Model</label>
                  <input
                    type="text"
                    value={profile.vehicle.model}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Year</label>
                  <input
                    type="number"
                    value={profile.vehicle.year}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Color</label>
                  <input
                    type="text"
                    value={profile.vehicle.color}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">License Plate</label>
                  <input
                    type="text"
                    value={profile.vehicle.licensePlate}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Capacity</label>
                  <input
                    type="text"
                    value={profile.vehicle.capacity}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white disabled:opacity-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={profile.vehicle.temperatureControlled}
                      disabled={!isEditing}
                      className="w-5 h-5 rounded border-white/20"
                    />
                    <span className="text-white">Temperature Controlled Vehicle</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'equipment' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Equipment Inventory</h3>
                {isEditing && (
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all">
                    + Add Equipment
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {profile.equipment.map((item) => (
                  <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={item.photos[0]}
                        alt={item.model}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-white font-medium">{item.brand} {item.model}</h4>
                            <p className="text-gray-400 text-sm">{item.type.replace('_', ' ')}</p>
                          </div>
                          {isEditing && (
                            <button className="text-red-400 hover:text-red-300">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Capacity</p>
                            <p className="text-white">{item.capacity}</p>
                          </div>
                          {item.temperatureRange && (
                            <div>
                              <p className="text-gray-400">Temperature Range</p>
                              <p className="text-white">{item.temperatureRange}</p>
                            </div>
                          )}
                          {item.lastInspection && (
                            <div>
                              <p className="text-gray-400">Last Inspection</p>
                              <p className="text-white">{new Date(item.lastInspection).toLocaleDateString()}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Certifications & Documents</h3>
                {isEditing && (
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all">
                    + Upload Document
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {profile.certifications.map((cert) => (
                  <div key={cert.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-white font-medium">{cert.type.replace('_', ' ').toUpperCase()}</h4>
                          {cert.verified && (
                            <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-xs">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Number</p>
                            <p className="text-white">{cert.number}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Issued By</p>
                            <p className="text-white">{cert.issuedBy}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Issued Date</p>
                            <p className="text-white">{new Date(cert.issuedDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Expires</p>
                            <p className={`font-medium ${
                              new Date(cert.expirationDate) < new Date() ? 'text-red-400' : 'text-white'
                            }`}>
                              {new Date(cert.expirationDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1 border border-white/20 rounded hover:bg-white/5 transition-colors text-sm">
                        View
                      </button>
                    </div>
                  </div>
                ))}

                {/* Insurance */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-2">Commercial Insurance</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Provider</p>
                          <p className="text-white">{profile.insurance.provider}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Policy Number</p>
                          <p className="text-white">{profile.insurance.policyNumber}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Coverage</p>
                          <p className="text-white">${profile.insurance.coverageAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Expires</p>
                          <p className="text-white">{new Date(profile.insurance.expirationDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                    <button className="px-3 py-1 border border-white/20 rounded hover:bg-white/5 transition-colors text-sm">
                      View
                    </button>
                  </div>
                </div>

                {/* Background Check */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-medium">Background Check</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          profile.backgroundCheck.status === 'approved'
                            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                            : 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400'
                        }`}>
                          {profile.backgroundCheck.status}
                        </span>
                      </div>
                      {profile.backgroundCheck.completedAt && (
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Completed</p>
                            <p className="text-white">{new Date(profile.backgroundCheck.completedAt).toLocaleDateString()}</p>
                          </div>
                          {profile.backgroundCheck.expirationDate && (
                            <div>
                              <p className="text-gray-400">Expires</p>
                              <p className="text-white">{new Date(profile.backgroundCheck.expirationDate).toLocaleDateString()}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}