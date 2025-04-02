'use client';

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contato" className="bg-black text-white px-6 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        {/* Logo + Nome + Contato */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/company-logo.png" alt="Company Logo" width={60} height={60} />
            <div className="leading-tight">
              <h1 className="text-xl font-semibold">COMPANY</h1>
              <h2 className="text-xl font-semibold">MARKET</h2>
            </div>
          </div>
          <p>+55 21 3232-5454</p>
          <p>+55 21 98889-9090</p>
          <p>contato@companymarket.com</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">MENU</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-[#C8102E] transition">SOBRE NÓS</a></li>
            <li><a href="#services" className="hover:text-[#C8102E] transition">SERVIÇOS</a></li>
            <li><a href="#portfolio" className="hover:text-[#C8102E] transition">PORTFÓLIO</a></li>
            <li><a href="#contact" className="hover:text-[#C8102E] transition">CONTATO</a></li>
          </ul>
          <div className="mt-4">
            <Image src="/images/br.png" alt="Bandeira do Brasil" width={32} height={20} />
          </div>
        </div>

        {/* Redes Sociais + Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">REDES SOCIAIS</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="hover:text-[#C8102E] transition text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#C8102E] transition text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-[#C8102E] transition text-xl"><FaLinkedinIn /></a>
            <a href="https://github.com/MaykonCorleone" target="_blank" className="hover:text-[#C8102E] transition text-xl"><FaGithub /></a>
          </div>
          <h3 className="font-semibold mb-2">NEWSLETTER</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="E-MAIL"
              className="text-black px-3 py-2 w-full sm:w-auto sm:flex-1"
            />
            <button className="text-[#C8102E] border border-[#C8102E] hover:bg-[#C8102E] hover:text-white transition px-4 py-2 rounded font-semibold">
              ENVIAR
            </button>
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <h3 className="font-semibold mb-4">MENSAGEM</h3>
          <input
            type="text"
            placeholder="NOME"
            className="text-black px-3 py-2 w-full mb-2"
          />
          <input
            type="email"
            placeholder="E-MAIL"
            className="text-black px-3 py-2 w-full mb-2"
          />
          <textarea
            placeholder="MENSAGEM"
            className="text-black px-3 py-2 w-full mb-2 h-24 resize-none"
          />
          <button className="text-[#C8102E] border border-[#C8102E] hover:bg-[#C8102E] hover:text-white transition px-4 py-2 rounded font-semibold">
            ENVIAR
          </button>
        </div>
      </div>

      {/* Rodapé Branco */}
      <div className="bg-white text-black text-center text-sm py-4">
        Todos os direitos reservados à Company Market LTDA.
      </div>
    </footer>
  );
} 
