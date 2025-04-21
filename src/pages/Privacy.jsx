import React from 'react'

export default function Privacy() {
  return (
    <section className='font-lora mx-5 md:mx-20 py-10 '>
      <div>
        <h1 className='text-center text-3xl pb-10'>UnayHR Privacy Policy</h1>

        {/*  Introduction */}
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>1. Introduction</h1>
            <p>Welcome to UnayHR. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you 
                access our website and utilize our cyber security services. </p>
            <p>Protecting your privacy and personal data is of utmost importance to us, and we are committed to ensuring the security and 
                confidentiality of the information you provide.</p>
        </div>
        
        {/*  Information We Collect */}
        <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>2. Information We Collect</h1>
            <p><strong> a) Personal Information:</strong> When you interact with our website or engage with our cyber security services, we may
             collect personal information such as your name, email address, contact details, and any other information you provide voluntarily.</p>
            
            <p><strong>b) Usage Data:</strong>We may automatically collect certain information about your visit to our website, including your IP address, 
            device information, browser type, and pages visited. This data is collected to improve our website’s functionality and to better
             understand how visitors interact with our content.</p>

             <p><strong>c) Cookies and Similar Technologies: </strong>We use cookies and similar tracking technologies to enhance your browsing
              experience on our website. Cookies allow us to remember your preferences and recognize you when you return to our site. You can
               manage your cookie preferences through your browser settings.</p>
        </div>

         {/*  How We Use Your Information */}
         <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>3. How We Use Your Information</h1>
            <p><strong> a) Providing Services:</strong> We use your personal information to deliver our cyber security services, including
             vulnerability assessments, penetration testing, incident response, and more.</p>
            
            <p><strong>b) Improving User Experience:</strong>Your data helps us tailor our website content, services, and offerings to meet your
             needs and preferences, providing you with a seamless and personalized experience.</p>

             <p><strong>c) Communication: </strong>We may use your contact information to respond to your inquiries, provide updates about our 
             services, and send relevant marketing communications if you opt-in to receive them.</p>
        </div>

        {/* Information Sharing and Disclosure */}
        <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>4. Information Sharing and Disclosure</h1>
            <p><strong> a) Third-Party Service Providers:</strong> We may share your personal information with trusted third-party service 
            providers who assist us in delivering our services, such as hosting, data analysis, and customer support. These providers are 
            contractually obligated to protect your data and can only use it for the specified purposes.
            </p>
            
            <p><strong>b) Legal Compliance:</strong>We may disclose your personal information when required by law, in response to a court order,
             legal process, or to comply with applicable regulations.</p>
        </div>

        {/* Data Security*/}
        <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>5. Data Security</h1>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, loss, alteration,
            or disclosure. However, please note that no data transmission over the internet or storage system can be guaranteed to be 100% secure.</p>
        </div>

        {/*Your Choices and Rights*/}
        <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>6. Your Choices and Rights</h1>
            <p>You have the right to access, update, or delete your personal information, and you may opt-out of marketing 
                communications at any time. To exercise these rights or for any privacy-related queries, please contact us.</p>
        </div>

        {/*Changes to the Privacy Policy */}
        <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>7. Changes to the Privacy Policy</h1>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the 
                updated version on our website with the revised effective date.</p>
        </div>

        {/*Contact Us */}
        <div className='flex flex-col gap-3 mt-5'>
            <h1 className='text-2xl font-semibold'>8. Contact Us</h1>
            <p>If you have any questions or concerns about our Privacy Policy or our privacy practices, please contact us.</p>
            <p>By accessing our website or using our services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>
        </div>

        <div>
            <p className='text-lg font-medium text-center mt-5'>Thank you for choosing UnayHR</p>
        </div>


      </div>
    </section>
  )
}
