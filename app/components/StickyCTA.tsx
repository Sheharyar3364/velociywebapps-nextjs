"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923480003690";

  return (
    <div
      style={{
        position: "fixed",
        bottom: visible ? "0" : "-100px",
        left: 0,
        right: 0,
        background: "linear-gradient(135deg, var(--primary), var(--accent))",
        padding: "1rem clamp(1rem, 5vw, 2rem)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
        zIndex: 999,
        transition: "bottom 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{ fontWeight: 700, fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            Ready to start your project?
          </div>
          <div
            style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)", opacity: 0.9 }}
          >
            Get a free quote within 24 hours
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href="#contact"
            style={{
              background: "white",
              color: "var(--primary)",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
              whiteSpace: "nowrap",
            }}
          >
            Get Free Quote
          </a>
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
              whiteSpace: "nowrap",
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
