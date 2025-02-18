import { motion } from "framer-motion";
import { useEffect, useState } from "react";



function ButtonScrollTop() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
            setIsAtTop(currentScrollY < 100);
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => window.removeEventListener('scroll', updateScrollDirection);
    }, [lastScrollY]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isAtTop) {
            document.getElementById('more')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 100
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="fixed bottom-4 left-8 flex z-50"
            >
                <motion.a
                    href={isAtTop ? "#more" : "#top"}
                    onClick={handleClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary-dark hover:bg-primary h-full rounded-full flex gap-1 justify-center items-center font-outfit"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-6 transition-transform duration-300 ${isAtTop ? 'rotate-180' : ''}`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    {isAtTop ? 'En savoir plus' : 'Haut de page'}
                </motion.a>
            </motion.div>
        </>
    );
}

export { ButtonScrollTop };