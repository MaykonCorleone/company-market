import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 px-6 md:px-12 xl:px-32">
      <div className="flex flex-col md:flex-row items-center gap-16 relative">
        {/* Área das imagens */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          {/* Barrinha lateral */}
          <div className="absolute left-0 top-0 h-full w-2 bg-[#C8102E] hidden md:block" />

          {/* Imagem principal */}
          <div className="relative z-10 ml-4 md:ml-8 shadow-md border-4 border-white w-[250px] sm:w-[300px] md:w-[350px]">
            <Image
              src="/images/about/about1.png"
              alt="Menino sorrindo"
              width={350}
              height={420}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Imagem sobreposta (somente desktop) */}
          <div className="absolute hidden md:block top-[11rem] left-[10rem] xl:left-[12rem] z-20 border-l-8 border-t-8 border-white">
            <Image
              src="/images/about/about2.png"
              alt="Pessoas programando"
              width={250}
              height={280}
              className="object-cover border-8 border-white"
            />
          </div>
        </div>

        {/* Área de texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-500 mb-2 text-sm sm:text-base">Lorem ipsum dolor sit amet.</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            SED TEMPUS NULLA AC <span className="text-[#C8102E]">CONDIMENTUM</span>,<br />
            VITAE CONDIME.
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            Sed semper porttitor ante, vel mattis nibh feugiat at. Proin semper tellus a metus congue,
            nec sagittis odio egestas. Nam a odio porta, blandit massa eu, congue mauris. Vestibulum mollis
            erat magna, non imperdiet justo fringilla eu.
          </p>
          <a
            href="#contato"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-[#C8102E] transition"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
