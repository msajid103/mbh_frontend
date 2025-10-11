import React, { useState } from 'react';
import logo_jp from "../../assets/logo_jp.jpeg";
import { Link } from 'react-router-dom';


export default function AuthContainer({title, content, children}) {

    return (
        <div className="min-h-screen w-full relative flex items-center justify-center p-6">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop')`,                    
                }} >
              
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative w-full max-w-[647px] bg-white rounded-[20px] shadow-2xl p-12">
                <div className="flex flex-col items-center mb-8">
                    <div className="text-center mb-10">
                        <img
                            src={logo_jp}
                            alt="Logo"
                            className="w-[76.515625px] h-[40px] object-contain"
                        />
                    </div>
                    <h1 className="heading-2 mb-2">{title || ""}</h1>
                    <h2 className="para text-base">{content || ""}</h2>
                </div>
                {children}

                <p className='p-7 text-center '>Need Help? <Link to="/" className="text-blue-600 hover:underline">Contact Support</Link></p>
            </div>
        </div>
    );
}