import About from "../components/About";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import FAQs from "../components/FAQs";
import WhyHire from "../components/WhyHire";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyHire />
      <FAQs />
      <BlogSection />
    </>
  );
}
