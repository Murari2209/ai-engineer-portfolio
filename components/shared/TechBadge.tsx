interface TechBadgeProps {
  name: string;
}

export default function TechBadge({
  name,
}: TechBadgeProps) {
  return (
    <span className="
      px-3
      py-1
      rounded-full
      text-sm
      bg-blue-500/10
      border
      border-blue-500/20
      text-blue-300
    ">
      {name}
    </span>
  );
}