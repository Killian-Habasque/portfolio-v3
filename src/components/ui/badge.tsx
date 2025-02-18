import { classNames } from "@/lib/utils";

const badgeVariantClasses = {
  primary: "border-[0.5px] border-primary-dark bg-primary-light text-primary-dark",
  secondary: "border-[0.5px] border-secondary-light bg-secondary-dark text-white",
  destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
  dark: "bg-secondary-dark text-white",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariantClasses;
}

function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <div
      className={classNames(
        "inline-flex items-center rounded-md border px-3 py-1 text-sm gap-1 font-outfit font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };