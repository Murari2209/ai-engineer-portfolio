import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const projects = [
  {
    title: "GitHub Analytics Platform",
    description:
      "Analyze GitHub profiles, repositories, contribution history, and developer activity with visual insights and analytics.",
  },

  {
    title: "AI Resume Analyzer",
    description:
      "Upload resumes and receive ATS analysis, skill extraction, job matching, and improvement suggestions.",
  },

  {
    title: "AI Automation Dashboard",
    description:
      "Centralized platform to manage automation workflows, AI-powered tasks, and productivity processes.",
  },

  {
    title: "Portfolio Platform",
    description:
      "Modern developer portfolio built with Next.js, Tailwind CSS, and scalable architecture principles.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <Container>

        <p className="text-blue-400 font-medium mb-3">
          PROJECTS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}