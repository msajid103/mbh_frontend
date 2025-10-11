import React from 'react'

function StatsSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Why Choose */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                            Why choose MyBuildHub?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Join thousands of construction professionals who trust MyBuildHub to manage their projects efficiently.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4">
                            {/* Row 1 */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Real-time project updates and notifications</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Centralized document storage and sharing</span>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Task management and assignment</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Budget tracking and financial reports</span>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Mobile access on any device</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Secure cloud-based platform</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Stat 1 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-3">10K+</div>
                            <div className="text-gray-600">Active Projects</div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-3">5K+</div>
                            <div className="text-gray-600">Happy Clients</div>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-3">98%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-3">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection