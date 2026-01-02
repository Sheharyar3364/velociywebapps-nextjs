"use client";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      techs: [
        { logo: "⚛", color: "#61DAFB", name: "React", desc: "UI Library" },
        {
          logo: "◆",
          color: "#2C4F7C",
          name: "Solid.js",
          desc: "Reactive Framework",
        },
        {
          logo: "◩",
          color: "#38BDF8",
          name: "Tailwind CSS",
          desc: "CSS Framework",
        },
        { logo: "▲", color: "#fff", name: "Next.js", desc: "React Framework" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      techs: [
        { logo: "L", color: "#FF2D20", name: "Laravel", desc: "PHP Framework" },
        {
          logo: "D",
          color: "#092E20",
          name: "Django",
          desc: "Python Framework",
        },
        {
          logo: "F",
          color: "#fff",
          name: "Flask",
          desc: "Python Micro Framework",
        },
        {
          logo: "I",
          color: "#9553E9",
          name: "Inertia.js",
          desc: "Modern Monolith",
        },
      ],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      techs: [
        {
          logo: "RN",
          color: "#61DAFB",
          name: "React Native",
          desc: "iOS & Android",
        },
        {
          logo: "F",
          color: "#02569B",
          name: "Flutter",
          desc: "Cross-Platform",
        },
        {
          logo: "E",
          color: "#fff",
          name: "Expo",
          desc: "React Native Framework",
        },
      ],
    },
    {
      title: "Database & Storage",
      icon: "🗄️",
      techs: [
        {
          logo: "🐘",
          color: "#336791",
          name: "PostgreSQL",
          desc: "Relational Database",
        },
        { logo: "🐬", color: "#00758F", name: "MySQL", desc: "SQL Database" },
        {
          logo: "M",
          color: "#47A248",
          name: "MongoDB",
          desc: "NoSQL Database",
        },
        { logo: "◆", color: "#DC382D", name: "Redis", desc: "Caching & Queue" },
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: "☁️",
      techs: [
        { logo: "AWS", color: "#FF9900", name: "AWS", desc: "Cloud Hosting" },
        { logo: "▲", color: "#000", name: "Vercel", desc: "Frontend Hosting" },
        {
          logo: "DO",
          color: "#0080FF",
          name: "DigitalOcean",
          desc: "VPS Hosting",
        },
        {
          logo: "GH",
          color: "#181717",
          name: "GitHub",
          desc: "Version Control",
        },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
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
          TECHNOLOGY
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Our Tech Stack
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Modern, proven technologies for enterprise-grade solutions
        </p>
      </div>

      {categories.map((category, idx) => (
        <div key={idx} style={{ marginBottom: "clamp(3rem, 6vh, 4rem)" }}>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "clamp(1.5rem, 3vh, 2rem)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
              {category.icon}
            </span>
            {category.title}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
              gap: "clamp(1rem, 2.5vw, 1.5rem)",
            }}
          >
            {category.techs.map((tech, i) => (
              <div
                key={i}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1.5rem)",
                  textAlign: "center",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(99, 102, 241, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: 900,
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "clamp(56px, 12vw, 72px)",
                    color: tech.color,
                    transition: "all 0.3s",
                  }}
                >
                  {tech.logo}
                </div>
                <h4
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {tech.name}
                </h4>
                <p
                  style={{
                    fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
