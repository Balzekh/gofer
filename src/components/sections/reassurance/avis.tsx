import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CARDS_PER_SET = 6;
const cardSet = Array.from({ length: CARDS_PER_SET }, (_, cardNumber) => cardNumber);

function MarqueeRow({ animationClassName }: { animationClassName: string }) {
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-6",
          animationClassName,
          "motion-reduce:animate-none"
        )}
      >
        {cardSet.map((cardNumber) => (
          <Card key={`set-a-${cardNumber}`} className="h-40 w-80 shrink-0" />
        ))}
        {cardSet.map((cardNumber) => (
          <Card key={`set-b-${cardNumber}`} className="h-40 w-80 shrink-0" />
        ))}
      </div>
    </div>
  );
}

export function Avis() {
  const t = useTranslations("avis");

  return (
    <section
      id="avis"
      className="min-h-screen scroll-mt-20 bg-muted/40 flex flex-col justify-center gap-6 overflow-hidden py-24"
    >
      <div className="mx-auto mt-12 mb-12 flex max-w-2xl flex-col items-center gap-2 px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          {t("title")}
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      <MarqueeRow animationClassName="animate-marquee-1" />
      <MarqueeRow animationClassName="animate-marquee-2" />
      <MarqueeRow animationClassName="animate-marquee-3" />
    </section>
  );
}
