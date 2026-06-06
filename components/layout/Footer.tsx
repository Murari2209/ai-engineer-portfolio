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
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/murari-shrivastava-0377b182"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:shrivastava.murari@gmail.com"
                className="hover:text-white transition"
              >
                <FaEnvelope />
              </a>

            
          </div>

        </div>
      </Container>
    </footer>
  );
}