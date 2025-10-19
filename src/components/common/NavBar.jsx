import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.png";

function NavBar({ path, content }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center justify-center space-x-2">
                        <img
                            src={logo}
                            alt="VAT Buddy Logo"
                            className="w-[76.515625px] h-[40px] object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors text-sm lg:text-base"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors text-sm lg:text-base"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors text-sm lg:text-base"
                        >
                            FAQ's
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-primary-600 transition-colors text-sm lg:text-base"
                        >
                            Contact Us
                        </Link>

                        <Link
                            to={path}
                            className="btn-primary text-sm lg:text-base"
                        >
                            {content}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-primary-600 transition-colors px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-primary-600 transition-colors px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-primary-600 transition-colors px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ's
                            </Link>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-primary-600 transition-colors px-2 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </Link>

                            <Link
                                to={path}
                                className="btn-primary w-full justify-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;