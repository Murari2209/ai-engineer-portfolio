import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">

      <Container>

        <div className="flex items-center justify-between h-20">

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Murari.dev
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

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

          <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20 hover:scale-105">
            Hire Me
          </button>

        </div>

      </Container>

    </header>
  );
}