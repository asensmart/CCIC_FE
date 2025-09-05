import React from 'react'

const BrandContent = () => {

    const features = [
      {
        // title: "Fast & Same-Day Appliance Repair",
        desc: "Samsung Service Center Chennai – Expert TV, AC, refrigerator & washing machine repair in Chennai. Certified technicians, genuine parts, and doorstep service.",
        // img: testImg,
      },
      {
        // title: "Expert Technicians in Chennai",
        desc: "LG Service Center Chennai – Professional LG appliance repair in Chennai, including LED & Smart TV, AC, fridge, and washing machine service. Fast, reliable, and affordable.",
        // img: null,
      },
      {
        // title: "100% Genuine Spare Parts",
        desc: "Panasonic Service Center Chennai  – Same-day Panasonic TV, AC, fridge & washing machine repair in Chennai. We fix PCB issues, cooling problems, and display faults with original parts.",
        // // img: testImg,
      },
      {
        title: "Affordable & Transparent Pricing",
        desc: "Reliable appliance repair at fair prices with no hidden costs.",
        // img: null,
      },
      {
        title: "Doorstep Service Across All Chennai Areas",
        desc: "Serving T. Nagar, Anna Nagar, Velachery, Tambaram, Adyar, Porur, and nearby areas.",
        // // img: testImg,
      },
      {
        title: "24/7 Customer Support",
        desc: "Dedicated team available around the clock for a smooth and hassle-free experience.",
        // img: null,
      },
    ];
  return (
    <div className="font-sans px-4">
      <h2 className="md:text-2xl text-xl font-bold text-center mb-8 text-blue-600">
        Brand Service Centers in Chennai
      </h2>
      <div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-slate-200"
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
              //   background: "#f5f7fa",
              borderRadius: "1rem",
              padding: "1.5rem 1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            {/* <div
              style={{
                flex: "0 0 60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icons[idx]}
            </div> */}
            <div style={{ flex: "1 1 0" }}>
              <h3
                style={{
                  color: "#1a237e",
                  fontWeight: "600",
                  marginBottom: "0.7rem",
                  fontSize: "1.2rem",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#333", fontSize: "1rem", marginBottom: 0 }}>
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandContent