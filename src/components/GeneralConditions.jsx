import React from 'react'

export default function GeneralConditions() { 

    const unayHR_Terms = [
        {
          title: "C. Support and Training",
          content: [
            "UnayHR is offered as a one-time purchase, granting full ownership of the software to the user.",
            "An optional yearly support and training subscription is available, which includes software updates, unlimited support, and training. The support subscription fee is capped at 10% of the initial purchase price.",
            "Comprehensive training programs are provided to ensure users are fully equipped to utilize the software effectively. Training includes initial setup, regular usage, and advanced features."
          ]
        },
        {
          title: "D. Prices and Payment Terms",
          content: [
            "Payments are required upfront prior to downloading the software. Accepted payment methods include bank transfers and card payments.",
            "The software license will be activated once payment is received and cleared. Any fraudulent or cancelled payments will result in license deactivation.",
            "All prices are listed in local currency (GBP) and are exclusive of VAT. Payments must be made in full before software access is granted."
          ]
        },
        {
          title: "E. Client Responsibilities",
          content: [
            "Clients must protect their UnayHR software and refrain from unauthorized sharing or distribution. Sharing the software with unauthorized parties will lead to immediate license deactivation and potential legal action.",
            "Clients are required to comply with all terms and conditions set forth by UnayHR. Non-compliance may result in service termination and legal consequences."
          ]
        },
        {
          title: "F. UnayHR Responsibilities",
          content: [
            "UnayHR is committed to protecting client data through stringent compliance with data protection regulations. Clients are advised to follow all recommended security practices to enhance their own data protection.",
            "UnayHR will maintain transparency in all communications with clients and provide timely updates regarding software performance, upgrades, and any potential security concerns."
          ]
        },
        {
          title: "G. Annual Support Training Upgrade Subscriptions",
          content: [
            "Support subscriptions are optional from the second year of product purchase. These subscriptions include maintenance services, software upgrades, and unlimited support and training.",
            "Support subscriptions must be renewed annually. Clients will be notified of upcoming renewals and payment deadlines to ensure continuous support and upgrades."
          ]
        },
        {
          title: "H. Termination of Service",
          content: [
            "UnayHR reserves the right to terminate service for non-payment or breach of terms. Clients will receive immediate notice via email for security breaches and a one-month notice for non-payment breaches.",
            "Clients may terminate their support subscription at any time, with immediate notice. No refunds will be provided for fees already charged. Clients retain ownership of the purchased software."
          ]
        },
        {
          title: "I. Cancellation of Service by Client",
          content: [
            "Clients may uninstall the software at any time, which will automatically notify UnayHR. The software license will be archived, and the software will cease to function.",
            "Clients may cancel their support subscription, but no refunds will be issued for fees already charged. Clients are responsible for securing their databases upon uninstallation."
          ]
        },
        {
          title: "J. Monthly Subscription and Payment",
          content: [
            "UnayHR software is a one-time purchase, with support subscriptions being yearly from the second year.",
            "All prices and subscription fees are set out in this document and on our website. Payments must be made in advance, and prices are exclusive of VAT. UnayHR will not be responsible for any delays or failures caused by non-payment."
          ]
        },
        {
          title: "K. Limitation of Liability",
          content: [
            "UnayHR is not liable for any losses, damages, or expenses incurred due to data management failures or cyber security breaches. Clients must follow all recommended security protocols and back up their data regularly.",
            "Clients are responsible for protecting their data and following security procedures. UnayHR will assist in securing data but is not liable for any breaches resulting from client negligence."
          ]
        },
        {
          title: "L. Ownership, Backup & Retention of Records",
          content: [
            "Clients retain ownership of their data. UnayHR can provide backup services upon request, but clients are ultimately responsible for their data backup and retention.",
            "Upon termination of service, UnayHR will return any original documents if requested. UnayHR will destroy all correspondence and other papers stored to ensure client security."
          ]
        },
        {
          title: "M. Disclaimer",
          content: [
            "UnayHR will not be liable for any loss suffered due to compliance with anti-money laundering legislation or other applicable laws.",
            "UnayHR’s services and products are for the exclusive use of our clients and should not be shared with third parties without prior consent."
          ]
        },
        {
          title: "N. Third Parties",
          content: [
            "All accounts, procedures, statements, reports, and advice provided by UnayHR are for the exclusive use of the client.",
            "No third party shall acquire any rights to our agreement to provide professional services without prior consent."
          ]
        },
        {
          title: "O. Availability of Service",
          content: [
            "UnayHR strives to provide uninterrupted service but is not liable for interruptions due to circumstances beyond our control, such as power outages or network issues.",
            "For operational reasons, UnayHR may change the technical specifications of the service. Clients will be informed of any changes that affect their usage."
          ]
        },
        {
          title: "P. Privacy Policy, Security & Conditions",
          content: [
            "UnayHR does not share client information with third parties. All data is used solely for client interaction and service provision.",
            "Clients must provide proof of identity, registration, and address for security purposes. Access changes will require verification.",
            "These terms and conditions are binding for all clients using UnayHR. They are governed by and construed in accordance with UK law. The UK courts will have exclusive jurisdiction in relation to any claim, dispute, or difference concerning these terms and conditions."
          ]
        }
      ];
      
  return (
    <section className='font-lora mx-5 lg:mx-20 pb-10'>
      <div>
        <h1 className='text-center pb-5 text-3xl '>General Terms and Conditions</h1>

        <div className='flex flex-col gap-3'>
            <h1 className='text-[#2c55c4] font-semibold text-xl' >A. Usage and Guarantees</h1>
            <p className='text-sm'>UnayHR Solutions: UnayHR provides tools and software to facilitate effective HR management and compliance. While we strive to
                 ensure the highest level of security and functionality, complete protection against all forms of non-compliance or unauthorized 
                 access cannot be guaranteed. It is the user’s responsibility to implement all recommended procedures and use all features for 
                 maximum efficacy. User Responsibilities: Users are required to regularly monitor and manage the software to ensure compliance and 
                 security. This includes daily checks for compliance adherence and monitoring for any unauthorized access attempts.</p>
        </div>

        <div className='flex flex-col gap-3'>
            <h1 className='text-[#2c55c4] font-semibold text-xl' >B. Upgrading</h1>
            <p className='border text-center px-5 py-3 border-black'>Upgrades are essential to counter continued cyber intruders new technology </p>
            <p className='text-sm'>Essential Upgrades: Regular upgrades are essential to counter new compliance requirements and evolving cyber 
                threats. These upgrades are included in the support subscription and must be installed promptly by the user to maintain optimal 
                functionality and security.</p>
            <p><strong>Upgrade Notifications:</strong> Users will receive notifications about available upgrades and the importance of implementing them to ensure
                 ongoing protection and compliance.</p>
        </div>

        {unayHR_Terms.map((item , index) =>(
            <div className='flex flex-col gap-3 mt-5' key={index}>
                <h1 className='text-[#2c55c4] font-semibold text-xl'>{item.title}</h1>
                {item.content.map((para)=>(
                    <p>{para}</p>
                ))}
            </div>
        ))}

        <div className='my-5 font-semibold'>
            <p>UnayHR Headquarters:</p>
            <p>UnayHR , London ,UK.</p>
        </div>
        <p>For more information, please visit our website: <a href="https://unayhr.com/" className='text-[#2c55c4] underline'>unayhr.com</a></p>
      </div>
    </section>
  )
}
