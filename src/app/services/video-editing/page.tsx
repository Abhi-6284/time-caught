import { Video } from "lucide-react";

export default function VideoEditingPage() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Video Editing
          </h1>
          <div className=" mx-auto bg-white p-8 rounded-lg shadow-md">
            <Video className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <p className="text-lg mb-6">
              Transform your raw footage into captivating stories with our
              professional video editing services. We bring your vision to life
              with cutting-edge techniques and creative expertise.
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              Our Video Editing Services Include:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Color grading and correction</li>
              <li>Sound design and audio mixing</li>
              <li>Motion graphics and visual effects</li>
              <li>Transitions and pacing optimization</li>
              <li>Subtitles and captions</li>
              <li>Format conversion for various platforms</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Start Your Video Project
            </a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Editing Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">
                Before and after: Corporate video transformation
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <video className="w-full h-auto" controls>
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="p-4 text-center">
                Music video with advanced visual effects
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
