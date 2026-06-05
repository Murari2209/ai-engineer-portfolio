import Container from "@/components/layout/Container";

export default function AboutSection() {
  return (
    <section id="about">
      <Container>

        <div className="max-w-4xl">

          <p className="text-blue-400 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Building Solutions That Matter
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">

             <p>
              I am a Senior Software Developer with 9 years of experience
              building enterprise applications, backend systems, APIs,
              and business solutions across multiple domains.
            </p>

            <p>
              My journey started with PHP development and evolved toward
              modern Python ecosystems, automation platforms, API
              engineering, and AI-powered applications.
            </p>

            <p>
              Today, I focus on Python development, AI automation,
              developer tools, analytics platforms, and scalable backend
              architectures while continuously expanding my expertise in
              AI Engineering and intelligent systems.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}