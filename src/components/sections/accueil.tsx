import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";

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

      <Card className="min-h-[280px] w-full max-w-xl" />
    </section>
  );
}
