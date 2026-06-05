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
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>

        </div>
      </Container>
    </footer>
  );
}