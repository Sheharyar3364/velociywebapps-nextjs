"use client";

import { useState, useEffect } from "react";

export default function Pricing() {
  const [basePrice, setBasePrice] = useState(750);
  const [addons, setAddons] = useState<number[]>([]);

  const calculateTotal = () => {
    const addonsTotal = addons.reduce((sum, val) => sum + val, 0);
    return basePrice + addonsTotal;
  };

  const handleAddonChange = (value: number, checked: boolean) => {
    if (checked) {
      setAddons([...addons, value]);
    } else {
      setAddons(addons.filter((v) => v !== value));
    }
  };

  return (
    <section
      id="pricing"
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
          PRICING
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Simple, Transparent Pricing
        </h2>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Fixed prices with no hidden fees. Choose the package that fits your
          needs.
        </p>
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto 2rem",
          background: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          padding: "1rem 1.5rem",
          borderRadius: "0.75rem",
          textAlign: "center",
        }}
      >
        <strong style={{ color: "#EF4444" }}>⚠️ Limited Availability:</strong>{" "}
        We only accept <strong>3 new projects per month</strong> to ensure
        quality.{" "}
        <span style={{ color: "var(--success)", fontWeight: 700 }}>
          2 slots remaining
        </span>{" "}
        for this month.
      </div>

      {/* Pricing Calculator */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 4rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "1.5rem",
          padding: "2rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Estimate Your Project Cost
        </h3>

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            Project Type
          </label>
          <select
            onChange={(e) => setBasePrice(parseInt(e.target.value))}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "0.5rem",
              color: "var(--text)",
              fontSize: "1rem",
            }}
          >
            <option value="750">Simple Landing Page - $750</option>
            <option value="1500">Business Website - $1,500</option>
            <option value="2500">E-commerce Store - $2,500</option>
            <option value="3500">Custom Web App - $3,500</option>
            <option value="4500">Mobile App - $4,500</option>
          </select>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            Additional Features
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => handleAddonChange(500, e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            <span>Payment Integration (+$500)</span>
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => handleAddonChange(300, e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            <span>Admin Dashboard (+$300)</span>
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => handleAddonChange(400, e.target.checked)}
              style={{ width: "18px", height: "18px" }}
            />
            <span>API Integration (+$400)</span>
          </label>
        </div>

        <div
          style={{
            background: "rgba(99, 102, 241, 0.1)",
            padding: "1.5rem",
            borderRadius: "0.75rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              marginBottom: "0.25rem",
            }}
          >
            Estimated Total
          </div>
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              color: "var(--primary)",
            }}
          >
            ${calculateTotal().toLocaleString()}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              marginTop: "0.5rem",
            }}
          >
            This is an estimate. Final quote after consultation.
          </div>
        </div>

        <a
          href="#contact"
          style={{
            display: "block",
            width: "100%",
            marginTop: "1.5rem",
            padding: "1rem 2rem",
            background:
              "linear-gradient(135deg, var(--primary), var(--accent))",
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            borderRadius: "0.75rem",
            fontWeight: 700,
          }}
        >
          Get Accurate Quote
        </a>
      </div>

      {/* Pricing Tiers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "2rem",
        }}
      >
        {[
          {
            name: "Starter",
            price: "$750",
            popular: false,
            features: [
              "Up to 5 pages",
              "Responsive design",
              "Contact form",
              "SEO optimization",
              "1 month support",
            ],
          },
          {
            name: "Professional",
            price: "$1,500",
            popular: true,
            features: [
              "Up to 15 pages",
              "Custom CMS",
              "Database integration",
              "Payment gateway",
              "3 months support",
            ],
          },
          {
            name: "Enterprise",
            price: "$3,000+",
            popular: false,
            features: [
              "Unlimited pages",
              "Advanced features",
              "API development",
              "Mobile app included",
              "6 months support",
            ],
          },
        ].map((tier, idx) => (
          <div
            key={idx}
            style={{
              background: tier.popular
                ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))"
                : "var(--surface)",
              border: tier.popular
                ? "2px solid var(--primary)"
                : "1px solid var(--border)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              position: "relative",
              transform: tier.popular ? "scale(1.05)" : "scale(1)",
            }}
          >
            {tier.popular && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background:
                    "linear-gradient(135deg, var(--primary), var(--accent))",
                  color: "white",
                  padding: "0.375rem 1rem",
                  borderRadius: "1rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                POPULAR
              </div>
            )}
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              {tier.name}
            </h3>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                marginBottom: "1rem",
              }}
            >
              {tier.price}
              <span
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  fontWeight: 400,
                }}
              >
                /project
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              {tier.name === "Starter" &&
                "Perfect for landing pages and simple websites"}
              {tier.name === "Professional" &&
                "Ideal for small businesses and startups"}
              {tier.name === "Enterprise" &&
                "For complex applications and businesses"}
            </p>
            <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
              {tier.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    padding: "0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--success)" }}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              style={{
                display: "block",
                width: "100%",
                padding: "1rem 2rem",
                background: tier.popular
                  ? "linear-gradient(135deg, var(--primary), var(--accent))"
                  : "var(--surface)",
                color: tier.popular ? "white" : "var(--text)",
                border: tier.popular ? "none" : "1px solid var(--border)",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "0.75rem",
                fontWeight: 700,
              }}
            >
              {tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
