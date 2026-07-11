export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section id="accueil" className="min-h-screen scroll-mt-20 bg-background" />
        <section id="presentation" className="min-h-screen scroll-mt-20 bg-muted/40" />
        <section id="tarifs" className="min-h-screen scroll-mt-20 bg-background" />
        <section id="faq" className="min-h-screen scroll-mt-20 bg-muted/40" />
      </main>

      <footer className="min-h-[50vh] bg-secondary" />
    </>
  );
}
