import { WelcomeExample } from "./components/demo";
import Model from "./components/model";
import { RetroGrid } from "./components/retro-grid";
import { NavbarDemo } from "./components/demo2";

export default function Home() {
  return (
    <div id="root">
      <NavbarDemo />
      <div className="p-4 bg-white h-[80vh]">
        <div className="bg-dark relative flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl">
          <RetroGrid />
          <div className='bg-test'></div>
          <div className='bg-noise'></div>
          <Model />
          <WelcomeExample />
        </div>
      </div>
    </div>
  );
}
