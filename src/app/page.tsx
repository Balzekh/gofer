import { Accueil } from "@/components/sections/accueil";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Accueil />
        <section id="presentation" className="min-h-screen scroll-mt-20 bg-muted/40" />
        <section id="tarifs" className="min-h-screen scroll-mt-20 bg-background" />
        <section id="avis" className="min-h-screen scroll-mt-20 bg-muted/40" />
        <section id="faq" className="min-h-screen scroll-mt-20 bg-background" />
      </main>

      <footer className="min-h-[50vh] bg-secondary" />
    </>
  );
}
