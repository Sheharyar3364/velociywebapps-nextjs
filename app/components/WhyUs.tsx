"use client";

export default function WhyUs() {
  const benefits = [
    {
      icon: "💸",
      title: "Transparent Pricing",
      description:
        "Fixed prices with no hidden fees. You know exactly what you're paying upfront.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Most projects delivered in 2-8 weeks. We respect your time and deadlines.",
    },
    {
      icon: "🤝",
      title: "True Partnership",
      description:
        "We don't disappear after launch. Ongoing support included in every package.",
    },
    {
      icon: "🎨",
      title: "Custom Solutions",
      description:
        "No templates. Every project is built from scratch to match your unique needs.",
    },
    {
      icon: "📞",
      title: "Direct Communication",
      description:
        "Talk directly to the developers. No middlemen, no miscommunication.",
    },
    {
      icon: "🔒",
      title: "Your Code, Your Rights",
      description:
        "You own 100% of the source code. No vendor lock-in, complete freedom.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(4rem, 10vh, 8rem) clamp(1rem, 5vw, 2rem)",
        maxWidth: "1200px",
        margin: "0 auto",
        zIndex: 1,
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
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
          WHY US
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          What Makes Us Different
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          The VelocityWebApps advantage
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "1.5rem",
              padding: "2rem",
              transition: "all 0.3s",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              {benefit.icon}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              {benefit.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
