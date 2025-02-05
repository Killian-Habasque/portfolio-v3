import Model3DLogo from "../components/ui/model";
import { WelcomeExample } from "../components/ui/texts/texts";
import { RetroGrid } from "../components/ui/retro-grid";
import { BlockProjectsGrid } from "../components/layouts/block-projects-grid";
import { BlockMediaText } from "../components/layouts/block-media-text";
import { BlockTimeline } from "../components/layouts/block-timeline";
import HeroFrontpage from "../components/layouts/hero-frontpage";

export default function Home() {
  return (
    <div id="root">
      <HeroFrontpage>
        <RetroGrid />
        <Model3DLogo />
        <WelcomeExample />
      </HeroFrontpage>
      <BlockProjectsGrid />
      <BlockMediaText />
      <BlockTimeline />
    </div>
  );
}
