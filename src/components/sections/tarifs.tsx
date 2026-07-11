import { Card } from "@/components/ui/card";

export function Tarifs() {
  return (
    <section
      id="tarifs"
      className="min-h-screen scroll-mt-20 bg-background flex items-center justify-center px-6"
    >
      <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-10">
        <Card className="min-h-[420px]" />
        <Card className="min-h-[420px]" />
        <Card className="min-h-[420px]" />
      </div>
    </section>
  );
}
