import { Contact } from "@/components/ui/contact"

const demoData = {
  heading: "Ready to Get Started?",
  description:
    "Join thousands of satisfied customers using our platform to build amazing websites.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://www.shadcnblocks.com",
    },
  },
};

function BlockContact() {
  return <Contact {...demoData} />;
}

export { BlockContact };
