import { React } from 'react'
import './Farmdetials.css'
import { Link } from 'react-router-dom'

export default function Farmdetials(){
    return(
        <div className="farmDetCont">
            <div class="flex h-screen">
        <div class="w-64 bg-white border-r border-gray-200 pt-4 flex flex-col">
            <div class="px-4 pb-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-green-700">AgriCred</h2>
                <p class="text-sm text-gray-600">Complete your profile</p>
            </div>

            <nav class="px-2 pt-3 flex-1">
                <Link to="/" class="flex items-center px-3 py-2 mb-1 rounded-md bg-green-50 text-green-700">
                    <span class="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                    <span class="text-sm">Registration</span>
                    <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                </Link>

                <Link to="/farm-details" class="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
                    <span class="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                    <span class="text-sm">Farmstead</span>
                </Link>

                <Link to="/general-information" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600 hover:bg-gray-50">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                    <span class="text-sm">General Information</span>
                </Link>

                <Link to="/proof" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600 hover:bg-gray-50">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">4</span>
                    <span class="text-sm">Proof</span>
                </Link>

                <Link to="/education" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600 hover:bg-gray-50">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">5</span>
                    <span class="text-sm">Education</span>
                </Link>

                <Link to="/contact" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600 hover:bg-gray-50">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">6</span>
                    <span class="text-sm">Contact</span>
                </Link>

                <Link to="/property" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600 hover:bg-gray-50">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">7</span>
                    <span class="text-sm">Property</span>
                </Link>

                <Link to="/final-step" class="flex items-center px-3 py-2 mb-1 rounded-md text-gray-600 hover:bg-gray-50">
                    <span class="bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">8</span>
                    <span class="text-sm">Final Step</span>
                </Link>
            </nav>
        </div>

        <div class="flex-1 overflow-auto">
            <div class="p-6">
                <div class="mb-6">
                    <h1 class="text-2xl font-bold text-gray-900">Farm Details</h1>
                    <p class="text-gray-600 text-sm">Provide information about your field and operations</p>
                </div>

                <div class="card p-6 mb-4">
                    <h3 class="text-base font-semibold text-gray-900 mb-4">Field Information</h3>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="text-sm text-gray-600">Field Size</div>
                            <div class="text-lg font-semibold text-gray-900">22.4 Ha</div>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="text-sm text-gray-600">Current Crop Type</div>
                            <div class="text-lg font-semibold text-gray-900">Grain Crops</div>
                        </div>
                    </div>
                    <div class="flex space-x-3">
                        <button class="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                            Select on Map
                        </button>
                        <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-green-600">
                            Enter Manually
                        </button>
                    </div>
                </div>

                <div class="card p-6 mb-4">
                    <h3 class="text-base font-semibold text-gray-900 mb-4">Previous Season's Crop</h3>
                    <div class="grid grid-cols-4 gap-3">
                        <button class="px-3 py-2 border rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-600">
                            Grain Legumes
                        </button>
                        <button class="px-3 py-2 border border-green-600 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
                            Grain Crops
                        </button>
                        <button class="px-3 py-2 border rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-600">
                            Sunflower
                        </button>
                        <button class="px-3 py-2 border rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-600">
                            Berries
                        </button>
                    </div>
                </div>

                <div class="card p-6 mb-6">
                    <h3 class="text-base font-semibold text-gray-900 mb-2">Farm Workforce</h3>
                    <p class="text-gray-600 text-sm mb-4">Select the number of permanent employees</p>
                    <div class="grid grid-cols-4 gap-3">
                        <button class="px-3 py-2 border border-green-600 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
                            Up to 5
                        </button>
                        <button class="px-3 py-2 border rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-600">
                            5 - 10
                        </button>
                        <button class="px-3 py-2 border rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-600">
                            10 - 25
                        </button>
                        <button class="px-3 py-2 border rounded-lg text-sm font-medium hover:border-green-600 hover:text-green-600">
                            Over 25
                        </button>
                    </div>
                </div>

                <div class="flex justify-between">
                    <button class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-gray-200">
                        <Link to="/">Back</Link>
                    </button>
                    <button class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                        <Link to="/general-information">Next</Link>
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}