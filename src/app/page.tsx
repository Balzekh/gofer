import { Accueil } from "@/components/sections/accueil";
import { Presentation } from "@/components/sections/presentation";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Accueil />
        <Presentation />
        <section id="tarifs" className="min-h-screen scroll-mt-20 bg-background" />
        <section id="avis" className="min-h-screen scroll-mt-20 bg-muted/40" />
        <section id="faq" className="min-h-screen scroll-mt-20 bg-background" />
      </main>

      <footer className="min-h-[50vh] bg-secondary" />
    </>
  );
}
