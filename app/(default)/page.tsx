export const metadata = {
  title: "Crozai",
  description: "GenAI for Technical Content Creation",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
// import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import AuthHeader from "@/components/ui/authheader";

export default function Home() {
  return (
    <>
      <AuthHeader />
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
