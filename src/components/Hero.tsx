'use client';

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-8 pt-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/company-logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg md:text-xl">COMPANY MARKET</span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#sobre" className="hover:underline">SOBRE NÓS</a>
          <a href="#servicos" className="hover:underline">SERVIÇOS</a>
          <a href="#portfolio" className="hover:underline">PORTFÓLIO</a>
          <a href="#contato" className="hover:underline">CONTATO</a>
          <Image src="/images/br.png" alt="Bandeira BR" width={25} height={16} />
        </nav>

        {/* Menu Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FiMenu className="text-2xl" />
        </button>
        {open && (
          <div className="absolute top-20 right-6 bg-white text-black rounded shadow-md p-4 flex flex-col gap-2 text-sm font-medium z-10">
            <a href="#sobre">SOBRE NÓS</a>
            <a href="#servicos">SERVIÇOS</a>
            <a href="#portfolio">PORTFÓLIO</a>
            <a href="#contato">CONTATO</a>
          </div>
        )}
      </header>

      {/* Conteúdo principal */}
      <div className="h-full flex flex-col justify-center px-6 sm:px-10 md:px-32">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight max-w-4xl">
          O que a nossa <br />
          <span className="font-bold">Agência pode fazer</span> <br />
          <span className="text-[#C8102E] font-semibold">por você?</span>
        </h1>

        {/* Botão Play */}
        <div className="mt-10 flex items-center gap-3 cursor-pointer group w-fit">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-lg group-hover:bg-white group-hover:text-black transition">
            ▶
          </div>
          <span className="text-lg">Play</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full text-center text-sm animate-bounce">
        <p>Conheça a gente!</p>
        <span className="text-xl">↓</span>
      </div>
    </section>
  );
}
