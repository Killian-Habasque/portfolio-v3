import { Marquee } from "@/components/ui/marquee"
import Image from "next/image";

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
    const arr = [Logos.javascript, Logos.nextjs, Logos.react, Logos.nest, Logos.php, Logos.laravel, , Logos.symfony]
    const arr2 = [Logos.mongodb, Logos.mysql, Logos.postgres, Logos.git, Logos.graphql]
    const arr3 = [Logos.firebase, Logos.supabase, Logos.docker, Logos.wordpress,  Logos.strapi, Logos.figma]

    return (
        <section id="technologies" className="pb-20 pt-20 lg:pt-40">

            <h2 className="text-5xl md:text-6xl tracking-wid text-center font-outfit text-secondary-dark font-medium">
                Techologies
            </h2>
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
            <Marquee pauseOnHover>
                {arr3.map((Logo, index) => (
                    <div
                        key={index}
                        className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
                    >
                        <Logo />
                    </div>
                ))}
            </Marquee>
        </section>
    )
}