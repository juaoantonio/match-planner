import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyProps = ComponentProps<"p">;

export function TypographyP({ children, className, ...rest }: TypographyProps) {
  return (
    <p
      className={cn("[p:not(:first-child)]:mt-6 leading-7", className)}
      {...rest}
    >
      {children}
    </p>
  );
}
