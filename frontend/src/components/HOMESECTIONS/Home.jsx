import About from "../About";
import Hero from "./Hero";
import BlogSection from "./BlogSection";
import FAQs from "./FAQs";
import HomepageServices from "./HomepageServices";

import TradesPreview from "../HOMESECTIONS/TradesPreview";

import ConstructionBanner from "./ConstrutionBanner";
import Quote from "../HOMESECTIONS/Quote";
import WhyHire from "../HOMESECTIONS/WhyHire";
import GetStarted from "../GetStarted";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className=" ">
        <HomepageServices />
        <ConstructionBanner />
        <WhyHire />
        <Trades Preview />
        <GetStarted />
        <Quote />
        <FAQs />
        <BlogSection />
      </div>
    </>
  );
}
