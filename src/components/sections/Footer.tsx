import { SocialMedia } from "@/data/socialmedia"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Time Caught. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {Object.values(SocialMedia).map((platform) => {
            const Icon = platform.icon; // Get the icon component from the SocialMedia object
            return (
              <a
                key={platform.link}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center space-x-2"
              >
                <Icon size={20} /> {/* Icon size can be adjusted here */}
                <span>{platform.link.split(".")[1]}</span> {/* Dynamically extract platform name */}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
