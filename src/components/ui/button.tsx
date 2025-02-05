import { classNames } from "@/lib/utils";

const buttonVariantClasses = {
  primary: "bg-primary text-white hover:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  dark: "bg-[--color-dark] text-white",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof buttonVariantClasses;
  children?: React.ReactNode;
  link?: string;
}

function Button({ className, link, variant = "primary", children, ...props }: ButtonProps) {
  return (
    <a
      {...(!!link && { href: link })}
      className={classNames(
        "inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        buttonVariantClasses[variant],
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2 [&>svg]:w-6 [&>svg]:h-6">
        {children}
      </span>
    </a>
  );
}

export { Button };
