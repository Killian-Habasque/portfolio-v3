

function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}

const buttonVariantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariantClasses;
  children?: React.ReactNode;
}

function Button({ className, variant = "default", children, ...props }: ButtonProps) {
  return (
    <button
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
    </button>
  );
}

export { Button };
