import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories/Categories";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow pt-16"> 
        <Hero />
        <About />
        <Categories />
        <FAQ />
      </main>
      <Logos />
      <Footer />
      <WhatsAppButton /> 
    </div>
  );
}