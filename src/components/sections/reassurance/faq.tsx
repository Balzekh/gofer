"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const CARD_STEP = 240;
const TRACK_PADDING = 48;
const EXPANDED_CARD_WIDTH = 520;

export function Faq() {
  const t = useTranslations("faq");
  const rawItems = t.raw("items");
  const items: FaqItem[] = Array.isArray(rawItems) ? rawItems : [];
  const trackRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardCenter = TRACK_PADDING + selected * CARD_STEP + EXPANDED_CARD_WIDTH / 2;
    track.scrollTo({ left: cardCenter - track.clientWidth / 2, behavior: "smooth" });
  }, [selected]);

  const handleCardKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setSelected(index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen scroll-mt-20 bg-background flex flex-col justify-center gap-8 py-24"
    >
      <div className="flex items-start justify-between px-12">
        <div className="flex flex-col items-start gap-2 text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="flex gap-2">
          {selected > 0 && (
            <Button
              ref={prevRef}
              type="button"
              variant="outline"
              size="icon"
              aria-label={t("previousCard")}
              onClick={() => {
                const previous = Math.max(selected - 1, 0);
                setSelected(previous);
                if (previous === 0) {
                  nextRef.current?.focus({ preventScroll: true });
                }
              }}
            >
              <ArrowLeft className="size-4" />
            </Button>
          )}
          {selected < items.length - 1 && (
            <Button
              ref={nextRef}
              type="button"
              variant="outline"
              size="icon"
              aria-label={t("nextCard")}
              onClick={() => {
                const next = Math.min(selected + 1, items.length - 1);
                setSelected(next);
                if (next === items.length - 1) {
                  prevRef.current?.focus({ preventScroll: true });
                }
              }}
            >
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative flex gap-4 overflow-x-auto px-12 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const isSelected = selected === index;

          return (
            <Card
              key={item.question}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => handleCardKeyDown(event, index)}
              className={cn(
                "h-96 w-56 shrink-0 cursor-pointer px-5 outline-none transition-[width] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
                isSelected
                  ? "w-[520px] bg-secondary text-secondary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <p className="line-clamp-2 text-base leading-snug font-medium text-card-foreground">
                {item.question}
              </p>
              <p
                className={cn(
                  "line-clamp-6 text-sm text-muted-foreground opacity-0 transition-opacity duration-300 ease-out motion-reduce:transition-none",
                  isSelected && "opacity-100 text-secondary-foreground"
                )}
              >
                {item.answer}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
