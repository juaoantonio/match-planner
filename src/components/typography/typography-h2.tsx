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
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
