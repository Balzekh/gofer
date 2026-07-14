import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const t = useTranslations("faq");
  const items: FaqItem[] = t.raw("items");

  return (
    <section
      id="faq"
      className="min-h-screen scroll-mt-20 bg-background flex flex-col justify-center gap-8 py-24"
    >
      <div className="flex flex-col items-start gap-2 px-12 text-left">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          {t("title")}
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-12 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <Card
            key={item.question}
            className="h-72 w-64 shrink-0 px-5 transition-[width] duration-300 ease-out motion-reduce:transition-none hover:w-[520px]"
          >
            <p className="line-clamp-2 text-base leading-snug font-medium text-card-foreground">
              {item.question}
            </p>
            <p className="line-clamp-6 text-sm text-muted-foreground opacity-0 transition-opacity duration-300 ease-out group-hover/card:opacity-100 motion-reduce:transition-none">
              {item.answer}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
