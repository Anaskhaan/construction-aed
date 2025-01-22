import About from "../components/About";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import FAQs from "../components/FAQs";
import WhyHire from "../components/WhyHire";
import HomepageServices from "../components/HomepageServices";

import TradesPreview from "../components/TradesPreview";

import ConstructionBanner from "../components/ConstrutionBanner";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className=" px-16">
        <HomepageServices />
        <ConstructionBanner />
        <WhyHire />
        <TradesPreview />
        <Quote />
        <FAQs />
        <BlogSection />
      </div>
    </>
  );
}
