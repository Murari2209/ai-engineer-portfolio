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
              I'm a Python Developer focused on AI Automation,
              backend engineering, and building practical software
              solutions that solve real-world problems.
            </p>

            <p>
              My journey started with PHP development and gradually
              evolved into modern Python ecosystems, API development,
              automation workflows, and AI-powered applications.
            </p>

            <p>
              I enjoy building developer tools, automation systems,
              analytics platforms, and scalable backend architectures.
              Currently, I am expanding my expertise toward AI
              Engineering and intelligent automation systems.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}