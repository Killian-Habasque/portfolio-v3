import Model from "./components/model";
import { RetroGrid } from "./components/retro-grid";


export default function Home() {
  return (
    <div id="root">
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <RetroGrid />
        <div className='bg-noise'></div>
        <Model />
      </div>
    </div>
  );
}
