"use client";

export default function Industries() {
  const industries = [
    {
      icon: "🛒",
      title: "E-Commerce & Retail",
      description:
        "Online stores, marketplaces, subscription boxes, and custom shopping experiences",
    },
    {
      icon: "⚕️",
      title: "Healthcare & Medical",
      description:
        "Telemedicine, appointment booking, patient portals, and pharmacy management",
    },
    {
      icon: "🏠",
      title: "Real Estate & Property",
      description:
        "Property listings, rental management, CRM, and virtual tour platforms",
    },
    {
      icon: "🍕",
      title: "Food & Restaurant",
      description:
        "Online ordering, delivery apps, reservations, and restaurant management",
    },
    {
      icon: "🚗",
      title: "Automotive & Rental",
      description:
        "Car rentals, auto parts stores, dealerships, and vehicle marketplaces",
    },
    {
      icon: "🎓",
      title: "Education & E-Learning",
      description:
        "LMS platforms, online courses, student portals, and tutoring systems",
    },
    {
      icon: "💰",
      title: "Finance & Fintech",
      description:
        "Expense tracking, invoicing, payment gateways, and financial dashboards",
    },
    {
      icon: "💪",
      title: "Fitness & Wellness",
      description:
        "Gym management, fitness tracking, personal training, and nutrition apps",
    },
    {
      icon: "✈️",
      title: "Travel & Hospitality",
      description:
        "Hotel bookings, travel agencies, tour platforms, and vacation rentals",
    },
    {
      icon: "💅",
      title: "Beauty & Salon",
      description:
        "Appointment booking, beauty e-commerce, memberships, and service catalogs",
    },
    {
      icon: "📱",
      title: "Social Media & Networking",
      description:
        "Social platforms, community apps, dating apps, and networking tools",
    },
    {
      icon: "🎮",
      title: "Gaming & Entertainment",
      description:
        "Web games, streaming platforms, event ticketing, and entertainment apps",
    },
  ];

  return (
    <section
      id="industries"
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
          INDUSTRIES
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Industries We Serve
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Custom solutions for every business vertical
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "clamp(1.5rem, 3vw, 2rem)",
        }}
      >
        {industries.map((industry, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "1.5rem",
              padding: "clamp(2rem, 4vw, 2.5rem)",
              textAlign: "center",
              transition: "all 0.4s",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.5)";
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(99, 102, 241, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                marginBottom: "1rem",
                display: "inline-block",
                transition: "transform 0.4s",
              }}
            >
              {industry.icon}
            </div>
            <h3
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              {industry.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(0.875rem, 2vw, 0.9375rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
