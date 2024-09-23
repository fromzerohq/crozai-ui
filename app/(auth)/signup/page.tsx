"use client"; // This makes the component a Client Component

import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xrbzwknp", {
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
      }
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Join our waitlist and get early access!
            </h1>
          </div>

          {submitted ? (
               <div className="mx-auto max-w-[400px] p-6 bg-blue-100 text-gray-800 rounded-lg shadow-lg text-center animate-fade-in">
               <h2 className="text-2xl font-bold">Thank you!</h2>
               <p className="mt-3">
                 Your information has been successfully submitted. We'll be in
                 touch soon.
               </p>
             </div>
          ) : formError ? (
            <div className="mx-auto max-w-[400px] p-6 bg-red-100 text-red-800 rounded-lg shadow-lg text-center animate-fade-in">
            <h2 className="text-2xl font-bold">Oops!</h2>
            <p className="mt-3">
              There was an error submitting your form. Please contact us and we will ensure your smooth onboarding at{" "}
              <a
                href="mailto:info@crozic.com"
                className="font-bold underline"
              >
                info@crozic.com
              </a>
            </p>
          </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your work email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="company"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                Register for Waitlist
              </button>
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
              <a
                href="https://calendly.com/chiragagrawal774/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                  Schedule a Demo Meet
                </button>
              </a>
            </div>
          </form>
          )}
          {/* Contact form */}
         
        </div>
      </div>
    </section>
  );
}
