"use client"; // This makes the component a Client Component

import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from 'next/image';

export default function Contact() {
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
