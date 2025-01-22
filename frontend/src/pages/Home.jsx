import About from "../components/About";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import FAQs from "../components/FAQs";
import WhyHire from "../components/WhyHire";
import HomepageServices from "../components/HomepageServices";
import Quote from "../components/Quote";
import GetStarted from "../components/GetStarted";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HomepageServices />
      <WhyHire />
      <GetStarted/>
      <Quote />
      <FAQs />
      <BlogSection />
    </>
  );
}
