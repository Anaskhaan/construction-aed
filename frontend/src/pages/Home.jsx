export default function Home() {
  return (
    <div className="relative flex h-screen w-screen">
      {/* Left Image with Blurry Right Edge */}
      <div className="h-full w-1/2 relative">
        <img
          src="/Hero1Image.png"
          alt="whitepic"
          className="h-full w-full object-cover"
        />
        {/* Blurry Overlay on Right Edge */}
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Right Image */}
      <img
        src="/HeroImage.png"
        alt="hero-image"
        className="h-full w-1/2 object-cover -ml-16" /* Negative margin ensures overlap */
      />
    </div>
  );
}
