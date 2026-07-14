"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function Accueil() {
  const t = useTranslations("accueil");
  const tags: string[] = t.raw("tags");
  const [expanded, setExpanded] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <section
      id="accueil"
      className="min-h-screen scroll-mt-20 bg-background flex flex-col items-center justify-start gap-6 px-6 pt-[10vh] text-center"
    >
      {!expanded && (
        <>
          <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground">
            {t("headline")}
          </h1>

          <p className="max-w-md text-sm text-muted-foreground">
            {t("description")}
          </p>
        </>
      )}

      <Card
        className={
          expanded
            ? "flex min-h-[70vh] w-full max-w-4xl flex-col items-start justify-center gap-4 p-8"
            : "flex min-h-[280px] w-full max-w-xl flex-col items-center justify-center gap-4 p-8"
        }
      >
        {expanded && (
          <Card className="min-h-[65vh] w-2/5 items-start px-6">
            <Input
              aria-label={t("boxOneLabel")}
              className="w-full max-w-xs"
            />
            <Input
              aria-label={t("boxTwoLabel")}
              className="w-full max-w-xs"
            />

            <hr className="w-full border-t border-foreground/10" />

            <ToggleGroup
              type="multiple"
              variant="outline"
              size="sm"
              value={selectedTags}
              onValueChange={setSelectedTags}
              className="w-full flex-wrap justify-start"
            >
              {tags.map((tag) => (
                <ToggleGroupItem key={tag} value={tag}>
                  {tag}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </Card>
        )}

        {!expanded && (
          <>
            <Input
              placeholder={t("searchWhatPlaceholder")}
              aria-label={t("searchWhatLabel")}
              className="w-full max-w-sm"
            />
            <Input
              placeholder={t("searchWherePlaceholder")}
              aria-label={t("searchWhereLabel")}
              className="w-full max-w-sm"
            />
            <Button onClick={() => setExpanded(true)}>{t("searchButton")}</Button>
          </>
        )}
      </Card>
    </section>
  );
}
