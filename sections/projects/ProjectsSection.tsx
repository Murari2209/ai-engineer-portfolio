import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const projects = [
   {
    title: "GitHub Analytics Platform",
    description:
      "Developer intelligence platform that analyzes GitHub profiles, repositories, commits, stars, forks, and contribution activity with actionable insights.",
    github: "https://github.com/Murari2209/Github-Analyzer",
    tech: ["Python", "GitHub API", "FastAPI", "MySQL"],
    featured: true,
  },

  {
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analysis platform with ATS scoring and skill extraction.",
    github: "#",
    tech: ["Python", "AI", "FastAPI"],
  },

 {
    title: "AI Automation Dashboard",
    description:
      "Centralized automation dashboard for managing workflows and AI tasks.",
    github: "#",
    tech: ["Python", "Automation"],
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
              github={project.github}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}