import Container from "@/components/layout/Container";

const stats = [
  {
    value: "9+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "3",
    label: "Government Projects",
  },
  {
    value: "100%",
    label: "Client Commitment",
  },
];

export default function StatsSection() {
  return (
    <section>
      <Container>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-6
                text-center
              "
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-2">
                {item.value}
              </h3>

              <p className="text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}