
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sofitel Frankfurt Opera</title>
        <meta 
          name="description" 
          content="Privacy Policy for Sofitel Frankfurt Opera - Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8 mt-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="mb-6">Last updated: July 1, 2023</p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At Sofitel Frankfurt Opera, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person 
              can be identified. We may collect, use, store and transfer different kinds of personal data about you which 
              we have grouped together as follows:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Identity Data includes first name, last name, username or similar identifier, title, date of birth.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Financial Data includes payment card details (which are processed securely by our payment providers).</li>
              <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
              <li>Usage Data includes information about how you use our website, products and services.</li>
              <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors and other third parties who have a business need to know. 
              They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">5. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">6. Changes to the Privacy Policy</h2>
            <p className="mb-4">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page. You are advised to review this privacy policy periodically for any changes. 
              Changes to this privacy policy are effective when they are posted on this page.
            </p>
            
            <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="mb-8">
              <strong>Sofitel Frankfurt Opera</strong><br />
              Opernplatz 16<br />
              60313 Frankfurt am Main, Germany<br />
              Email: privacy@sofitel-frankfurt.com<br />
              Phone: +49 69 256695 0
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
