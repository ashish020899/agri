import React from "react";
import './Finalstep.css'
import { Link } from "react-router-dom";

export default function Finalstep(){
    return(
        <div className="finalstepCont">
            <div class="flex h-screen">
        <div class="w-64 bg-white border-r border-gray-200 pt-4 flex flex-col">
            <div class="px-4 pb-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-green-700">AgriCred</h2>
                <p class="text-sm text-gray-600">Complete your profile</p>
            </div>

            <nav class="px-2 pt-3 flex-1">
                <Link to="/" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Registration</span>
                </Link>

                <Link to="/farm-details" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Farmstead</span>
                </Link>

                <Link to="/general-information" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">General Information</span>
                </Link>

                <Link to="/proof" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Proof</span>
                </Link>

                <Link to="/education" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Education</span>
                </Link>

                <Link to="/contact" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Contact</span>
                </Link>

                <Link to="/property" class="flex items-center px-3 py-1.5 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Property</span>
                </Link>

                <Link to="/final-step" class="flex items-center px-3 py-1.5 mb-1 rounded-md bg-green-700 text-white">
                    <span class="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">8</span>
                    <span class="text-sm">Final Step</span>
                </Link>
            </nav>
        </div>

        <div class="flex-1 p-6">
            <div class="mb-4">
                <h1 class="text-2xl font-bold text-gray-900">Credit Information Overview</h1>
                <p class="text-gray-600 text-sm">Review and confirm your loan details</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4">
                    <div class="card p-4">
                        <h3 class="text-md font-semibold text-gray-900 mb-3">Loan Details</h3>
                        <div class="grid grid-cols-3 gap-3">
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Amount</label>
                                <input type="text" class="w-full px-2 py-1.5 text-sm rounded-lg border border-gray-300" value="₹15,000" readonly/>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Duration</label>
                                <input type="text" class="w-full px-2 py-1.5 text-sm rounded-lg border border-gray-300" value="9 months" readonly/>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Interest</label>
                                <input type="text" class="w-full px-2 py-1.5 text-sm rounded-lg border border-gray-300" value="8%" readonly/>
                            </div>
                        </div>
                    </div>

                    <div class="card p-4">
                        <h3 class="text-md font-semibold text-gray-900 mb-3">Purpose & Characteristics</h3>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Purpose</label>
                                <input type="text" class="w-full px-2 py-1.5 text-sm rounded-lg border border-gray-300" value="Crop farming" readonly/>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-1">Type</label>
                                <select class="w-full px-2 py-1.5 text-sm rounded-lg border border-gray-300">
                                    <option selected>Harvesting</option>
                                    <option>Sowing</option>
                                    <option>Equipment Purchase</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-4">
                    <h3 class="text-md font-semibold text-gray-900 mb-3">Loan Repayment</h3>
                    
                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-medium text-gray-700 mb-2">Type</label>
                            <div class="space-y-1">
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="repayment-type" class="form-radio text-green-600" checked/>
                                    <span class="ml-2 text-sm">Differential rate</span>
                                </label>
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="repayment-type" class="form-radio text-green-600"/>
                                    <span class="ml-2 text-sm">Equal shares</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-medium text-gray-700 mb-2">Grace Period</label>
                            <div class="space-y-1">
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="grace-period" class="form-radio text-green-600"/>
                                    <span class="ml-2 text-sm">3 months (+0.5%)</span>
                                </label>
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="grace-period" class="form-radio text-green-600" />
                                    <span class="ml-2 text-sm">6 months (+0.7%)</span>
                                </label>
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="grace-period" class="form-radio text-green-600" />
                                    <span class="ml-2 text-sm">8 months (+1%)</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-medium text-gray-700 mb-2">Payments</label>
                            <div class="space-y-1">
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="payment-frequency" class="form-radio text-green-600" />
                                    <span class="ml-2 text-sm">Weekly</span>
                                </label>
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="payment-frequency" class="form-radio text-green-600" />
                                    <span class="ml-2 text-sm">Monthly</span>
                                </label>
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="payment-frequency" class="form-radio text-green-600" />
                                    <span class="ml-2 text-sm">Quarterly</span>
                                </label>
                                <label class="flex items-center compact-radio">
                                    <input type="radio" name="payment-frequency" class="form-radio text-green-600" />
                                    <span class="ml-2 text-sm">Two stages</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox text-green-600" />
                            <span class="ml-2 text-sm">Ready to leave the crop on bail</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex justify-between mt-4">
                <button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                   <Link to="/property"> Back </Link>
                </button>
                <button type="button" class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                   <Link to="/investment-opportunities"> Submit Application </Link>
                </button>
            </div>
        </div>
    </div>
        </div>
    )
}