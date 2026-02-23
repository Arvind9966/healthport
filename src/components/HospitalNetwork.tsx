const hospitals = [
  "Fortis", "Medanta", "Narayana", "HCG", "Apollo", "BM Birla", "Manipal", "Max", "Hinduja",
];

const HospitalNetwork = () => {
  const row1 = hospitals.slice(0, 5);
  const row2 = hospitals.slice(5);

  return (
    <section className="py-24 md:py-32 bg-section-light" id="hospitals">
      <div className="container px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
          Our Trusted Hospital Network
        </h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 mb-4 animate-scroll-left">
          {[...row1, ...row1].map((h, i) => (
            <div key={i} className="flex-shrink-0 bg-card rounded-xl px-8 py-5 shadow-sm border border-border min-w-[180px] text-center">
              <span className="text-sm font-medium text-foreground">{h}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 animate-scroll-left" style={{ animationDirection: "reverse" }}>
          {[...row2, ...row2].map((h, i) => (
            <div key={i} className="flex-shrink-0 bg-card rounded-xl px-8 py-5 shadow-sm border border-border min-w-[180px] text-center">
              <span className="text-sm font-medium text-foreground">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
