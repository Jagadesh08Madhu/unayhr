import React from 'react'

export default function Cookie() {
  return (
    <section className='font-lora mx-5 md:mx-20 py-10 '>
        <div>
           <h1 className='text-center text-3xl pb-10'>UnayHR Cookie Policy</h1> 

            {/* What Are Cookies */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl'>What Are Cookies</h1>
                <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to
                   your computer, to improve your experience.
                This page describes what information they gather, how we use it and why we sometimes need
                to store these cookies.</p>
                <p>We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’
                certain elements of the site’s functionality.</p>
                <p>For more general information on cookies see the <a target='_blank' href="https://www.wikipedia.org/" className='underline text-blue-500'>Wikipedia</a> article on HTTP Cookies</p>
            </div>

            {/* How We Use Cookies */}
            <div className='flex flex-col mt-8 gap-3'>
                <h1 className='text-2xl'>How We Use Cookies</h1>
                <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling
                cookies without completely disabling the functionality and features they add to this site. </p>
                <p>It is recommended that you leave on all cookies
                if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                
            </div>

            {/* Disabling Cookies  */}
            <div className='flex flex-col mt-8 gap-3'>
                <h1 className='text-2xl'>Disabling Cookies</h1>
                <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware
                that disabling cookies will affect the functionality of this and many other websites that you visit.  </p>
                <p>Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is 
                    recommended that you do not disable cookies.</p>
            </div>

            {/* The Cookies We Set  */}
            <div className='flex flex-col mt-8 gap-3'>
                <h1 className='text-2xl'>The Cookies We Set</h1>
                <ul className='flex flex-col gap-3 '>
                    <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of 
                    the signup process and general administration. These cookies will usually be deleted when you log out however in some cases, 
                    they may remain afterwards to remember your site preferences when logged out.</li>

                    <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This 
                    prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when 
                    you log out to ensure that you can only access restricted features and areas when logged in.</li>

                    <li><strong>Email newsletters related cookies:</strong>This site offers newsletter or email subscription services and cookies 
                    may be used to remember if you are already registered and whether to show certain notifications which might only be valid to
                     subscribed/unsubscribed users.</li>

                    <li><strong>Orders processing related cookies:</strong>This site offers e-commerce or payment facilities and some cookies are
                     essential to ensure that your order is remembered between pages so that we can process it properly.</li>

                    <li><strong>Surveys related cookies:</strong> From time to time we offer user surveys and questionnaires to provide you with 
                    interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember
                     who has already taken part in a survey or to provide you with accurate results after you change pages.</li>

                    <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or
                     comment forms cookies may be set to remember your user details for future correspondence.</li>

                    <li><strong>Site preferences cookies:</strong>In order to provide you with a great experience on this site we provide the
                     functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need 
                     to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>

                </ul>
            </div>

             {/* Third Party Cookies */}
             <div className='flex flex-col mt-8 gap-3'>
                <h1 className='text-2xl'>Third Party Cookies</h1>

                <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party 
                    cookies you might encounter through this site.</p>
                <ul className='flex flex-col gap-3'>
                    <li>This site uses <a className='text-blue-500 underline' href="https://analytics.google.com/analytics/web/provision/#/provision" target='_blank'>Google Analytics</a> which is one of the most widespread and trusted analytics solution on the web for helping 
                        us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as
                         how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more 
                         information on Google Analytics cookies, see the official <a className='text-blue-500 underline' target="_blank" href="https://analytics.google.com/analytics/web/provision/#/provision">Google Analytics page.</a></li>

                    <li>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content.
                         These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how 
                         we can improve the site for you.</li>

                    <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still 
                        testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst
                         ensuring we understand which optimisations our users appreciate the most.</li>

                    <li>
                    We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various 
                    ways. For these to work the following social media sites including; WhatsApp, Facebook, Instagram, Twitter, Skype, will set 
                    cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for 
                    various purposes outlined in their respective privacy policies.
                    </li>
                </ul>
            </div>

            {/* More Information */}
            <div className='flex flex-col mt-8 gap-3'>
                <h1 className='text-2xl'>More Information</h1>
                <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need
                or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. </p>
                <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods: </p>
                <p>Email: <a className='text-blue-500 underline' href="mailto:unayhr-support@gmail.com">unayhr-support@gmail.com</a></p>
            </div>
        </div> 
    </section>
  )
}
