import { Accueil } from "@/components/sections/accueil";
import { Avis } from "@/components/sections/avis";
import { Faq } from "@/components/sections/faq";
import { Presentation } from "@/components/sections/presentation";
import { Tarifs } from "@/components/sections/tarifs";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Accueil />
        <Presentation />
        <Tarifs />
        <Avis />
        <Faq />
      </main>

      <footer className="mx-6 h-72 rounded-t-3xl bg-secondary" />
    </>
  );
}
