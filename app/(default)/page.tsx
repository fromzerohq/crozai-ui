export const metadata = {
  title: "Crozai",
  description: "GenAI for Technical Content Creation",
};

import PageIllustration from "@/app/components/page-illustration";
import Hero from "@/app/components/hero-home";
import Workflows from "@/app/components/workflows";
import Features from "@/app/components/features";
// import Testimonials from "@/components/testimonials";
import Cta from "@/app/components/cta";
import AuthHeader from "@/app/components/ui/authheader";

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
