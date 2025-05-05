import React from 'react'
import './Proof.css'
import { Link } from 'react-router-dom'

export default function Proof(){
    return(
        <div className="proofcont">
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

                <Link to="/proof" class="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
                    <span class="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">4</span>
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

        <div class="flex-1 overflow-auto">
            <div class="p-6">
                <div class="mb-6">
                    <h1 class="text-2xl font-bold text-gray-900">Proof of Address</h1>
                    <p class="text-gray-600 text-sm">Upload documents to verify your address</p>
                </div>

                <div class="card p-6">
                    <form>
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Select Document Type</label>
                            <div class="grid grid-cols-3 gap-3">
                                <button type="button" class="text-left px-4 py-3 border-2 border-green-600 bg-green-50 rounded-lg">
                                    <div class="text-green-600 font-medium">Aadhaar Card</div>
                                    <div class="text-xs text-gray-500">Unique ID issued by UIDAI</div>
                                </button>
                                <button type="button" class="text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-green-600">
                                    <div class="text-gray-700 font-medium">Electricity Bill</div>
                                    <div class="text-xs text-gray-500">Not older than 3 months</div>
                                </button>
                                <button type="button" class="text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-green-600">
                                    <div class="text-gray-700 font-medium">Pan Card</div>
                                    <div class="text-xs text-gray-500">Issued by the Income Tax Department of India</div>
                                </button>
                            </div>
                        </div>

                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Upload Document</label>
                            <div class="upload-area rounded-lg p-8 text-center">
                                <input type="file" id="document" class="hidden" accept=".pdf,.jpg,.jpeg,.png"/>
                                <label for="document" class="cursor-pointer">
                                    <div class="mb-3">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4-4m4-4h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="text-sm text-gray-600">
                                        <span class="text-green-600 font-medium">Click to upload</span> or drag and drop
                                    </div>
                                    <div class="text-xs text-gray-500 mt-1">
                                        PDF, JPG, PNG up to 5MB
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div class="mb-6 bg-gray-50 rounded-lg p-4">
                            <h4 class="text-sm font-medium text-gray-700 mb-2">Document Requirements:</h4>
                            <ul class="text-sm text-gray-600 space-y-1">
                                <li class="flex items-center">
                                    <svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    File should be clear and readable
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Address should match with provided details
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Document should not be expired
                                </li>
                            </ul>
                        </div>

                        <div class="flex justify-between pt-4">
                            <button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                                <Link to={"/general-information"}>Back</Link>
                            </button>
                            <button type="button" class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                               <Link to="/education"> Continue </Link>
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