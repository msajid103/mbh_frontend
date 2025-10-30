import React, { useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import heroSection from "../../assets/heroSection.jpeg";
import NavBar from '../../components/common/NavBar';


export default function SignUpPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
        agree_to_terms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData);
        console.log("name", formData.full_name);


        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate('/');

        setFormData({
            full_name: '',
            email: '',
            password: '',
            confirm_password: '',
            agree_to_terms: false
        });
        setLoading(false);


    };

    return (
        <>
            <NavBar path={"/signin"} content={"Sign In"} />
            <div className="max-w-7xl mx-auto flex gap-4 items-center  justify-center min-h-screen">
                <div className="relative w-full max-w-[647px] bg-white rounded-[20px] shadow-2xl p-12">
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="heading-2 mb-2">SignUp</h1>
                        <h2 className="para text-base">Create your account to get started</h2>
                    </div>
                    {error && (
                        <div className="mb-3 text-red-500 text-sm font-medium text-center">
                            {error}
                        </div>)}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name Input */}
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Enter your full name..."
                                className="input-field"
                            />
                        </div> */}

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address..."
                                className="input-field"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Use an organization email to easily collaborate with teammates
                            </p>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password..."
                                    className="input-field pr-12"
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirm_password}
                                    name="confirm_password"
                                    onChange={handleChange}
                                    placeholder="Confirm your password..."
                                    className="input-field pr-12"
                                />
                                <button
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Conditions Checkbox */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                name="agree_to_terms"
                                checked={formData.agree_to_terms}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                                I agree to the{' '}
                                <Link to="/" className="text-blue-600 hover:underline">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link to="/" className="text-blue-600 hover:underline">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        {/* Create Account Button */}
                        <button
                            type='submit'
                            className={`btn-primary w-full justify-center mt-6 
                            ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Loading...." : "Create Account"}
                        </button>

                        {/* Sign In Link */}
                        <p className="text-center text-gray-600">
                            Already have an account?{' '}
                            <Link to="/signin" className="text-blue-600  hover:text-blue-700">
                                Sign in
                            </Link>
                        </p>
                    </form>
                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">OR</span>
                        </div>
                    </div>

                    {/* Social Sign Up Text */}
                    <p className="text-center text-sm text-gray-600 mb-4">Join with</p>

                    {/* Social Login Buttons */}
                    <div className="space-y-3">
                        <button className="btn-secondary w-full justify-center">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span>Continue with Google</span>
                        </button>

                        <button className="btn-secondary w-full justify-center">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            <span>Continue with Apple</span>
                        </button>
                    </div>

                </div>
                <div className="hidden lg:block">
                    <img src={heroSection} alt="Sign in" className="max-w-full h-auto" />
                </div>
            </div>
        </>
    );

}