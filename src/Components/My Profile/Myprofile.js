import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './Myprofile.css'
import { Link } from 'react-router-dom';

const Myprofile = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [activeAssetTab, setActiveAssetTab] = useState('inputFinancing');
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Sample deals data
  const dealsData = {
    ongoing: [
      {
        id: 1,
        name: "Kisan Cotton FPC Ltd.",
        industry: "Cotton Processing",
        location: "Gujarat, India",
        revenue: "₹12 Cr",
        riskScore: 85,
        creditLimit: "₹2.5 Cr"
      },
      // Add more ongoing deals here
    ],
    completed: [
      // Add completed deals here
    ]
  };

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Input Financing Performance',
            data: [10, 15, 12, 18, 20, 25, 22, 30, 28, 35, 40, 45],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false,
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Investment Returns (₹)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Time'
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.dataset.label || '';
                  const value = context.raw || 0;
                  return `${label}: ₹${value.toLocaleString()}`;
                }
              }
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
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
          <div className="flex items-center space-x-6">
            <nav className="space-x-4">
              <Link to="/my-profile" className="hover:underline">FAQ</Link>
              <Link to="/my-profile" className="hover:underline">Products</Link>
              <Link to="/my-profile" className="hover:underline">About Us</Link>
              <Link to="/my-profile" className="hover:underline">How It Works</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-2xl font-bold text-gray-800">My Portfolio</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Download Report
          </button>
        </div>

        {/* Asset Tabs */}
        <div className="mb-4">
          <nav className="flex space-x-2">
            {['All Assets', 'Input Financing', 'ID Deals', 'WD Deals', 'Animal Loan Deals'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveAssetTab(tab.replace(/\s+/g, '').toLowerCase())}
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                  activeAssetTab === tab.replace(/\s+/g, '').toLowerCase() ? 'bg-blue-700' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Chart and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6" style={{ height: '400px' }}>
            <canvas ref={chartRef} id="inputFinancingChart"></canvas>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Key Financial Metrics</h2>
            <p><strong>IRR:</strong> 14%</p>
            <p><strong>Total Deals:</strong> 4</p>
            <p><strong>Ongoing Deals:</strong> 3</p>
            <p><strong>Completed Deals:</strong> 1</p>
            <p><strong>Return Stability Index:</strong> High</p>
          </div>
        </div>

        {/* Deals Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">My Deals</h2>
          <div className="mb-4">
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveTab('ongoing')}
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                  activeTab === 'ongoing' ? 'bg-blue-700' : ''
                }`}
              >
                Ongoing Deals
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                  activeTab === 'completed' ? 'bg-blue-700' : ''
                }`}
              >
                Completed Deals
              </button>
            </nav>
          </div>

          {activeTab === 'ongoing' && (
            <div className="space-y-4">
              {dealsData.ongoing.map((deal) => (
                <div key={deal.id} className="flex flex-col lg:flex-row items-center bg-blue-100 p-4 rounded-lg shadow hover:shadow-md transition-transform hover:-translate-y-0.5">
                  <div className="lg:w-1/3">
                    <h3 className="font-bold">{deal.name}</h3>
                    <p>Industry: {deal.industry}</p>
                    <p>Location: {deal.location}</p>
                  </div>
                  <div className="lg:w-1/3">
                    <p>Revenue: {deal.revenue}</p>
                    <p>Risk Score: {deal.riskScore}</p>
                  </div>
                  <div className="lg:w-1/3 flex justify-between items-center">
                    <p>Credit Limit: {deal.creditLimit}</p>
                    <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      View More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'completed' && (
            <div className="space-y-4">
              {dealsData.completed.length > 0 ? (
                dealsData.completed.map((deal) => (
                  // Render completed deals similarly
                  <div key={deal.id}>Completed deal details</div>
                ))
              ) : (
                <p className="text-gray-500">No completed deals to show</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;