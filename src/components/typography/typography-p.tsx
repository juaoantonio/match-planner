import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyProps = ComponentProps<"p">;

export function TypographyP({ children, className, ...rest }: TypographyProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...rest}
    >
      {children}
    </p>
  );
}
