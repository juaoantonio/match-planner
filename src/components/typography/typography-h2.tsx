import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyH2Props = ComponentProps<"h2">;

export function TypographyH2({
  children,
  className,
  ...rest
}: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
