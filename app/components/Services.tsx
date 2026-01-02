"use client";

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Custom websites and web applications built with Laravel, React, Next.js, and modern frameworks",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native iOS and Android apps using React Native and Flutter for seamless cross-platform experiences",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description:
        "Full-featured online stores with payment processing, inventory management, and order tracking",
    },
    {
      icon: "⚙️",
      title: "API Development",
      description:
        "RESTful APIs and backend systems that power modern applications with scalability in mind",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed to convert visitors into customers",
    },
    {
      icon: "🚀",
      title: "MVP Development",
      description:
        "Launch your startup idea quickly with a minimum viable product built in 2-4 weeks",
    },
  ];

  return (
    <section
      id="services"
      style={{
        position: "relative",
        padding: "clamp(4rem, 10vh, 8rem) clamp(1rem, 5vw, 2rem)",
        maxWidth: "1200px",
        margin: "0 auto",
        zIndex: 1,
      }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vh, 4rem)" }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "0.5rem 1.25rem",
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            borderRadius: "2rem",
            fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
            fontWeight: 600,
            marginBottom: "1rem",
            color: "var(--primary)",
          }}
        >
          SERVICES
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          What We Build
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          End-to-end solutions for startups and businesses
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1.5rem, 3vw, 2rem)",
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "1.5rem",
              padding: "clamp(2rem, 5vw, 2.5rem)",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "var(--primary)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(99, 102, 241, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                marginBottom: "1rem",
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
