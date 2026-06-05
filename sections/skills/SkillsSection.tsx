import Container from "@/components/layout/Container";

const skills = [
  "Python",
  "FastAPI",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "AI Automation",
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <Container>

        <p className="text-blue-400 font-medium mb-3">
          SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className=" group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center hover:border-blue-400/50 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 "
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}