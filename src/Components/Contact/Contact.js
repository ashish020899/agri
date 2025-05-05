import React from "react";
import './Contact.css'
import { Link } from 'react-router-dom'

export default function Contact(){
    return(
        <div className="contactCont">
            <div class="flex h-screen">
        <div class="w-64 bg-white border-r border-gray-200 pt-4 flex flex-col">
            <div class="px-4 pb-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-green-700">AgriCred</h2>
                <p class="text-sm text-gray-600">Complete your profile</p>
            </div>

            <nav class="px-2 pt-3 flex-1">
                <Link to="/" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Registration</span>
                </Link>

                <Link to="/farm-details" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Farmstead</span>
                </Link>

                <Link to="/general-information" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">General Information</span>
                </Link>

                <Link to="/proof" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Proof</span>
                </Link>

                <Link to="/education" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-green-100 text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">✓</span>
                    <span class="text-sm">Education</span>
                </Link>

                <Link to="/contact" class="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
                    <span class="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">6</span>
                    <span class="text-sm">Contact</span>
                </Link>

                <Link to="/property" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">7</span>
                    <span class="text-sm">Property</span>
                </Link>

                <Link to="final-step" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">8</span>
                    <span class="text-sm">Final Step</span>
                </Link>
            </nav>
        </div>

        <div class="flex-1 overflow-auto">
            <div class="p-6">
                <div class="mb-6">
                    <h1 class="text-2xl font-bold text-gray-900">Contact Information</h1>
                    <p class="text-gray-600 text-sm">Please provide your contact details</p>
                </div>

                <form class="space-y-6">
                    <div class="card p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Primary Contact Details</h3>
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <input 
                                    type="tel" 
                                    class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your mobile number"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div class="card p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">Alternate Contact Details</h3>
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Alternate Mobile Number</label>
                                <input 
                                    type="tel" 
                                    class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter alternate mobile number"
                                    pattern="[0-9]{10}"
                                />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Alternate Email Address</label>
                                <input 
                                    type="email" 
                                    class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter alternate email address"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between pt-6">
                        <button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                            <Link to="/education">  Back </Link>
                        </button>
                        <button type="button" class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                            <Link to="/property">Continue</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>
    )
}