import Image from "next/image";
import panaversePic from "../../public/logo.png";
//https://beta.nextjs.org/docs/optimizing/images
import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import ProgramOtcome from "@/components/widgets/ProgramOutcome";
export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Core tracks Section*/}
      <CoreTracks />
      {/* Specialized Tracks */}
      <SpecializedTracks />
      {/* Program Outcome */}
      <ProgramOtcome />
    </>
  );
}
