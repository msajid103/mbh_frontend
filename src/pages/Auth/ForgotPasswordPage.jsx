import React, { useState } from 'react';
import heroSection from "../../assets/heroSection.jpeg";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';


const FrogotPasswordPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [invalidFields, setInvalidFields] = useState({});
    const [email, setEmail] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setTimeout(() => {
            navigate('/mybuild');
            setLoading(false);
        }, 10000);

    }
    return (
        <>
            <NavBar path={"/signup"} content={"SignUp"} />
            <div className="max-w-7xl mx-auto flex gap-4 items-center  justify-center min-h-screen">
                <div className="relative w-full max-w-[600px] bg-white rounded-[20px] shadow-2xl px-24 py-32">
                    <div className="flex flex-col items-center mb-8">
                        <h1 className="heading-2 mb-2">Forgot Password?</h1>
                        <h2 className="para text-base" >No worries, we'll send you reset instructions</h2>
                    </div>

                    {/* Social Login Buttons */}
                    {error && (
                        <div className="mb-3 text-red-500 text-sm font-medium text-center">
                            {error}
                        </div>)}


                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address..."
                                className={`input-field pr-12 ${invalidFields.email ? "input-error" : ""}`}

                            />
                        </div>


                        {/* Login Button */}
                        <button
                            type='submit'
                            className={`btn-primary w-full justify-center mt-6 
                            ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Loading...." : "Reset Password"}
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <p className="flex gap-1 items-center justify-center mt-6 text-gray-600">
                        <ArrowLeft />  Back to
                        <Link to="/signin" className="text-blue-600 hover:text-blue-700">
                            sign in
                        </Link>
                    </p>
                    <div>
                        <p className=" mt-6 text-gray-600 border p-[17px]">
                            Need help? Contact our support team at
                            <br/>
                            <Link className="text-blue-600 hover:text-blue-700">
                                support@mybuildhub.com
                            </Link>
                        </p>
                    </div>


                </div>
                <div className="hidden lg:block">
                    <img src={heroSection} alt="Sign in" className="max-w-full h-auto" />
                </div>
            </div>
        </>
    );
}

export default FrogotPasswordPage;