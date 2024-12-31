import React from "react";
import { Camera } from "lucide-react";

const VideoShootsPage = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Video Shoots
          </h1>
          <div className=" mx-auto bg-white p-8 rounded-lg shadow-md">
            <Camera className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <p className="text-lg mb-6">
              Capture stunning visuals with our professional video production
              services. We specialize in creating high-quality video content for
              a variety of needs and industries.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              Our Video Shoot Services Include:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Product videos - Showcase your products in the best light</li>
              <li>Fashion shoots - Bring your fashion line to life</li>
              <li>
                Wedding videos - Capture your special day in cinematic quality
              </li>
              <li>
                Reels - Create engaging short-form content for social media
              </li>
              <li>
                Real estate tours - Highlight properties with professional
                videography
              </li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Book a Video Shoot
            </a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Video Production Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">Luxury product showcase</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">Fashion week highlights reel</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">Cinematic real estate tour</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShootsPage;
