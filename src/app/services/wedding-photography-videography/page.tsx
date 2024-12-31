import { Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const WeddingPackagePage = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Wedding Photography & Videography
          </h1>
          <div className=" mx-auto bg-white p-8 rounded-lg shadow-md">
            <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <p className="text-lg mb-6">
              Preserve the magic of your special day with our expert wedding
              photography and videography services. We capture every precious
              moment, from intimate details to grand celebrations.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              Our Wedding Services Include:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Engagement photo sessions</li>
              <li>Full-day wedding coverage</li>
              <li>Cinematic wedding films</li>
              <li>Drone footage for stunning aerial shots</li>
              <li>Photo and video editing with quick turnaround</li>
              <li>Custom wedding albums and prints</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Book Your Wedding Package
            </a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Wedding Moments Captured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg"
                alt="Wedding Photo 1"
                width={400}
                height={300}
                layout="responsive"
              />
              <p className="p-4 text-center">Emotional first look moment</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg"
                alt="Wedding Photo 2"
                width={400}
                height={300}
                layout="responsive"
              />
              <p className="p-4 text-center">
                Stunning bride and groom portrait
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">
                Cinematic wedding highlight reel
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPackagePage;
