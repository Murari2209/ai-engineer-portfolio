import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-5 text-2xl">

      <a
        href="https://github.com/Murari2209"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/murari-shrivastava-0377b182"
        target="_blank"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:shrivastava.murari@gmail.com"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}