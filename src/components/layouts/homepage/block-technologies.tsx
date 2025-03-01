"use client"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const Logos = {
    figma: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="figma" className={"h-[30px] object-contain"} src="/technologies/figma.png" />
            Figma
        </div>
    ),
    firebase: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="firebase" className={"h-[30px] object-contain"} src="/technologies/firebase.png" />
            Firebase
        </div>
    ),
    git: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="git" className={"h-[30px] object-contain"} src="/technologies/git.png" />
            Git
        </div>
    ),
    graphql: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="graphql" className={"h-[30px] object-contain"} src="/technologies/graphql.png" />
            Graphql
        </div>
    ),
    laravel: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="laravel" className={"h-[30px] object-contain"} src="/technologies/laravel.png" />
            Laravel
        </div>
    ),
    mongodb: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="mongodb" className={"h-[30px] object-contain"} src="/technologies/mongodb.png" />
            Mongodb
        </div>
    ),
    mysql: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="mysql" className={"h-[30px] object-contain"} src="/technologies/mysql.png" />
            Mysql
        </div>
    ),
    nest: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="nest" className={"h-[30px] object-contain"} src="/technologies/nest.png" />
            Nest
        </div>
    ),
    nextjs: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="nextjs" className={"h-[30px] object-contain"} src="/technologies/nextjs.png" />
            Nextjs
        </div>
    ),
    nuxtjs: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="nuxtjs" className={"h-[30px] object-contain"} src="/technologies/nuxtjs.png" />
            Nuxtjs
        </div>
    ),
    php: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="php" className={"h-[30px] object-contain"} src="/technologies/php.png" />
            Php
        </div>
    ),
    postgres: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="postgres" className={"h-[30px] object-contain"} src="/technologies/postgres.png" />
            Postgres
        </div>
    ),
    react: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="react" className={"h-[30px] object-contain"} src="/technologies/react.png" />
            React
        </div>
    ),
    strapi: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="strapi" className={"h-[30px] object-contain"} src="/technologies/strapi.png" />
            Strapi
        </div>
    ),
    supabase: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="supabase" className={"h-[30px] object-contain"} src="/technologies/supabase.png" />
            Supabase
        </div>
    ),
    symfony: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="symfony" className={"h-[30px] object-contain"} src="/technologies/symfony.png" />
            Symfony
        </div>
    ),
    vue: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="vue" className={"h-[30px] object-contain"} src="/technologies/vue.png" />
            Vue
        </div>
    ),
    wordpress: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="wordpress" className={"h-[30px] object-contain"} src="/technologies/wordpress.png" />
            Wordpress
        </div>
    ),
    docker: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="docker" className={"h-[30px] object-contain"} src="/technologies/docker.png" />
            Docker
        </div>
    ),
    javascript: () => (
        <div className={"h-fit flex flex-col items-center justify-start text-md gap-3 font-outfit text-secondary"} >
            <Image width={30} height={30} alt="javascript" className={"h-[30px] object-contain"} src="/technologies/javascript.png" />
            Javascript
        </div>
    ),
};


export function BlockMarquee() {
    const arr = [Logos.javascript, Logos.nextjs, Logos.react, Logos.nest, Logos.php, Logos.laravel, Logos.symfony]
    const arr2 = [Logos.mongodb, Logos.mysql, Logos.wordpress, Logos.docker, Logos.postgres, Logos.git, Logos.graphql]
    // const arr3 = [Logos.firebase, Logos.supabase, Logos.docker, Logos.wordpress,  Logos.strapi, Logos.figma]

    const ref = useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.4,
            },
        },
    };

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.2,
                damping: 25,
            },
        },
    }

    return (
        <section id="technologies" className="pb-20 pt-20 px-4 lg:pt-40 flex flex-col gap-16" ref={ref}>
            <motion.div
                className="mx-auto max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                <motion.h2
                    className="text-5xl md:text-6xl tracking-wid text-left lg:text-center font-outfit text-secondary-dark font-medium"
                    variants={titleVariants}
                >
                    Technologies
                </motion.h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="w-full"
                viewport={{ once: false, margin: "-100px" }}
            >
                <Marquee pauseOnHover>
                    {arr.map((Logo, index) => (
                        <div
                            key={index}
                            className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
                        >
                            <Logo />
                        </div>
                    ))}
                </Marquee>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="w-full"
                viewport={{ once: false, margin: "-100px" }}
            >
                <Marquee direction="right" pauseOnHover>
                    {arr2.map((Logo, index) => (
                        <div
                            key={index}
                            className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
                        >
                            <Logo />
                        </div>
                    ))}
                </Marquee>
            </motion.div>


            <motion.div
                className="mx-auto max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                <motion.p
                    className="font-outfit text-secondary-light text-left lg:text-center font-light text-lg tracking-wide pt-4 max-w-3xl mx-auto"
                    variants={titleVariants}
                >
                    Voici quelques exemples de technologies et frameworks que j&apos;ai utilisés dans mes projets scolaires, professionnels et personnels.

                    Toujours en quête d&apos;apprentissage, je reste entièrement ouvert à l&apos;exploration de nouveaux outils et m&apos;adapte rapidement aux environnements techniques et aux besoins des projets.
                </motion.p>
            </motion.div>
        </section>
    )
}