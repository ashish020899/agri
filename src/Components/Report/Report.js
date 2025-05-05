import React from "react";
import './Report.css';
import { Link } from "react-router-dom";

export default function Report() {
    return (
        <div className="reportCont">
            <div className="flex min-h-screen">
                <aside className="w-64 bg-white shadow-lg">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-green-700">AgriCred</h2>
                        <p className="text-sm text-gray-500 mt-2">Agricultural Finance</p>
                    </div>
                    <nav className="mt-6">
                        <div className="mb-4">
                            <h3 className="px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">CLIENTS</h3>
                            <div className="mt-2">
                                <Link to="/report" className="sidebar-item block text-gray-700">Notifications</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700">Applications</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700 ml-4">Current</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700 ml-4">All</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700 ml-4">Approved</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700 ml-4">Declined</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700 ml-4">Under verification</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700">Farmers</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700">Loans</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700">Statistics</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700">Scoring</Link>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">PARTNERS</h3>
                            <div className="mt-2">
                                <Link to="/report" className="sidebar-item block text-gray-700">Farm machinery rental and sale</Link>
                                <Link to="/report" className="sidebar-item block text-gray-700">Fertilizers</Link>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <h3 className="px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">SETTINGS</h3>
                            <div className="mt-2 px-6 py-4">
                                <div className="flex items-center">
                                    <span className="text-gray-700">Rv-Thakur9 (Administrator)</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </aside>

                <main className="flex-1 overflow-y-auto">
                    <div className="bg-white shadow">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Customer Credit Report</h1>
                                    <p className="text-gray-600">Jan Meier – 05.06.2019</p>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <div>User: Rv-Thakur9 (Administrator)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="gradient-bg px-6 py-8">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white">Krushi Score</h2>
                                            <p className="mt-2 text-green-100">Credit Assessment Report</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-5xl font-bold text-white">950</div>
                                            <p className="text-green-100">Exceptional</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50">
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Recommended Credit Line</span>
                                            <span className="font-semibold">₹30,000</span>
                                        </div>
                                        <div className="relative pt-1">
                                            <div className="flex mb-2 items-center justify-between">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                                        Currently Using: ₹10,000
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-semibold inline-block text-green-600">
                                                        Available: ₹20,000
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                                <div style={{width:"33.33%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500"></div>
                                                <div style={{width:"66.67%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"></div>
                                            </div>
                                            <div className="flex justify-between text-xs text-gray-600">
                                                <span>0</span>
                                                <span>₹10k</span>
                                                <span>₹20k</span>
                                                <span>₹30k</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between items-center">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                                <span className="text-sm text-gray-600">Low Risk</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                                <span className="text-sm text-gray-600">Medium Risk</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                                <span className="text-sm text-gray-600">High Risk</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">Credit History</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-600">Loans Repaid</p>
                                        <p className="text-xl font-bold">5</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Pending Loans</p>
                                        <p className="text-xl font-bold">1</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Default Rate</p>
                                        <p className="text-xl font-bold text-green-600">0%</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Loan Repayment Rate</p>
                                        <p className="text-xl font-bold text-green-600">100%</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Credit Utilization</span>
                                                <span className="font-medium">33.33%</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded">
                                                <div className="h-full bg-green-500 rounded" style={{width: "33.33%"}}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Repayment Score</span>
                                                <span className="font-medium">100%</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded">
                                                <div className="h-full bg-green-500 rounded" style={{width: "100%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                            <h2 className="text-xl font-semibold mb-4">Farmer's Income History</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field Size (ha)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crops</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹/ton)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yield (ton/ha)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported Income (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2019</td>
                                            <td className="px-6 py-4 whitespace-nowrap">39,290</td>
                                            <td className="px-6 py-4 whitespace-nowrap">22.4</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Mixed</td>
                                            <td className="px-6 py-4 whitespace-nowrap">398</td>
                                            <td className="px-6 py-4 whitespace-nowrap">181</td>
                                            <td className="px-6 py-4 whitespace-nowrap">45,326</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2018</td>
                                            <td className="px-6 py-4 whitespace-nowrap">33,550</td>
                                            <td className="px-6 py-4 whitespace-nowrap">22.4</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Corn</td>
                                            <td className="px-6 py-4 whitespace-nowrap">197</td>
                                            <td className="px-6 py-4 whitespace-nowrap">4</td>
                                            <td className="px-6 py-4 whitespace-nowrap">40,573</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">2017</td>
                                            <td className="px-6 py-4 whitespace-nowrap">29,912</td>
                                            <td className="px-6 py-4 whitespace-nowrap">22.4</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Sunflower</td>
                                            <td className="px-6 py-4 whitespace-nowrap">206</td>
                                            <td className="px-6 py-4 whitespace-nowrap">41.6</td>
                                            <td className="px-6 py-4 whitespace-nowrap">N/A</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">General Score Card</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="score-card p-4 bg-green-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-green-800">Status</h3>
                                    <p className="mt-2 text-green-600">Active Farmer</p>
                                    <p className="text-sm text-green-500 mt-1">Regular Operations</p>
                                </div>
                                <div className="score-card p-4 bg-blue-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-blue-800">Experience</h3>
                                    <p className="mt-2 text-blue-600">Crop farming</p>
                                    <p className="text-sm text-blue-500 mt-1">10+ years</p>
                                </div>
                                <div className="score-card p-4 bg-purple-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-purple-800">Financial Health</h3>
                                    <p className="mt-2 text-purple-600">Positive</p>
                                    <p className="text-sm text-purple-500 mt-1">Strong Cash Flow</p>
                                </div>

                                <div className="score-card p-4 bg-yellow-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-yellow-800">Yield Status</h3>
                                    <p className="mt-2 text-yellow-600">Above Average (+15%)</p>
                                    <div className="mt-2">
                                        <div className="flex justify-between text-sm text-yellow-600 mb-1">
                                            <span>Regional Average</span>
                                            <span>115%</span>
                                        </div>
                                        <div className="h-2 bg-yellow-200 rounded">
                                            <div className="h-full bg-yellow-500 rounded" style={{width: "115%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="score-card p-4 bg-indigo-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-indigo-800">Main Yield</h3>
                                    <p className="mt-2 text-indigo-600">Mixed Farming</p>
                                    <ul className="mt-2 text-sm text-indigo-500 space-y-1">
                                        <li>• Corn (Primary)</li>
                                        <li>• Sunflower (Secondary)</li>
                                        <li>• Mixed Crops</li>
                                    </ul>
                                </div>
                                <div className="score-card p-4 bg-orange-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-orange-800">Farm Machinery</h3>
                                    <p className="mt-2 text-orange-600">Well-Equipped</p>
                                    <ul className="mt-2 text-sm text-orange-500 space-y-1">
                                        <li>• 2 Tractors (₹45,000)</li>
                                        <li>• 1 Harvester (₹30,000)</li>
                                        <li>• Additional Tools (₹5,000)</li>
                                    </ul>
                                </div>

                                <div className="score-card p-4 bg-teal-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-teal-800">Storage Capacity</h3>
                                    <p className="mt-2 text-teal-600">500m² Warehouse</p>
                                    <div className="mt-2">
                                        <div className="flex justify-between text-sm text-teal-600 mb-1">
                                            <span>Utilization</span>
                                            <span>75%</span>
                                        </div>
                                        <div className="h-2 bg-teal-200 rounded">
                                            <div className="h-full bg-teal-500 rounded" style={{width: "75%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="score-card p-4 bg-teal-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-teal-800">Past Borrowings</h3>
                                    <ul className="mt-2 text-sm text-teal-500 space-y-1">
                                        <li>• Loan 1: ₹20,000 - Repaid</li>
                                        <li>• Loan 2: ₹15,000 - Repaid</li>
                                        <li>• Loan 3: ₹10,000 - Outstanding</li>
                                        <li>• Loan 4: ₹5,000 - Repaid</li>
                                        <li>• Loan 5: ₹8,000 - Repaid</li>
                                    </ul>
                                </div>
                                <div className="score-card p-4 bg-gray-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800">Risk Assessment</h3>
                                    <p className="mt-2 text-gray-600">Low Risk Profile</p>
                                    <ul className="mt-2 text-sm text-gray-500 space-y-1">
                                        <li>• Market Risk: Low</li>
                                        <li>• Weather Risk: Medium</li>
                                        <li>• Operational Risk: Low</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}