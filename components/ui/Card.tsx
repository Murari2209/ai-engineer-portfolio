interface CardProps {
  title: string;
  description: string;
}

export default function Card({
  title,
  description,
}: CardProps) {
  return (
    <div className="
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
    ">

      <div className="mb-5">
        <div className="
          w-12
          h-12
          rounded-xl
          bg-blue-500/20
          flex
          items-center
          justify-center
        ">
          🚀
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 text-blue-400 font-medium">
        View Details →
      </div>

    </div>
  );
}