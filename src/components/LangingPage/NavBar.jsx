import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { ArrowRight } from 'lucide-react'
function NavBar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center justify-center space-x-2">
                        <img
                            src={logo}
                            alt="VAT Buddy Logo"
                            className="w-[76.515625px] h-[40px] object-contain"
                        />
                    </div>


                

                    {/* Auth buttons */}
                    <div className="flex items-center space-x-12">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            FAQ’s
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            About Us
                        </Link>                      
                        <Link
                            to="/signin"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Sign In
                        </Link>                     

                        <Link to="/signup" className="btn-primary">
                            Get Started
                            <ArrowRight className="w-5 h-5" />

                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar