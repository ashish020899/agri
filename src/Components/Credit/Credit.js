import React from "react";
import './Credit.css'
import { Link } from "react-router-dom";

export default function Credit() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [sortBy, setSortBy] = React.useState('riskScore');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const businessProfiles = [
      {
        id: 1,
        name: "Kisan Cotton FPC Ltd.",
        industry: "Cotton Processing",
        location: "Gujarat, India",
        revenue: "₹12 Cr",
        riskScore: 85,
        creditLimit: "₹2.5 Cr",
        status: "Approved",
        members: "1,200 farmers"
      },
      {
        id: 2,
        name: "Organic Rice Farmers FPO",
        industry: "Rice Processing",
        location: "Punjab, India",
        revenue: "₹8 Cr",
        riskScore: 92,
        creditLimit: "₹1.5 Cr",
        status: "Approved",
        members: "850 farmers"
      },
      {
        id: 3,
        name: "Sahyadri Farmers Collective",
        industry: "Multi-crop Processing",
        location: "Maharashtra, India",
        revenue: "₹15 Cr",
        riskScore: 78,
        creditLimit: "₹3 Cr",
        status: "Under Review",
        members: "2,000 farmers"
      },
      {
        id: 4,
        name: "Spice Growers FPC",
        industry: "Spice Processing",
        location: "Kerala, India",
        revenue: "₹6 Cr",
        riskScore: 73,
        creditLimit: "₹1 Cr",
        status: "Pending",
        members: "450 farmers"
      },
      {
        id: 5,
        name: "Millet Processing FPO",
        industry: "Millet Processing",
        location: "Karnataka, India",
        revenue: "₹9 Cr",
        riskScore: 88,
        creditLimit: "₹2 Cr",
        status: "Approved",
        members: "750 farmers"
      },
      {
        id: 6,
        name: "Tea Growers Cooperative",
        industry: "Tea Processing",
        location: "Assam, India",
        revenue: "₹10 Cr",
        riskScore: 82,
        creditLimit: "₹2.2 Cr",
        status: "Approved",
        members: "1,000 farmers"
      }
    ];
  
    const filteredProfiles = businessProfiles
      .filter(profile => 
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b[sortBy] - a[sortBy]);
  
    const handleSearch = (e) => {
      e.preventDefault();
      console.log("Searching for:", searchTerm);
    };
  
    const handleAnalyze = () => {
      setIsModalOpen(true);
    };
  
    const handleAnalysisSelection = (type) => {
      console.log(`Selected ${type} analysis`);
      setIsModalOpen(false);
    };
  
    const handleViewDetails = (profile) => {
      console.log("Viewing details for:", profile);
    };
  
    return (
      <>
        <div className="bg-green-600 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
              <h1 className="text-2xl font-bold">AgriCred</h1>
            </div>
            <nav className="space-x-6">
              <Link to="/investment-opportunities" className="hover:text-green-200">Dashboard</Link>
              <a href="investments.html" className="hover:text-green-200">Investments</a>
              <Link to="/my-profile" className="hover:text-green-200">Profile</Link>
              <a href="support.html" className="hover:text-green-200">Support</a>
            </nav>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto">
          {/* Header with DateTime and User */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Credit Risk Dashboard</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              {/* User info can be added here */}
            </div>
          </div>
  
          {/* Main Functions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Data Analysis Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h2 className="text-xl font-bold">Data Analysis</h2>
              </div>
              <div className="space-y-4">
                <div className="text-gray-600">
                  <p className="mb-2">Get comprehensive insights into your client portfolio with our advanced analytics tools.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Risk assessment and scoring</li>
                    <li>Credit limit recommendations</li>
                    <li>Portfolio performance metrics</li>
                    <li>Trend analysis and forecasting</li>
                  </ul>
                </div>
                <button 
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  onClick={handleAnalyze}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Get Started</span>
                </button>
              </div>
            </div>
  
            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Search Business Profiles</h2>
              <div className="space-y-4">
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search by name, industry, or location..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Search
                  </button>
                </form>
                <select 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="riskScore">Sort by Risk Score</option>
                  <option value="id">Sort by Latest</option>
                </select>
              </div>
            </div>
          </div>
  
          {/* Modal */}
          {isModalOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Select Analysis Type</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <button 
                    onClick={() => handleAnalysisSelection('individual')}
                    className="w-full p-4 text-left bg-white border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Individual Portfolio Analysis</h4>
                        <p className="text-sm text-gray-600">Analyze credit risk for individual farmers or businesses</p>
                      </div>
                    </div>
                  </button>
  
                  <button 
                    onClick={() => handleAnalysisSelection('financial')}
                    className="w-full p-4 text-left bg-white border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Financial Portfolio Analysis</h4>
                        <p className="text-sm text-gray-600">Comprehensive analysis of entire financial portfolio</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
  
          {/* Existing Profiles Heading */}
          <div className="flex items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Existing Business Profiles</h2>
          </div>
  
          {/* Business Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProfiles.map(profile => (
              <div key={profile.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{profile.name}</h3>
                    <p className="text-sm text-gray-600">{profile.industry}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    profile.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    profile.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {profile.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Members:</span>
                    <span>{profile.members}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Revenue:</span>
                    <span>{profile.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Credit Limit:</span>
                    <span>{profile.creditLimit}</span>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-gray-600">Risk Score</span>
                      <span className={`font-medium ${
                        profile.riskScore >= 80 ? 'text-green-600' :
                        profile.riskScore >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {profile.riskScore}/100
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-full rounded-full ${
                          profile.riskScore >= 80 ? 'bg-green-500' :
                          profile.riskScore >= 60 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${profile.riskScore}%` }}
                      />
                    </div>
                  </div>
                  <button
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => handleViewDetails(profile)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }