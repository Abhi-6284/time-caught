import { Share2 } from "lucide-react";
import React from "react";

const SMMPage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Social Media Marketing
        </h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <Share2 className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <p className="text-lg mb-6">
            Boost your online presence with our tailored SMM strategies. We help
            you connect with your audience, increase engagement, and grow your
            brand across various social media platforms.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Our SMM Services Include:
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>Content strategy development</li>
            <li>Social media account management</li>
            <li>Engaging post creation and scheduling</li>
            <li>Audience growth and engagement tactics</li>
            <li>Performance analytics and reporting</li>
            <li>Paid social media advertising campaigns</li>
          </ul>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get Started with SMM
          </a>
        </div>
      </div>
    </section>
  );
};

export default SMMPage;
