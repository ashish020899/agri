import React from "react";
import './Mill.css'
import { Link } from "react-router-dom";

export default function Mill() {
    const [investmentAmount, setInvestmentAmount] = React.useState(50000);
    const [currentDateTime, setCurrentDateTime] = React.useState('');
    
    const expectedReturn = (amount) => amount * 0.12;
  
    const recentActivities = [
      { date: "2025-02-01", activity: "Credit card payment", impact: "Positive" },
      { date: "2025-01-15", activity: "Loan inquiry", impact: "Neutral" },
      { date: "2025-01-10", activity: "Bill payment", impact: "Positive" }
    ];
  
    const recommendations = [
      "Maintain current credit utilization below 30%",
      "Continue timely bill payments",
      "Consider diversifying credit mix"
    ];
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
        setCurrentDateTime(formattedDate);
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const handleSliderChange = (e) => {
      const value = Math.max(50000, Math.min(1000000, parseInt(e.target.value)));
      setInvestmentAmount(value);
    };
  
    return (
      <div className="max-w-6xl mx-auto">
        {/* Header with DateTime and User */}
        <div className="mb-6 flex justify-between items-center">
          <Link to="/investment-opportunities" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </Link>
          <div className="text-sm text-gray-600">
            {currentDateTime}
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Mill Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">ABC Mill Details</h1>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  Rating: AAA
                </span>
              </div>
  
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>156 investors</span>
                  </div>
                  <span className="text-gray-600">₹1.25 Cr remaining</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-3/4"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-green-600">₹3.75 Cr invested</span>
                  <span>Target: ₹5 Cr</span>
                </div>
              </div>
  
              {/* Mill Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-gray-600">Total Investment</div>
                  <div className="text-xl font-bold">₹5 Cr</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-gray-600">Expected Returns</div>
                  <div className="text-xl font-bold">12% p.a.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-gray-600">Duration</div>
                  <div className="text-xl font-bold">6 months</div>
                </div>
              </div>
            </div>
  
            {/* Company Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Company Overview</h2>
              <p className="text-gray-600 mb-6">
                ABC Mill is a leading textile manufacturing company with over 20 years of operational history.
                The company specializes in cotton processing and yarn production.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Industry</span>
                  <span className="font-medium">Textile Manufacturing</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Years in Operation</span>
                  <span className="font-medium">20+ years</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Annual Revenue</span>
                  <span className="font-medium">₹50 Cr+</span>
                </div>
              </div>
            </div>
  
            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <div className="font-medium">{activity.activity}</div>
                      <div className="text-sm text-gray-600">{activity.date}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      activity.impact === "Positive" ? "bg-green-100 text-green-800" :
                      activity.impact === "Neutral" ? "bg-gray-100 text-gray-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {activity.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="md:col-span-1">
            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">Recommendations</h2>
              <div className="space-y-4">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Investment Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Investment Calculator</h2>
              <div className="space-y-6">
                {/* Slider-based Investment Input */}
                <div>
                  <label className="block text-sm mb-2">Investment Amount</label>
                  <div className="space-y-2">
                    <input 
                      type="range" 
                      min="50000" 
                      max="1000000" 
                      step="10000"
                      value={investmentAmount}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹50,000</span>
                      <span>₹10,00,000</span>
                    </div>
                    <div className="text-center text-lg font-bold text-blue-600">
                      ₹{investmentAmount.toLocaleString()}
                    </div>
                  </div>
                </div>
  
                {/* Calculations Display */}
                <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span>Total Investment</span>
                    <span>₹{investmentAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected Returns (12% p.a.)</span>
                    <span>₹{expectedReturn(investmentAmount).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-green-600">
                    <span>Monthly Returns</span>
                    <span>₹{Math.round(expectedReturn(investmentAmount) / 12).toLocaleString()}</span>
                  </div>
                </div>
  
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Invest Now
                </button>
  
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Minimum investment: ₹50,000</p>
                  <p>• Monthly returns payout</p>
                  <p>• 6-month lock-in period</p>
                  <p>• Returns subject to TDS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }