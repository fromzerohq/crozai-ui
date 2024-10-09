import React from 'react'

function Terms() {
  return (
    <section className="relative">
    {/* Terms of Service */}
    <div className="bg-black-800 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="space-y-10 text-center md:text-left items-center">
          
          {/* Page Header */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-100">Terms of Service</h2>
          <p className="text-lg text-gray-300">
            Welcome to CrozAI, an AI-driven platform specializing in the creation of dynamic technical content using digital humans. 
            By using our platform, you agree to these terms. Please read them carefully.
          </p>
  
          {/* Terms Section */}
          <div className="text-gray-300 space-y-6">
            <h3 className="text-xl font-semibold text-gray-100">1. Acceptance of Terms</h3>
            <p>By accessing or using CrozAI, you agree to comply our these Terms of Service. For more information , please reach out to us at info@crozai.com .</p>
  
            <h3 className="text-xl font-semibold text-gray-100">2. Service Description</h3>
            <p>CrozAI provides AI-generated technical content with digital humans for training, demo, and marketing purposes. We may update or modify our services without prior notice.</p>
  
            <h3 className="text-xl font-semibold text-gray-100">3. User Responsibilities</h3>
            <p>Users must be over 18 years of age, provide accurate information, and maintain the confidentiality of their accounts.</p>
  
            <h3 className="text-xl font-semibold text-gray-100">4. Prohibited Activities</h3>
            <ul className="list-disc ml-6">
              <li>Engaging in illegal activities or using the platform for unauthorized purposes.</li>
              <li>Attempting to hack, overload, or disrupt the service.</li>
              <li>Misusing content for non-compliant business purposes.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-100">5. Content Ownership</h3>
            <p>All AI-generated content and digital human media are the property of CrozAI. You may not reproduce or resell any platform-generated content without consent.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )}


export default Terms