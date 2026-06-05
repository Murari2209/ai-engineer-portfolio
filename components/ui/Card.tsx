interface CardProps {
  title: string;
  description: string;
  github?: string;
}

export default function Card({
  title,
  description,
  github,
}: CardProps) {
  return (
    <div
      className="
        group
        border border-white/10
        bg-white/5
        backdrop-blur-md
        rounded-3xl
        p-8
        hover:border-blue-500/40
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <div className="mb-5">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
          🚀
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}