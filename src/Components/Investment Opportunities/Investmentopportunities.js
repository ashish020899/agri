import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Investmentopportunities = () => {
    const [currentDateTime, setCurrentDateTime] = useState('2025-02-20 15:32:01');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
            setCurrentDateTime(formattedDate);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const investments = [
        { 
            name: "ABC Mill", 
            type: "Invoice Discounting", 
            rating: "AAA", 
            loan: "₹5L", 
            duration: "6 months",
            riskScore: 85,
            status: "Active" 
        },
        { 
            name: "DEF Mill", 
            type: "Invoice Discounting", 
            rating: "AA+", 
            loan: "₹7L", 
            duration: "8 months",
            riskScore: 82,
            status: "Active" 
        },
        { 
            name: "GHI Mill", 
            type: "Invoice Discounting", 
            rating: "AA", 
            loan: "₹4.5L", 
            duration: "6 months",
            riskScore: 80,
            status: "Pending" 
        },
        { 
            name: "JKL Mill", 
            type: "Invoice Discounting", 
            rating: "A+", 
            loan: "₹6L", 
            duration: "9 months",
            riskScore: 75,
            status: "Active" 
        },
        { 
            name: "MNO Mill", 
            type: "Invoice Discounting", 
            rating: "AAA", 
            loan: "₹8L", 
            duration: "12 months",
            riskScore: 88,
            status: "Active" 
        },
        { 
            name: "PQR Mill", 
            type: "Invoice Discounting", 
            rating: "AA-", 
            loan: "₹3.5L", 
            duration: "4 months",
            riskScore: 78,
            status: "Pending" 
        }
    ];

    const Card = ({ children, className = '' }) => (
        <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
            {children}
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Navigation Bar */}
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
                        <Link to="#" className="font-medium text-green-200">Investments</Link>
                        <Link to="#" className="hover:text-green-200">Profile</Link>
                        <Link to="#" className="hover:text-green-200">Support</Link>
                    </nav>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-lg p-6 fixed h-full">
                    <nav>
                        <ul className="space-y-4">
                            <li className="font-semibold text-green-600">Investment Opportunities</li>
                            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
                                <Link to="/credit">Creditworthiness & Risk</Link>
                            </li>
                            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
                                <Link>Market Insights</Link>
                            </li>
                            <li className="text-gray-600 hover:text-green-600 cursor-pointer">
                                <Link to="/my-profile">My Portfolio</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 ml-64 p-8">
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                            <h1 className="text-2xl font-bold text-gray-800">Investment Dashboard</h1>
                            <div className="flex items-center space-x-8 text-sm text-gray-600">
                                {currentDateTime}
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm">
                            <select className="w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option>Sort by</option>
                                <option>Rating</option>
                                <option>Loan Amount</option>
                                <option>Duration</option>
                            </select>
                            <select className="w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option>Time Period</option>
                                <option>1 Month</option>
                                <option>3 Months</option>
                                <option>6 Months</option>
                            </select>
                            <select className="w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                                <option>Asset Type</option>
                                <option>Invoice Discounting</option>
                                <option>Warehouse Receipt</option>
                                <option>Input Finance</option>
                            </select>
                        </div>

                        {/* Investment Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {investments.map((investment, index) => (
                                <Card key={index} className="hover-card">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800">{investment.name}</h3>
                                            <p className="text-sm text-gray-600">{investment.type}</p>
                                        </div>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                            investment.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {investment.status}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Rating:</span>
                                            <span className="font-semibold">{investment.rating}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Loan Amount:</span>
                                            <span className="font-semibold">{investment.loan}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Duration:</span>
                                            <span className="font-semibold">{investment.duration}</span>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1 text-sm">
                                                <span className="text-gray-600">Risk Score</span>
                                                <span className={`font-medium ${
                                                    investment.riskScore >= 80 ? 'text-green-600' :
                                                    investment.riskScore >= 60 ? 'text-yellow-600' :
                                                    'text-red-600'
                                                }`}>
                                                    {investment.riskScore}/100
                                                </span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 rounded-full">
                                                <div 
                                                    className={`h-full rounded-full ${
                                                        investment.riskScore >= 80 ? 'bg-green-500' :
                                                        investment.riskScore >= 60 ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                    }`}
                                                    style={{ width: `${investment.riskScore}%` }}
                                                />
                                            </div>
                                        </div>
                                        <button className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                            <Link to={'/mill'}>
                                                View Details
                                            </Link>
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Investmentopportunities;