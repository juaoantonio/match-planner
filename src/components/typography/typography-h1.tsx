import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyH1Props = ComponentProps<"h1">;

export function TypographyH1({
  children,
  className,
  ...rest
}: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}
