import React, { useState } from 'react';
import blog1 from '../assets/blog/blog1.webp';
import blog2 from '../assets/blog/blog2.webp';
import blog3 from '../assets/blog/blog3.webp';
import blog4 from '../assets/blog/blog4.webp';
import blog5 from '../assets/blog/blog5.webp';
import blog6 from '../assets/blog/blog6.webp';

export default function Blog() {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const Blogs = [
        {
            img: blog1,
            heading: "Transforming Payroll Management for Businesses",
            content: `Managing payroll is a crucial aspect of any business, yet it remains one of the most complex and time-consuming tasks. From calculating salaries and taxes to ensuring compliance with labor laws, payroll processing demands precision and efficiency. However, many companies still rely on outdated manual methods, which increase the risk of errors, miscalculations, and compliance issues. A single payroll mistake can result in penalties, legal trouble, and employee dissatisfaction. This is why businesses are shifting towards automation, and UnayHR Payroll offers an all-in-one solution that simplifies payroll processing while ensuring accuracy and compliance.
                     UnayHR Payroll is designed to streamline the entire payroll process, from salary calculations to tax deductions and payslip generation. It eliminates human errors, reduces administrative burden, and ensures employees are paid on time without discrepancies. In this blog, we will explore why payroll automation is essential, how UnayHR helps businesses stay compliant, and how it contributes to employee satisfaction. We’ll also provide a step-by-step guide on running payroll with UnayHR, discuss common payroll mistakes, and explain why cloud-based payroll solutions are the future.`
        },
        {
            img: blog2,
            heading: "Why Automating Payroll is a Game-Changer for Businesses",
            content: `For decades, payroll processing has been a tedious task that requires HR teams to manually calculate employee salaries, 
            deductions, overtime, and bonuses. This process is prone to errors, and even a minor mistake can lead to serious financial and legal
             consequences. Payroll errors not only affect the company’s finances but also impact employee morale. When salaries are delayed or 
             miscalculated, employees lose trust in the organization, which can result in lower productivity and higher turnover rates.
            Automation is revolutionizing payroll by eliminating manual errors and increasing efficiency. With UnayHR Payroll, businesses no 
            longer need to spend hours handling calculations, tax deductions, and compliance requirements. The system automates salary 
            computations, applies the latest tax laws, and generates accurate payslips within minutes. This ensures that employees are paid 
            correctly and on time, reducing payroll-related disputes. Moreover, payroll automation allows businesses to scale effortlessly. 
            Whether a company has ten employees or a thousand, an automated payroll system can handle payroll processing efficiently, without 
             additional workload on HR teams.Another key advantage of payroll automation is security. Manual payroll records are often stored in 
             spreadsheets or physical files, which can be lost, misplaced, or accessed by unauthorized individuals. With UnayHR, payroll data is 
             securely stored in the cloud with encryption and access controls, ensuring sensitive employee information remains confidential. 
             Additionally, automated payroll systems integrate seamlessly with accounting software, making financial reporting and audits much
              easier. By adopting UnayHR Payroll, businesses can eliminate payroll headaches, save time, and focus on growth rather than 
              administrative tasks.`
        },
        {
            img: blog3,
            heading: "How UnayHR Ensures Payroll Compliance with Tax Regulations",
            content: `One of the biggest challenges in payroll management is staying compliant with ever-changing tax regulations and labor laws.
             Governments frequently update tax rules, and businesses must adjust payroll calculations accordingly to avoid penalties.
              Non-compliance can lead to hefty fines, audits, and legal issues, which can severely impact a company’s reputation and finances. 
              Manually keeping up with tax updates and ensuring accurate deductions for each employee can be overwhelming, but UnayHR simplifies 
              this process with its automated compliance features.UnayHR Payroll is programmed to apply the latest tax laws and automatically 
              calculate deductions for income tax, provident fund, professional tax, and other statutory contributions. The system generates 
              detailed reports that help businesses file tax returns accurately and on time, reducing the risk of penalties. Additionally, 
              UnayHR ensures that payroll records are maintained as required by law, making audits easier and stress-free.Another crucial aspect
               of compliance is proper employee classification. Misclassifying employees as independent contractors or vice versa can result in
                tax liabilities and legal disputes. UnayHR’s system ensures that employees are categorized correctly, and their salaries, 
                benefits, and tax deductions are processed accordingly. Compliance isn’t just about avoiding fines—it’s about maintaining a 
                company’s credibility and fostering trust among employees. With UnayHR, businesses can rest assured that they are meeting all 
                payroll-related legal obligations without extra effort.`
        },
        {
            img: blog4,
            heading: "The Role of Payroll Software in Employee Satisfaction",
            content: `Employee satisfaction is directly linked to how well payroll is managed. When employees receive their salaries on time and with accurate deductions, they feel valued and motivated. On the other hand, payroll errors, delays, and discrepancies can create frustration and mistrust. A well-functioning payroll system enhances transparency and builds a positive work environment where employees can focus on their jobs without worrying about salary issues.
            UnayHR Payroll ensures that employees are paid promptly and correctly every pay cycle. The system provides automated payslips that offer 
            a clear breakdown of earnings, deductions, and net pay, ensuring transparency. Employees can access their salary details through a 
            self-service portal, reducing their dependency on HR for payroll queries. Additionally, automated payroll processing eliminates the risk of
             salary delays, which is a major factor in employee dissatisfaction.Another aspect of payroll that impacts employee satisfaction is
              tax deductions and compliance. Many employees struggle with understanding tax deductions, and incorrect deductions can lead to
               financial stress. UnayHR simplifies this by applying accurate tax calculations and providing detailed breakdowns, so employees 
               know exactly how their salaries are calculated. By ensuring smooth payroll operations, UnayHR helps companies build a strong 
               employer-employee relationship, leading to higher job satisfaction and retention rates.`
        },
        {
            img: blog5,
            heading: "Why Small Businesses Need Cloud-Based Payroll Solutions",
            content: `For small businesses, managing payroll manually can be overwhelming. Many startups and SMEs lack a dedicated HR team, 
            making payroll processing a burden for business owners. A cloud-based payroll solution like UnayHR provides an affordable and 
            efficient way for small businesses to manage payroll without investing in expensive payroll departments.With cloud-based payroll, 
            businesses can access payroll data from anywhere, making remote payroll processing possible. Unlike traditional payroll systems that 
            require software installation and manual updates, cloud payroll systems are automatically updated to reflect the latest tax laws and
             regulations. This means small businesses can remain compliant without additional effort.Data security is another major advantage of
            cloud payroll. Payroll information is sensitive, and storing it in physical files or spreadsheets increases the risk of data breaches. 
            UnayHR encrypts payroll data and ensures only authorized personnel can access it. Additionally, cloud storage prevents data loss due
             to hardware failure or accidental deletion.By using UnayHR’s cloud payroll system, small businesses can save time, reduce costs, and 
             improve efficiency while ensuring that payroll is handled accurately and securely.`
        },
        {
            img: blog6,
            heading: "A Step-by-Step Guide to Running Payroll with UnayHR",
            content: `UnayHR is designed to make payroll processing quick and hassle-free. The system follows a simple process that ensures 
            payroll is completed accurately every time. The first step is employee setup, where businesses add employee details such as name,
             job role, salary structure, tax information, and deductions. Once this information is entered, the system automatically calculates 
             salaries based on work hours, overtime, bonuses, and deductions.Next, UnayHR applies tax deductions, including income tax, social
              security contributions, and other applicable withholdings. The system ensures compliance by using up-to-date tax rules, eliminating
               the need for manual tax calculations. Once salaries and deductions are finalized, UnayHR generates detailed payslips, which 
               employees can access digitally. The final step is salary payment processing, where payments are transferred directly to employee
                bank accounts through secure banking integrations.One of the key benefits of using UnayHR is its error-checking mechanism. 
                The system scans payroll data for inconsistencies and alerts users to any discrepancies before payroll is finalized. This ensures
                 that errors are caught and corrected before payments are processed. Businesses can also generate payroll reports for financial
                  analysis and tax filings. With UnayHR, payroll processing that used to take hours or even days can now be completed in just a 
                  few minutes.`
        }
    ];

    return (
        <section className="mx-5 lg:mx-20 font-lora lg:py-14">
            <h1 className="text-2xl text-center lg:text-4xl font-bold mb-6">Recent Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Blogs.map((blog, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        <img className="h-[250px] w-full object-cover rounded" src={blog.img} alt={blog.heading} />
                        <h2 className="text-lg font-semibold mt-4">{blog.heading}</h2>
                        <p className="text-gray-600 mt-2">{`${blog.content.split(" ").slice(0, 50).join(" ")}...`}</p>
                        <button
                            className="text-blue-500 underline mt-2"
                            onClick={() => setSelectedBlog(blog)}
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Overlay/Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg h-[70vh]  overflow-x-scroll relative">
                        <button
                            className="absolute top-2 right-3 text-5xl text-red-500"
                            onClick={() => setSelectedBlog(null)}
                        >
                            &times;
                        </button>
                        <img className="h-[250px] w-full object-cover rounded" src={selectedBlog.img} alt={selectedBlog.heading} />
                        <h2 className="text-xl font-bold mt-4">{selectedBlog.heading}</h2>
                        <p className="text-gray-700 mt-2">{selectedBlog.content}</p>
                        <button
                            className=" text-lg text-white bg-red-500 px-5 py-1 rounded-2xl mt-5"
                            onClick={() => setSelectedBlog(null)}
                        >
                           Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
