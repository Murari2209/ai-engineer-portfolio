"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";


export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute top-20 right-0 w-125 h-125 bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-500/10 blur-[150px] rounded-full" />

      <Container>
  <div className="relative z-10 grid lg:grid-cols-[1.4fr_0.8fr] gap-12">

    {/* LEFT COLUMN */}
    <div>
       
      <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-2 rounded-full mb-8">
        <div className="w-3 h-2 bg-blue-300 rounded-full" />
          
        <p className="text-blue-300 text-sm font-medium">
          Senior Software Developer • Python Developer • AI Automation Engineer
        </p>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight mb-6">
        Building Intelligent

        <span className="block text-blue-400">
          AI-Powered
        </span>

        Digital Products
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
        I build scalable automation systems, AI-integrated applications,
        developer tools, and modern full-stack solutions using Python,
        FastAPI, React, and AI technologies.
      </p>

      <div className="flex flex-wrap gap-5">
        <a
          href="#projects"
          className="inline-flex bg-blue-500 hover:bg-blue-500 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20 hover:scale-105"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download
          className="border border-gray-700 hover:border-green-500 bg-white/5 backdrop-blur-sm transition-all duration-300 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10"
        >
          Download Resume
        </a>
      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="hidden lg:flex justify-center">

      <div className="relative">

        <div className="
          absolute
          inset-0
          bg-blue-500/20
          blur-3xl
          rounded-full
        " />

        <Image
          src="/profile/Murari_Profile.png"
          alt="Murari Shrivastava"
          width={280}
          height={280}
          className="
            rounded-full
            border
            border-white/10
            object-cover
           
          "
        />

      </div>

    </div>

  </div>
    </Container>
  </section>
 );
}