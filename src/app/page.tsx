import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portifolio";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contato />
    </main>
  );
}
