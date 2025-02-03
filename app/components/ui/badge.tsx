import * as React from "react";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const badgeVariantClasses = {
  default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
  primary: "border-[0.5px] border-primary bg-primary-light text-primary",
  secondary: "border-[0.5px] border-secondary bg-secondary-light text-secondary",
  destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
  dark: "bg-[--color-dark] text-white",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariantClasses;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={classNames(
        "inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };