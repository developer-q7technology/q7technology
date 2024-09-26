import { AboutUsSectionComponent } from "@/components/about-us-section";
import { HeroSectionComponent } from "@/components/hero-section";
import { ServicesSectionComponent } from "@/components/services-section";
import { WhyUsSectionComponent } from "@/components/why-us-section";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSectionComponent />
   <AboutUsSectionComponent />
   <WhyUsSectionComponent />
   <ServicesSectionComponent />
   </>
  );
}
