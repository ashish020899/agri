import { React } from 'react'
import './Registration.css'
import { Link } from 'react-router-dom'

export default function Registration(){
    return(
        <div className="registrationCont">
            <div class="flex h-screen">
        <div class="w-64 bg-white border-r border-gray-200 pt-4 flex flex-col">
            <div class="px-4 pb-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-green-700">AgriCred</h2>
                <p class="text-sm text-gray-600">Complete your profile</p>
            </div>

            <nav class="px-2 pt-3 flex-1">
                <Link to="/" class="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
                    <span class="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                    <span class="text-sm">Registration</span>
                </Link>

                <Link to="/farm-details" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                    <span class="text-sm">Farmstead</span>
                </Link>

                <Link to="/general-information" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                    <span class="text-sm">General Information</span>
                </Link>

                <Link to="/proof" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">4</span>
                    <span class="text-sm">Proof</span>
                </Link>

                <Link to="/education" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">5</span>
                    <span class="text-sm">Education</span>
                </Link>

                <Link to="/contact" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">6</span>
                    <span class="text-sm">Contact</span>
                </Link>

                <Link to="/property" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">7</span>
                    <span class="text-sm">Property</span>
                </Link>

                <Link to="/final-step" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">8</span>
                    <span class="text-sm">Final Step</span>
                </Link>
            </nav>
        </div>

        <div class="flex-1">
            <div class="p-6">
                <div class="mb-6">
                    <h1 class="text-2xl font-bold text-gray-900">Registration</h1>
                    <p class="text-gray-600 text-sm">Enter your basic information to get started</p>
                </div>

                <div class="card p-6">
                    <form class="max-w-md">
                        <div class="mb-4">
                            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                id="fullName" 
                                name="fullName" 
                                class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div class="mb-4">
                            <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Aadhar Card Number</label>
                            <input 
                                type="text" 
                                id="fullName" 
                                name="fullName" 
                                class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter your Aadhar Card Number"
                                required
                            />
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter your email address"
                                required
                            />
                            <p class="text-xs text-gray-500 mt-1">We'll send a verification link to this email</p>
                        </div>

                        <div class="flex justify-end">
                            <button 
                                type="submit" 
                                class="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            ><Link to={'/farm-details'}> Continue
                            </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}