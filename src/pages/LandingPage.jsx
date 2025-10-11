import React from 'react';
import NavBar from '../components/LangingPage/NavBar';
import Footer from '../components/LangingPage/Footer';
import HeroSection from '../components/LangingPage/HeroSection';
import FeatueSection from '../components/LangingPage/FeatueSection';
import StatsSection from '../components/LangingPage/StatsSection';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation    */}
      <NavBar />

      {/* Hero section */}
      <HeroSection />

      {/* Trust Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="heading-2 mb-4">Everything you need to manage projects</p>
          <p className="para ">Powerful features designed for construction and real estate professionals</p>
        </div>
      </section>

      {/* Features Section */}
      <FeatueSection />

      {/* Stats Section */}     
      <StatsSection/>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to boost your productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us today and experience the difference
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}