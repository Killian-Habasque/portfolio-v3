import { WelcomeExample } from "./components/ui/texts";
import Model from "./components/model";
import { RetroGrid } from "./components/retro-grid";
import { NavbarDemo } from "./components/layouts/header";
import { Feature } from "./components/layouts/feature-section-with-grid";
import { Feature2 } from "./components/layouts/feature-with-image";
import { Hero } from "./components/layouts/hero-with-image-text-and-two-buttons";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div id="root">

      <div className='bg-noise'></div>

      <NavbarDemo />
      <div className="p-2 bg-white h-[100vh] pt-20">
        <div className="bg-dark relative flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl pt-[50px]">
          <RetroGrid />
          <div className='bg-test'></div>

          <Model />
          <WelcomeExample />

        </div>
        <Feature />
        <Hero />
        <Feature2 />
      </div>

    </div>
  );
}
