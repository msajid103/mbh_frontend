import React from 'react'
import { ArrowRight } from 'lucide-react';
import heroSection from '../../assets/heroSection.jpeg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (

    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="heading-1  mb-6 ">
            Build Better Together
          </h1>
          <p className="para mb-[12rem]">
            The all-in-one platform for managing construction and real estate projects. Collaborate with your team, track progress, and deliver projects on time and within budget.
          </p>
          <div className="flex gap-4">
            <Link to="/signup"  className="btn-primary">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link >
            <Link to="/" className="btn-secondary">
              Learn more
            </Link >
          </div>
        </div>
        <div className="justify-self-end">
          <img
            src={heroSection}
            alt="VAT Automation"
            className="w-full max-w-lg "
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection