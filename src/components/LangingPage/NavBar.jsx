import React from 'react'
import { Link } from 'react-router-dom'
import logo_jp from "../../assets/logo_jp.jpeg"
import { ArrowRight } from 'lucide-react'
function NavBar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center justify-center space-x-2">
                        <img
                            src={logo_jp}
                            alt="VAT Buddy Logo"
                            className="w-[76.515625px] h-[40px] object-contain"
                        />
                    </div>


                    {/* Nav links */}
                    {/* <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Pricing
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div> */}

                    {/* Auth buttons */}
                    <div className="flex items-center space-x-4">
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