import About from "../About";
import Hero from "./Hero";
import BlogSection from "./BlogSection";
import FAQs from "./FAQs";
import HomepageServices from "./HomepageServices";
import ConstructionBanner from "./ConstrutionBanner";
import Quote from "../HOMESECTIONS/Quote";
import WhyHire from "../HOMESECTIONS/WhyHire";
import GetStarted from "../GetStarted";
import Testimonials from "../Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className=" ">
        <HomepageServices />
        <div className="">
          <ConstructionBanner />
        </div>
        <WhyHire />
        <GetStarted />
        <Testimonials />
        <FAQs />
        <BlogSection />
        <Quote />
      </div>
    </>
  );
}
