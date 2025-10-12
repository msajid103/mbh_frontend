import React from 'react'
import { User, Upload } from 'lucide-react';
const PersonalInfo = ({formData, handleChange }) => {
   return (
      <div className="space-y-8">
        {/* Profile Picture */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Profile Picture</h3>
          <p className="text-sm text-gray-600 mb-4">Upload your profile picture to personalize your account</p>

          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-gray-400" />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                <Upload className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">JPG, PNG or GIF. Max size of 5MB</p>
              <div className="flex gap-2">
                <button className="btn-secondary text-sm py-1.5 px-4">
                  Upload Image
                </button>
                <button className="text-sm text-red-600 hover:text-red-700 px-4">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
          <p className="text-sm text-gray-600 mb-4">Update your personal information and contact details</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Project manager"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age Range
              </label>
              <select
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                className="input-field"
              >
                <option value="18-29">18-29</option>
                <option value="30-39">30-39</option>
                <option value="40-49">40-49</option>
                <option value="50-59">50-59</option>
                <option value="60+">60+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal/Residential Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="input-field"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows="4"
                className="input-field resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PersonalInfo