import { TypographyP } from "@/components/typography/typography-p";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Frown } from "lucide-react";

export default function MatchesListingPage() {
  return (
    <main className="grid h-[90svh] place-items-center">
      <div className="space-y-8">
        <div className="mx-4 flex flex-col items-center gap-2 text-muted-foreground">
          <Frown className="" size={36} />
          <TypographyP className="mt-0 text-center">
            Parece que voce ainda nao esta em nenhum time.
          </TypographyP>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Button>Criar um novo time</Button>
          <div className="flex w-2/4 items-center justify-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs">ou</span>
            <Separator className="flex-1" />
          </div>
          <Button variant={"secondary"}>Entrar em um time existente</Button>
        </div>
      </div>
    </main>
  );
}
