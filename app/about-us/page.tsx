"use client"; // This makes the component a Client Component

import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from 'next/image';

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mdkondlb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.errors) {
        setFormError(true);
      } else {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
      }
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <section className="relative">
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="space-y-6 text-gray-300">
            <h2 className="text-4xl font-semibold mb-5">About CrozAI</h2>
            <p className="text-lg leading-relaxed">
              CrozAI is pushing the boundaries of tech innovation by combining expertise, creativity, and passion to create cutting-edge solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it's enhancing education platforms or building business tools, we strive to empower people and organizations in the digital age.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to create tech solutions that improve learning, boost productivity, and foster innovation. Whether it’s enhancing education or developing tools for businesses, CrozAI is shaping the future, one solution at a time.
            </p>
          </div>

          {/* Key Points Section */}
          <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-indigo-300">What We Stand For</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-200">Our Mission</h4>
                <p className="text-gray-300 mt-2">
                  Leading innovation through sustainable, human-centered design and technology.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-200">Our Values</h4>
                <p className="text-gray-300 mt-2">
                  Innovation, collaboration, and excellence shape everything we do at CrozAI.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-200">Our Approach</h4>
                <p className="text-gray-300 mt-2">
                  Combining creativity with technical expertise to make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Co-Founder Profiles */}
<div className="bg-black-800 py-12">
  <div className="max-w-6xl mx-auto px-6 sm:px-10">
    <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Meet Our Founders</h2>
    <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
      {/* Chirag's Profile */}
      <div className="flex items-center space-x-6 p-6 bg-gray-900 rounded-lg shadow-lg">
        <div className="relative w-32 h-32">
          <img
            src="/images/chirag_image.png"
            alt="Chirag Agrawal"
            className="w-full h-full rounded-full object-cover filter grayscale hover:filter-none transition duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-indigo-200">Chirag Agrawal</h3>
          <p className="text-gray-300">Co-Founder</p>
          <div className="flex items-center space-x-2 mt-2">
            <FaEnvelope size={20} className="text-indigo-300 hover:text-indigo-400" />
            <span className="text-gray-300">chirag@crozai.com</span>
          </div>
          <a
            href="https://www.linkedin.com/in/chiragagrawal12/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 text-indigo-300 hover:text-indigo-400"
          >
            <FaLinkedin size={20} />
            <span className="ml-1">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Veer's Profile */}
      <div className="flex items-center space-x-6 p-6 bg-gray-900 rounded-lg shadow-lg">
        <div className="relative w-32 h-32">
          <img
            src="/images/veer_image.png"
            alt="Veer Ravi"
            className="w-full h-full rounded-full object-cover filter grayscale hover:filter-none transition duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-indigo-200">Veer Ravi</h3>
          <p className="text-gray-300">Co-Founder</p>
          <div className="flex items-center space-x-2 mt-2">
            <FaEnvelope size={20} className="text-indigo-300 hover:text-indigo-400" />
            <span className="text-gray-300">veer@crozai.com</span>
          </div>
          <a
            href="https://www.linkedin.com/in/veerravi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 text-indigo-300 hover:text-indigo-400"
          >
            <FaLinkedin size={20} />
            <span className="ml-1">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Contact Information */}
      <div className="bg-black-800 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-10 text-center md:text-left items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100">Get In Touch</h2>
              <p className="text-lg text-gray-300">We'd love to hear from you. Whether it's a project idea or a simple inquiry, we are here to assist you.</p>
              <div className="text-indigo-200 space-y-3">
              <p className="flex items-center">
          <FaEnvelope size={20} className="mr-2" />
          <a href="mailto:info@crozai.com" className="underline">info@crozai.com</a>
        </p>
        <p className="flex items-center">
          <FaPhone size={20} className="mr-2" />
          +91 7849936058
        </p>
              </div>
            </div>

            {/* Contact Form */}
            {submitted ? (
              <div className="p-6 bg-blue-100 text-gray-800 rounded-lg shadow-lg text-center animate-fade-in">
                <h2 className="text-2xl font-bold">Thank you!</h2>
                <p className="mt-3">Your message has been successfully submitted. We will get back to you shortly.</p>
              </div>
            ) : formError ? (
              <div className="p-6 bg-red-100 text-red-800 rounded-lg shadow-lg text-center animate-fade-in">
                <h2 className="text-2xl font-bold">Oops!</h2>
                <p className="mt-3">There was an error submitting your message. Please try again later.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-indigo-200/65">Name <span className="text-red-500">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input w-full bg-gray-900 text-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-indigo-200/65">Email <span className="text-red-500">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input w-full bg-gray-900 text-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-indigo-200/65">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input w-full bg-gray-900 text-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button className="btn w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
