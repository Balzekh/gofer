import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Accueil() {
  const t = useTranslations("accueil");

  return (
    <section
      id="accueil"
      className="min-h-screen scroll-mt-20 bg-background flex flex-col items-center justify-start gap-6 px-6 pt-[10vh] text-center"
    >
      <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground">
        {t("headline")}
      </h1>

      <p className="max-w-md text-sm text-muted-foreground">{t("description")}</p>

      <Card className="flex min-h-[280px] w-full max-w-xl flex-col items-center justify-center gap-4 p-8">
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
        <Button>{t("searchButton")}</Button>
      </Card>
    </section>
  );
}
