import React from 'react'

function Policy() {
  return (
    <section className="relative">

  {/* User Policy */}
  <div className="bg-black-800 py-12">
    <div className="max-w-6xl mx-auto px-6 sm:px-10">
      <div className="space-y-10 text-center md:text-left items-center">
        
        {/* Page Header */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-100">User Policy</h2>
        <p className="text-lg text-gray-300">
          CrozAI values your trust. This User Policy outlines the acceptable use, privacy commitments, and your responsibilities as a user.
        </p>

        {/* User Policy Section */}
        <div className="text-gray-300 space-y-6">
          <h3 className="text-xl font-semibold text-gray-100">1. User Registration</h3>
          <p>Users must register with accurate details and maintain account security. Sharing account credentials is prohibited.</p>

          <h3 className="text-xl font-semibold text-gray-100">2. Content Usage</h3>
          <p>The AI-generated content is to be used for personal or business purposes as per the licensing terms provided by CrozAI.</p>

          <h3 className="text-xl font-semibold text-gray-100">3. Privacy and Data Protection</h3>
          <p>We adhere to strict data protection laws. User information will not be shared with third parties without consent. Refer to our Privacy Policy for more details.</p>

          <h3 className="text-xl font-semibold text-gray-100">4. Reporting Violations</h3>
          <p>If you encounter content or behavior that violates these terms, report it through our contact page. We will take necessary actions to resolve the issue promptly.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )}


export default Policy