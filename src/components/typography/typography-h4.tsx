import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyH4Props = ComponentProps<"h4">;

export function TypographyH4({
  children,
  className,
  ...rest
}: TypographyH4Props) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}
