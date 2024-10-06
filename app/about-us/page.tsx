"use client"; // This makes the component a Client Component

import { useState } from "react";

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
        <div className="grid md:grid-cols-2 gap-10 items-stretch"> {/* Changed items-center to items-stretch */}
          <div className="space-y-6 text-gray-300 flex flex-col justify-between"> {/* Added flex and justify-between */}
            <h2 className="text-4xl font-semibold mb-5">About CrozAI</h2>
            <p className="text-lg leading-relaxed">
              CrozAI is at the forefront of tech innovation, combining passion, creativity, and industry-leading expertise to build solutions that foster learning, creativity, and productivity.
            </p>
            <p className="text-lg leading-relaxed">
              From education platforms to business optimization tools, we are dedicated to empowering individuals and organizations to reach their full potential in the digital age.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to create tech solutions that improve learning, boost productivity, and foster innovation. Whether it’s enhancing education or developing tools for businesses, CrozAI is shaping the future, one solution at a time.
            </p>
          </div>

          {/* Key Points Section */}
          <div className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between"> {/* Added flex and justify-between */}
            <h3 className="text-3xl font-semibold text-indigo-300">Key Points</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-200">Our Mission</h4>
                <p className="text-gray-300 mt-2">
                  To lead innovation through sustainable, human-centered design and cutting-edge technology.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-200">Our Values</h4>
                <p className="text-gray-300 mt-2">
                  Innovation, collaboration, and excellence drive everything we do at CrozAI.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-200">Our Approach</h4>
                <p className="text-gray-300 mt-2">
                  Combining creativity and technical expertise to deliver solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-10 text-center md:text-left items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100">Get In Touch</h2>
              <p className="text-lg text-gray-300">We'd love to hear from you. Whether it's a project idea, a partnership opportunity, or a simple inquiry, our team is here to assist you.</p>
              <div className="text-indigo-200 space-y-3">
                <p>Email: <a href="mailto:info@crozic.com" className="underline">info@crozai.com</a></p>
                <p>Phone: +91 7849936058</p>
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
