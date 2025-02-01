import { WelcomeExample } from "./components/ui/texts";
import Model from "./components/model";
import { RetroGrid } from "./components/retro-grid";
import { NavbarDemo } from "./components/layouts/header";
import { Feature } from "./components/layouts/feature-section-with-grid";

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
      </div>
     
    </div>
  );
}
