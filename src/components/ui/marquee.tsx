import * as React from "react"
import { classNames } from "@/lib/utils"



interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    pauseOnHover?: boolean
    direction?: "left" | "right"
    speed?: number
}

export function Marquee({
    children,
    pauseOnHover = false,
    direction = "left",
    speed = 20,
    className,
    ...props
}: MarqueeProps) {
    return (
        <div
            className={classNames(
                "w-full overflow-hidden z-10 flex justify-center",
                className
            )}
            {...props}
        >
            <div id="marquee" className="relative mt-8 flex max-w-4xl overflow-hidden">
                <div
                    className={classNames(
                        "flex w-max animate-marquee",
                        pauseOnHover ? "hover:[animation-play-state:paused]" : "",
                        direction === "right" ? "animate-marqueereverse" : ""
                    )}
                    style={{ "--duration": `${speed}s` } as React.CSSProperties}
                >
                    {children}
                    {children}
                </div>
            </div>
        </div>
    )
}