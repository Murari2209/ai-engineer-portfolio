import Container from "@/components/layout/Container";

export default function ContactSection() {
  return (
    <section id="contact">
      <Container>

        <div className="max-w-3xl">

          <p className="text-blue-400 font-medium mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Whether you need a Python developer,
            AI automation engineer, or full-stack solution,
            I'd be happy to discuss your project.
          </p>

          <div className="space-y-4">

            <p>
              📧 shrivastava.murari@gmail.com
            </p>

            <p>
              +91 9039948775
            </p>

            <p>
              📍 New Delhi, India
            </p>

            <p>
              💼 Available for opportunities
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}