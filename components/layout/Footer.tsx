import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Murari Shrivastava. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="https://github.com/Murari2209"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-gray-300
                hover:text-white
                hover:border-blue-500/40
                hover:bg-blue-500/10
                transition-all
                duration-300 "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/murari-shrivastava-0377b182"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3
    rounded-xl
    bg-white/5
    border
    border-white/10
    text-gray-300
    hover:text-white
    hover:border-blue-500/40
    hover:bg-blue-500/10
    transition-all
    duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:shrivastava.murari@gmail.com"
                className="p-3
    rounded-xl
    bg-white/55
    border
    border-white/10
    text-gray-300
    hover:text-white
    hover:border-blue-500/40
    hover:bg-blue-500/10
    transition-all
    duration-300"
              >
                <FaEnvelope />
              </a>

            
          </div>

        </div>
      </Container>
    </footer>
  );
}