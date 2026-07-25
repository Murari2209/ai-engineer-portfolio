import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">

      <Container>

        <div className="flex items-center justify-between h-10">

          <div className="flex items-center">
            <a href="#home">
             <Image
              src="/logo_murari.png"
              alt="MS Logo"
              width={350}
              height={350}
              className="w-100 h-80 rounded-full"
             />
            </a>
          </div>

          <nav className="flex  items-center gap-10 text-sm text-gray-300">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </nav>

          <a
            href="https://wa.me/919039948775"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-blue-500
              hover:bg-blue-600
              transition-all
              duration-300
              px-4
              py-2
              inline-flex
              rounded-xl
              text-sm
              font-medium
              shadow-lg
              shadow-blue-500/20
              hover:scale-105
            "
          >
            Contact Me
          </a>

        </div>

      </Container>

    </header>
  );
}