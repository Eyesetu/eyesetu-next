import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ConditionsMarquee } from "@/components/home/ConditionsMarquee";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { Comparison } from "@/components/home/Comparison";
import { Services } from "@/components/home/Services";
import { Audiences } from "@/components/home/Audiences";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Programs } from "@/components/home/Programs";
import { Technology } from "@/components/home/Technology";
import { SurgiSetu } from "@/components/home/SurgiSetu";
import { Pricing } from "@/components/home/Pricing";
import { Team } from "@/components/home/Team";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ConditionsMarquee />
      <ProblemSolution />
      <Comparison />
      <Services />
      <Audiences />
      <HowItWorks />
      <Programs />
      <Technology />
      <SurgiSetu />
      <Pricing />
      <Team />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
