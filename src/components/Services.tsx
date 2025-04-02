import { Monitor, Rocket, Sun } from "lucide-react";

const services = [
  {
    title: "Design & Comunicação",
    description:
      "Sed semper porttitor ante, vel mattis nibh feugiat at. Proin semper tellus a metus congue, nec sagittis odio egestas.",
    icon: <Sun size={32} />,
  },
  {
    title: "Marketing",
    description:
      "Sed semper porttitor ante, vel mattis nibh feugiat at. Proin semper tellus a metus congue, nec sagittis odio egestas.",
    icon: <Rocket size={32} />,
  },
  {
    title: "Software",
    description:
      "Sed semper porttitor ante, vel mattis nibh feugiat at. Proin semper tellus a metus congue, nec sagittis odio egestas.",
    icon: <Monitor size={32} />,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-black text-white py-24 px-6 sm:px-10 xl:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className="mb-12">
          <div className="h-1 w-10 bg-[#C8102E] mb-2" />
          <h2 className="text-3xl font-bold">SERVIÇOS</h2>
          <p className="text-[#C8102E] mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar">
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white text-black p-6 rounded shadow-md hover:bg-[#C8102E] hover:text-white transition-colors duration-300 flex flex-col gap-4"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Indicadores e setas (visuais apenas) */}
        <div className="flex items-center justify-between mt-12 flex-wrap gap-4">
          {/* Marcadores */}
          <div className="flex gap-2">
            <div className="w-4 h-1 bg-[#C8102E] rounded" />
            <div className="w-4 h-1 bg-white/30 rounded" />
            <div className="w-4 h-1 bg-white/30 rounded" />
          </div>

          {/* Setas */}
          <div className="flex gap-4">
            <button className="w-8 h-8 border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
              {"<"}
            </button>
            <button className="w-8 h-8 border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
