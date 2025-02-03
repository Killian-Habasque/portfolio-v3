import { WelcomeExample } from "./components/ui/texts/texts";
import Model from "./components/ui/model";
import { RetroGrid } from "./components/ui/retro-grid";
import { NavbarDemo } from "./components/layouts/header";
import { BlockProjectsGrid } from "./components/layouts/block-projects-grid";
import { BlockMediaText } from "./components/layouts/block-media-text";
import { BlockTimeline } from "./components/layouts/block-timeline";
import HeroFrontpage from "./components/layouts/hero-frontpage";

export default function Home() {
  return (
    <div id="root">
      <NavbarDemo />
      <HeroFrontpage>
        <RetroGrid />
        <Model />
        <WelcomeExample />
      </HeroFrontpage>
      <BlockProjectsGrid />
      <BlockMediaText />
      <BlockTimeline />
    </div>
  );
}
