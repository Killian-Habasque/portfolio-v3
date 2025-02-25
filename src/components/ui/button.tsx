import { classNames } from "@/lib/utils";
import Link from "next/link";

const buttonVariantClasses = {
  primary: "bg-primary-dark text-black hover:bg-primary hover",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  dark: "bg-secondary-dark text-white",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof buttonVariantClasses;
  children?: React.ReactNode;
  link?: string;
  target?: string;
}

function Button({ className, link, variant = "primary", children, ...props }: ButtonProps) {
  const buttonContent = (
    <span className="flex items-center gap-2 [&>svg]:w-4 [&>svg]:h-4">
      {children}
    </span>
  );

  return link ? (
    <Link href={link} className={classNames(
      "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-md font-outfit transition-transform duration-300 ease-in-out hover:scale-105 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      buttonVariantClasses[variant],
      className
    )} {...props}>
      {buttonContent}
    </Link>
  ) : (
    <a
      className={classNames(
        "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-md font-outfit transition-transform duration-300 ease-in-out hover:scale-105 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        buttonVariantClasses[variant],
        className
      )}
      {...props}
    >
      {buttonContent}
    </a>
  );
}

export { Button };
