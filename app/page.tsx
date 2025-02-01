import { WelcomeExample } from "./components/demo";
import Model from "./components/model";
import { RetroGrid } from "./components/retro-grid";
import { NavbarDemo } from "./components/demo2";

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
      </div>

    </div>
  );
}
