import { Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const SMMPage = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Social Media Marketing
          </h1>
          <div className=" mx-auto bg-white p-8 rounded-lg shadow-md">
            <Share2 className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <p className="text-lg mb-6">
              Boost your online presence with our tailored SMM strategies. We
              help you connect with your audience, increase engagement, and grow
              your brand across various social media platforms.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image src="/placeholder.svg" alt="Social Media Campaign 1" width={400} height={300} layout="responsive" />
              <p className="p-4 text-center">Engaging Instagram campaign for a lifestyle brand</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image src="/placeholder.svg" alt="Social Media Campaign 2" width={400} height={300} layout="responsive" />
              <p className="p-4 text-center">Viral TikTok challenge for a food delivery service</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">Behind-the-scenes of our content creation process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMMPage;
