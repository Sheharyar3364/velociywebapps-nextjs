import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Industries from "./components/Industries";
import TechStack from "./components/TechStack";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import StickyCTA from "./components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Industries />
      <TechStack />
      <Pricing />
      <FAQ />
      <WhyUs />
      <Process />
      <Contact />

      {/* Final CTA Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(4rem, 8vh, 6rem) clamp(1rem, 5vw, 2rem)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Build Your Project?
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Let&apos;s turn your idea into reality. Get a free consultation and
            quote within 24 hours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "1.125rem 3rem",
                background:
                  "linear-gradient(135deg, var(--primary), var(--accent))",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.75rem",
                fontWeight: 700,
                fontSize: "1.125rem",
              }}
            >
              Get Free Quote
            </a>
            <a
              href={`https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
                  /[^0-9]/g,
                  ""
                ) || "923480003690"
              }?text=Hi!%20I%20want%20a%20free%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "1.125rem 3rem",
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                textDecoration: "none",
                borderRadius: "0.75rem",
                fontWeight: 700,
                fontSize: "1.125rem",
              }}
            >
              WhatsApp Us
            </a>
          </div>
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
            }}
          >
            ✓ No commitment required • ✓ Response within 2 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "clamp(2rem, 5vh, 3rem) clamp(1rem, 5vw, 2rem)",
          textAlign: "center",
        }}
      >
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          © 2024 VelocityWebApps. All rights reserved.
        </p>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.85rem",
            marginTop: "0.5rem",
          }}
        >
          WhatsApp: +92 348 000 3690 | Email: sheharyar3364@gmail.com
        </p>
      </footer>

      <WhatsAppFloat />
      <StickyCTA />
    </>
  );
}
