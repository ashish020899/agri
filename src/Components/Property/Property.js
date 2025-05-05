import React, { useState } from "react";
import './Property.css'
import { Link } from "react-router-dom";

export default function Property() {
    // Form state
    const [formData, setFormData] = useState({
        bankDetails: {
            bankName: '',
            branchName: '',
            accountNumber: ''
        },
        landHoldings: {
            village: '',
            surveyNo: '',
            holdingType: 'Freehold',
            area: '',
            irrigated: 'Yes',
            irrigationSource: '',
            landCharge: ''
        },
        annualIncome: {
            agricultural: '',
            other: '',
            total: ''
        },
        borrowings: [{
            year: '',
            institution: '',
            accountNumber: '',
            purpose: '',
            outstanding: '',
            installment: '',
            overdue: '',
            securities: ''
        }],
        guarantorLiabilities: [{
            institution: '',
            guaranteeAmount: '',
            outstanding: '',
            status: 'Regular'
        }],
        assets: {
            ploughingAnimals: {
                count: '',
                age: '',
                health: 'excellent',
                value: ''
            },
            milchAnimals: {
                count: '',
                age: '',
                income: '',
                value: ''
            },
            farmBirds: {
                count: '',
                type: 'poultry',
                income: '',
                value: ''
            },
            pumpSets: {
                count: '',
                age: '',
                condition: 'excellent',
                value: ''
            },
            tractor: {
                year: '',
                mileage: '',
                condition: 'excellent',
                value: ''
            },
            transportVehicle: {
                year: '',
                mileage: '',
                condition: 'excellent',
                value: ''
            }
        }
    });

    // Handle input changes
    const handleChange = (e, section, field, index = null) => {
        const { name, value } = e.target;
        
        if (index !== null) {
            // For array fields (borrowings, guarantorLiabilities)
            const updatedArray = [...formData[section]];
            updatedArray[index] = {
                ...updatedArray[index],
                [field]: value
            };
            setFormData({
                ...formData,
                [section]: updatedArray
            });
        } else if (section && field) {
            // For nested objects
            setFormData({
                ...formData,
                [section]: {
                    ...formData[section],
                    [field]: value
                }
            });
        } else {
            // For direct fields
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    // Add new borrowing row
    const addBorrowingRow = () => {
        setFormData({
            ...formData,
            borrowings: [
                ...formData.borrowings,
                {
                    year: '',
                    institution: '',
                    accountNumber: '',
                    purpose: '',
                    outstanding: '',
                    installment: '',
                    overdue: '',
                    securities: ''
                }
            ]
        });
    };

    // Remove borrowing row
    const removeBorrowingRow = (index) => {
        if (formData.borrowings.length > 1) {
            const updatedBorrowings = [...formData.borrowings];
            updatedBorrowings.splice(index, 1);
            setFormData({
                ...formData,
                borrowings: updatedBorrowings
            });
        }
    };

    // Calculate total income
    const calculateTotalIncome = () => {
        const agricultural = parseFloat(formData.annualIncome.agricultural) || 0;
        const other = parseFloat(formData.annualIncome.other) || 0;
        return agricultural + other;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="propertyCont">
            <div className="flex h-screen">
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

                        <Link to="/general-information" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                            <span className="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                            <span className="text-sm">General Information</span>
                        </Link>

                        <Link to="/proof" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                            <span className="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                            <span className="text-sm">Proof</span>
                        </Link>

                        <Link to="/education" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                            <span className="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                            <span className="text-sm">Education</span>
                        </Link>

                        <Link to="/contact" className="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                            <span className="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                            <span className="text-sm">Contact</span>
                        </Link>

                        <Link to="/property" className="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
                            <span className="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">7</span>
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
                            <h1 className="text-2xl font-bold text-gray-900">Property & Financial Details</h1>
                            <p className="text-gray-600 text-sm">Enter your property and financial information</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Bank Account Details */}
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Account Details</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th>Name of Bank</th>
                                                <th>Name of Branch</th>
                                                <th>Account Number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2" 
                                                        placeholder="Enter bank name"
                                                        value={formData.bankDetails.bankName}
                                                        onChange={(e) => handleChange(e, 'bankDetails', 'bankName')}
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2" 
                                                        placeholder="Enter branch name"
                                                        value={formData.bankDetails.branchName}
                                                        onChange={(e) => handleChange(e, 'bankDetails', 'branchName')}
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2" 
                                                        placeholder="Enter account number"
                                                        value={formData.bankDetails.accountNumber}
                                                        onChange={(e) => handleChange(e, 'bankDetails', 'accountNumber')}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Land Holdings */}
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Land Holdings</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th>Village</th>
                                                <th>Survey/Block No.</th>
                                                <th>Type of Holding</th>
                                                <th>Area (Hectare)</th>
                                                <th>Irrigated Land</th>
                                                <th>Source of Irrigation</th>
                                                <th>Charge on Land</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.village}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'village')}
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.surveyNo}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'surveyNo')}
                                                    />
                                                </td>
                                                <td>
                                                    <select 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.holdingType}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'holdingType')}
                                                    >
                                                        <option>Freehold</option>
                                                        <option>Leasehold</option>
                                                        <option>Joint Ownership</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input 
                                                        type="number" 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.area}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'area')}
                                                    />
                                                </td>
                                                <td>
                                                    <select 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.irrigated}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'irrigated')}
                                                    >
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.irrigationSource}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'irrigationSource')}
                                                    />
                                                </td>
                                                <td>
                                                    <input 
                                                        type="text" 
                                                        className="w-full border-0 p-2"
                                                        value={formData.landHoldings.landCharge}
                                                        onChange={(e) => handleChange(e, 'landHoldings', 'landCharge')}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Annual Income */}
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Present Annual Income</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Agricultural Income (Rs.)</label>
                                        <input 
                                            type="number" 
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                                            value={formData.annualIncome.agricultural}
                                            onChange={(e) => handleChange(e, 'annualIncome', 'agricultural')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Other Income (Rs.)</label>
                                        <input 
                                            type="number" 
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300"
                                            value={formData.annualIncome.other}
                                            onChange={(e) => handleChange(e, 'annualIncome', 'other')}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Income (Rs.)</label>
                                        <input 
                                            type="number" 
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300" 
                                            readOnly
                                            value={calculateTotalIncome()}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Past Borrowings */}
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Details of Past Borrowings</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th>Year</th>
                                                <th>Lending Institution</th>
                                                <th>Loan Account Number</th>
                                                <th>Purpose</th>
                                                <th>Outstanding Amount</th>
                                                <th>Installment Due</th>
                                                <th>Overdue Amount</th>
                                                <th>Securities Offered</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formData.borrowings.map((borrowing, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.year}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'year', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.institution}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'institution', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.accountNumber}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'accountNumber', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.purpose}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'purpose', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="number" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.outstanding}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'outstanding', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="number" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.installment}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'installment', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="number" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.overdue}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'overdue', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input 
                                                            type="text" 
                                                            className="w-full border-0 p-2"
                                                            value={borrowing.securities}
                                                            onChange={(e) => handleChange(e, 'borrowings', 'securities', index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <button 
                                                            type="button" 
                                                            className="delete-row text-red-500 hover:text-red-700 px-2"
                                                            onClick={() => removeBorrowingRow(index)}
                                                        >
                                                            ×
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button 
                                        type="button" 
                                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                        onClick={addBorrowingRow}
                                    >
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                        Add Row
                                    </button>
                                </div>
                            </div>
                            <div class="card p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Agricultural Assets</h3>
    <div class="space-y-6">
        <div>
                        
            <div class="mb-6">
                <h5 class="font-medium text-gray-800 mb-2">Ploughing Animals</h5>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-4 gap-4 mb-2">
                        <div>
                            <label class="text-sm text-gray-600">Number of Animals</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Average Age (Years)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Health Condition</label>
                            <select class="w-full border rounded p-2">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Total Value (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h5 class="font-medium text-gray-800 mb-2">Milch Animals</h5>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-4 gap-4 mb-2">
                        <div>
                            <label class="text-sm text-gray-600">Number of Animals</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Average Age (Years)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Monthly Income (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Total Value (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h5 class="font-medium text-gray-800 mb-2">Farm Birds</h5>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-4 gap-4 mb-2">
                        <div>
                            <label class="text-sm text-gray-600">Number of Birds</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Type of Birds</label>
                            <select class="w-full border rounded p-2">
                                <option value="poultry">Poultry</option>
                                <option value="duck">Duck</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Monthly Income (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Total Value (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h5 class="font-medium text-gray-800 mb-2">Pump Sets</h5>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-4 gap-4 mb-2">
                        <div>
                            <label class="text-sm text-gray-600">Number of Sets</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Age (Years)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Condition</label>
                            <select class="w-full border rounded p-2">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Total Value (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h5 class="font-medium text-gray-800 mb-2">Tractor</h5>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-4 gap-4 mb-2">
                        <div>
                            <label class="text-sm text-gray-600">Manufacturing Year</label>
                            <input type="number" class="w-full border rounded p-2" min="1960" max="2025"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Mileage (Hours)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Condition</label>
                            <select class="w-full border rounded p-2">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Total Value (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h5 class="font-medium text-gray-800 mb-2">Transport Vehicle</h5>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-4 gap-4 mb-2">
                        <div>
                            <label class="text-sm text-gray-600">Manufacturing Year</label>
                            <input type="number" class="w-full border rounded p-2" min="1960" max="2025"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Mileage (KM)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Condition</label>
                            <select class="w-full border rounded p-2">
                                <option value="excellent">Excellent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm text-gray-600">Total Value (Rs.)</label>
                            <input type="number" class="w-full border rounded p-2" min="0"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 p-4 bg-gray-100 rounded-lg">
                <div class="flex justify-between items-center">
                    <span class="font-medium text-gray-900">Total Assets Value:</span>
                    <span class="text-xl font-bold text-green-600">₹ <span id="totalAssetsValue">0</span></span>
                </div>
            </div>

            
            
            <div class="flex justify-between pt-6">
                <button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                    <Link to="/contact">Back</Link>
                </button>
                <button type="button" class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                    <Link to="/final-step">Continue</Link>
                </button>
            </div>
        </div>
    </div>
</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}