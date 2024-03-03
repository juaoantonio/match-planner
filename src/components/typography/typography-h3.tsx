import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyH3Props = ComponentProps<"h3">;

export function TypographyH3({
  children,
  className,
  ...rest
}: TypographyH3Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}
