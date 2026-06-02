import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-500/20 blur-[120px] rounded-full" />

      <Container>
        <div className="relative z-10 max-w-4xl">

          <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />

            <p className="text-blue-300 text-sm font-medium">
              AI Automation Engineer & Python Developer
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">

            Building Intelligent

            <span className="block text-blue-500">
              AI-Powered
            </span>

            Digital Products
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I build scalable automation systems, AI-integrated applications,
            developer tools, and modern full-stack solutions using Python,
            FastAPI, React, and AI technologies.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20 hover:scale-105">
              View Projects
            </button>

            <button className="border border-gray-700 hover:border-gray-500 bg-white/5 backdrop-blur-sm transition-all duration-300 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10">
              Download Resume
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}