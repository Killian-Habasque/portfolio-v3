import { BlockContact } from "@/components/layouts/homepage/block-contact";
import { BlockEducation } from "@/components/layouts/homepage/block-educations";
import { BlockExperience } from "@/components/layouts/homepage/block-experiences";
import { BlockIntro } from "@/components/layouts/homepage/block-intro";
import { BlockMediaText } from "@/components/layouts/homepage/block-media-text";
import { BlockProjectsGrid } from "@/components/layouts/homepage/block-projects-grid";
import HeroFrontpage from "@/components/layouts/homepage/hero-frontpage";
import { BlockMarquee } from "@/components/layouts/homepage/block-technologies";


export default function Home() {
  return (
    <>
      <HeroFrontpage />
      <BlockIntro />
      <BlockProjectsGrid preview={true} />
      <BlockMediaText />
      <BlockEducation />
      <BlockMarquee />
      <BlockExperience />
      <BlockContact />
    </>
  );
}
