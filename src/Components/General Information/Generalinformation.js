import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generalinformation.css';

export default function Generalinformation() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    constitution: '',
    address: '',
    caste: '',
    pan: '',
    gst: '',
    totalExperience: '',
    farmingType: '',
    crops: [],
    training: '',
    additionalDetails: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        crops: checked 
          ? [...prev.crops, value] 
          : prev.crops.filter(crop => crop !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 pt-4 flex flex-col">
        <div className="px-4 pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-green-700">AgriCred</h2>
          <p className="text-sm text-gray-600">Complete your profile</p>
        </div>

        <nav className="px-2 pt-3 flex-1">
          <Link to="/" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
            <span className="text-sm">Registration</span>
          </Link>

          <Link to="/farm-details" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
            <span className="text-sm">Farmstead</span>
          </Link>

          <Link to="/general-information" className="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
            <span className="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">3</span>
            <span className="text-sm">General Information</span>
          </Link>

          <Link to="/proof" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">4</span>
            <span className="text-sm">Proof</span>
          </Link>

          <Link to="/education" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">5</span>
            <span className="text-sm">Education</span>
          </Link>

          <Link to="/contact" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">6</span>
            <span className="text-sm">Contact</span>
          </Link>

          <Link to="/property" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">7</span>
            <span className="text-sm">Property</span>
          </Link>

          <Link to="/final-step" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
            <span className="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">8</span>
            <span className="text-sm">Final Step</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">General Information</h1>
            <p className="text-gray-600 text-sm">Please provide your personal and business details</p>
          </div>

          <div className="card p-6 bg-white rounded-lg shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name of Applicant
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter age"
                  />
                </div>
              </div>

              {/* Gender and Legal Constitution */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-700">Female</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                        className="text-green-600 focus:ring-green-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm text-gray-700">Other</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="constitution" className="block text-sm font-medium text-gray-700 mb-1">
                    Legal Constitution
                  </label>
                  <select
                    id="constitution"
                    name="constitution"
                    value={formData.constitution}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select constitution type</option>
                    <option value="FPC">FPC</option>
                    <option value="FPO">FPO</option>
                    <option value="SHG">SHG</option>
                    <option value="MSME">MSME</option>
                    <option value="trust">Trust</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              {/* Caste */}
              <div>
                <label htmlFor="caste" className="block text-sm font-medium text-gray-700 mb-1">
                  Caste
                </label>
                <input
                  type="text"
                  id="caste"
                  name="caste"
                  value={formData.caste}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter caste"
                />
              </div>

              {/* PAN and GST */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pan" className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    id="pan"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter PAN number"
                  />
                </div>

                <div>
                  <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-1">
                    GST Number
                  </label>
                  <input
                    type="text"
                    id="gst"
                    name="gst"
                    value={formData.gst}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter GST number"
                  />
                </div>
              </div>

              {/* Farming Experience Section */}
              <div className="card p-6 mt-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Farming Experience</h3>
                <div className="space-y-6">
                  {/* Years of Experience */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="totalExperience" className="block text-sm font-medium text-gray-700 mb-1">
                        Total Years of Farming Experience
                      </label>
                      <input
                        type="number"
                        id="totalExperience"
                        name="totalExperience"
                        value={formData.totalExperience}
                        onChange={handleChange}
                        min="0"
                        max="99"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter years of experience"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="farmingType" className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Type of Farming
                      </label>
                      <select
                        id="farmingType"
                        name="farmingType"
                        value={formData.farmingType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select farming type</option>
                        <option value="crop">Crop Farming</option>
                        <option value="dairy">Dairy Farming</option>
                        <option value="poultry">Poultry Farming</option>
                        <option value="mixed">Mixed Farming</option>
                        <option value="organic">Organic Farming</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Crops & Activities */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Major Crops/Activities (Check all that apply)
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rice"
                          name="crops"
                          value="rice"
                          checked={formData.crops.includes('rice')}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="rice">Rice</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="wheat"
                          name="crops"
                          value="wheat"
                          checked={formData.crops.includes('wheat')}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="wheat">Wheat</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="pulses"
                          name="crops"
                          value="pulses"
                          checked={formData.crops.includes('pulses')}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="pulses">Pulses</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="vegetables"
                          name="crops"
                          value="vegetables"
                          checked={formData.crops.includes('vegetables')}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="vegetables">Vegetables</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="fruits"
                          name="crops"
                          value="fruits"
                          checked={formData.crops.includes('fruits')}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="fruits">Fruits</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="dairy"
                          name="crops"
                          value="dairy"
                          checked={formData.crops.includes('dairy')}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="dairy">Dairy</label>
                      </div>
                    </div>
                  </div>

                  {/* Training */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Have you received any agricultural training?
                    </label>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="training_yes"
                          name="training"
                          value="yes"
                          checked={formData.training === 'yes'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="training_yes">Yes</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="training_no"
                          name="training"
                          value="no"
                          checked={formData.training === 'no'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="training_no">No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Income Form - Would be a separate component */}
              <div id="incomeFormRoot"></div>

              {/* Additional Details */}
              <div>
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details/Special Skills
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  rows="3"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter any additional farming experience or special skills"
                ></textarea>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                <Link to="/farm-details" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                  Back
                </Link>
                <Link to="/proof" className="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                  Continue
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}