import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import LetterOfIntent from "./_components/LetterOfIntent";
import History from "./_components/History";

export default function Home() {
  return (
    <main className="pt-16">
      <Nav />
      <Hero />
      <Services />
      <LetterOfIntent />
      <History />
    </main>
  );
}
