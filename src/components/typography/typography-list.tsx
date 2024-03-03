import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TypographyListProps = ComponentProps<"ul">;

export function TypographyList({
  children,
  className,
  ...rest
}: TypographyListProps) {
  return (
    <ul
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...rest}
    >
      {children}
    </ul>
  );
}
