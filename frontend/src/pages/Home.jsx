import About from "../components/About";
import Hero from "../components/Hero";
import BlogSection from "../components/BlogSection";
import FAQs from "../components/FAQs";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Quote />
      <FAQs />
      <BlogSection />
    </>
  );
}
