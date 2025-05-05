import React from 'react'
import './Education.css'
import { Link } from 'react-router-dom'

export default function Education(){
    return(
        <div className="educationCont">
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

                <Link to="/education" class="flex items-center px-3 py-2 mb-1 rounded-md bg-green-700 text-white">
                    <span class="bg-white text-green-700 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">5</span>
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
                    <h1 class="text-2xl font-bold text-gray-900">Educational Background</h1>
                    <p class="text-gray-600 text-sm">Please provide your educational qualifications</p>
                </div>

                <div class="card p-6">
                    <form>
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Highest Qualification</label>
                                <div class="grid grid-cols-3 gap-3">
                                    <button type="button" class="text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-green-600 focus:outline-none focus:border-green-600">
                                        <div class="text-gray-700 font-medium">Secondary</div>
                                        <div class="text-xs text-gray-500">10th Standard</div>
                                    </button>
                                    <button type="button" class="text-left px-4 py-3 border-2 border-green-600 bg-green-50 rounded-lg">
                                        <div class="text-green-600 font-medium">Higher Secondary</div>
                                        <div class="text-xs text-gray-500">12th Standard</div>
                                    </button>
                                    <button type="button" class="text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-green-600 focus:outline-none focus:border-green-600">
                                        <div class="text-gray-700 font-medium">Graduate</div>
                                        <div class="text-xs text-gray-500">Bachelors Degree</div>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label for="institution" class="block text-sm font-medium text-gray-700 mb-1">School/Institution Name</label>
                                <input 
                                    type="text" 
                                    id="institution" 
                                    class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter your school or institution name"
                                />
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div>
                                    <label for="start-year" class="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
                                    <select id="start-year" class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                                        <option value="">Select year</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="end-year" class="block text-sm font-medium text-gray-700 mb-1">Completion Year</label>
                                    <select id="end-year" class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                                        <option value="">Select year</option>
                                        <option value="2025">2025</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                    </select>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6">
                                <div>
                                    <label for="score-type" class="block text-sm font-medium text-gray-700 mb-1">Score Type</label>
                                    <select id="score-type" class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                                        <option value="percentage">Percentage</option>
                                        <option value="cgpa">CGPA</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="score" class="block text-sm font-medium text-gray-700 mb-1">Score</label>
                                    <input 
                                        type="number" 
                                        id="score" 
                                        class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Enter your score"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="additional" class="block text-sm font-medium text-gray-700 mb-1">Additional Qualifications (Optional)</label>
                                <textarea 
                                    id="additional" 
                                    rows="3" 
                                    class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Enter any additional qualifications or certifications"
                                ></textarea>
                            </div>
                        </div>

                        <div class="flex justify-between pt-6">
                            <button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                                <Link to={'/proof'}>Back</Link>
                            </button>
                            <button type="button" class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                              <Link to="/contact">  Continue </Link>
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