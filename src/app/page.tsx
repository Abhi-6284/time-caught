import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to Time Caught</h2>
          <p className="text-xl mb-8">
            Explore the art of capturing moments through our lens. From stunning
            photography to captivating videos, we freeze time and create lasting
            memories.
          </p>
          <a
            href="/portfolio"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </section> */}
      <Services />
    </div>
  );
}
