import { Card } from "@/components/ui/card";

export function Presentation() {
  return (
    <section
      id="presentation"
      className="min-h-screen scroll-mt-20 bg-muted/40 flex flex-col justify-center p-6"
    >
      <div className="mx-auto grid h-[70vh] w-full max-w-5xl grid-cols-4 grid-rows-3 gap-4">
        <Card className="col-start-1 col-span-2 row-start-1 row-span-2" />
        <Card className="col-start-3 col-span-1 row-start-1 row-span-2" />
        <Card className="col-start-4 col-span-1 row-start-1 row-span-1" />
        <Card className="col-start-4 col-span-1 row-start-2 row-span-1" />
        <Card className="col-start-1 col-span-2 row-start-3 row-span-1" />
        <Card className="col-start-3 col-span-2 row-start-3 row-span-1" />
      </div>
    </section>
  );
}
