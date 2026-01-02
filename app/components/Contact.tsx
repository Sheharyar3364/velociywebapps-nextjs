"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    project_type: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          project_type: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923480003690";

  return (
    <>
      <style jsx>{`
        .contact-method-card {
          background: var(--surface);
          color: var(--text);
          padding: clamp(1.5rem, 4vw, 2rem);
          border-radius: 1rem;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s;
          border: 2px solid var(--border);
          display: block;
          min-height: 44px;
        }

        .contact-method-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }

        .whatsapp-card {
          background: #25d366;
          color: white;
          border-color: #25d366;
        }

        .whatsapp-card:hover {
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: clamp(0.75rem, 2vw, 1rem);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text);
          font-size: clamp(0.9375rem, 2vw, 1rem);
          transition: all 0.3s;
          min-height: 44px;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .submit-button {
          width: 100%;
          padding: clamp(1rem, 2.5vw, 1.25rem) 2rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.125rem);
          cursor: pointer;
          transition: all 0.3s;
          min-height: 48px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }

          .form-grid-2col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section
        id="contact"
        style={{
          position: "relative",
          padding: "clamp(4rem, 10vh, 8rem) clamp(1rem, 5vw, 2rem)",
          maxWidth: "1200px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem, 6vh, 4rem)",
          }}
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
            CONTACT
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s Build Something Amazing
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Get a free quote within 24 hours
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <a
            href={`https://wa.me/${whatsappNumber.replace(
              /[^0-9]/g,
              ""
            )}?text=Hi!%20I%20want%20a%20quick%20quote`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method-card whatsapp-card"
          >
            <div
              style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                marginBottom: "0.5rem",
              }}
            >
              💬
            </div>
            <h4
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              WhatsApp
            </h4>
            <p
              style={{
                fontSize: "clamp(0.8125rem, 2vw, 0.875rem)",
                opacity: 0.9,
              }}
            >
              Get instant reply (Fastest)
            </p>
          </a>

          <a
            href="mailto:sheharyar3364@gmail.com"
            className="contact-method-card"
          >
            <div
              style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                marginBottom: "0.5rem",
              }}
            >
              📧
            </div>
            <h4
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Email
            </h4>
            <p
              style={{
                fontSize: "clamp(0.8125rem, 2vw, 0.875rem)",
                color: "var(--text-secondary)",
              }}
            >
              Detailed project inquiry
            </p>
          </a>

          <div
            onClick={() =>
              document
                .getElementById("contact-form-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="contact-method-card"
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                marginBottom: "0.5rem",
              }}
            >
              📝
            </div>
            <h4
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              Contact Form
            </h4>
            <p
              style={{
                fontSize: "clamp(0.8125rem, 2vw, 0.875rem)",
                color: "var(--text-secondary)",
              }}
            >
              Fill out details below
            </p>
          </div>
        </div>

        <div
          id="contact-form-section"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "1.5rem",
            padding: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                  fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                }}
              >
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="form-input"
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                  fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                }}
              >
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="form-input"
              />
            </div>

            <div
              className="form-grid-2col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                  }}
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  placeholder="+1 234 567 8900"
                  className="form-input"
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                  }}
                >
                  Country *
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                  placeholder="Your Country"
                  className="form-input"
                />
              </div>
            </div>

            <div
              className="form-grid-2col"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                  }}
                >
                  Project Type
                </label>
                <select
                  value={formData.project_type}
                  onChange={(e) =>
                    setFormData({ ...formData, project_type: e.target.value })
                  }
                  className="form-select"
                >
                  <option value="">Select type</option>
                  <option value="landing">Landing Page</option>
                  <option value="website">Business Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="webapp">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                  }}
                >
                  Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="form-select"
                >
                  <option value="">Select budget</option>
                  <option value="$500-$1000">$500 - $1,000</option>
                  <option value="$1000-$2500">$1,000 - $2,500</option>
                  <option value="$2500-$5000">$2,500 - $5,000</option>
                  <option value="$5000+">$5,000+</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                  fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                }}
              >
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="form-textarea"
                style={{ resize: "vertical" }}
              />
            </div>

            {status.message && (
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                  background:
                    status.type === "success"
                      ? "rgba(16, 185, 129, 0.1)"
                      : "rgba(239, 68, 68, 0.1)",
                  border:
                    status.type === "success"
                      ? "1px solid rgba(16, 185, 129, 0.3)"
                      : "1px solid rgba(239, 68, 68, 0.3)",
                  color:
                    status.type === "success"
                      ? "var(--success)"
                      : "var(--error)",
                }}
              >
                {status.message}
              </div>
            )}

            <button type="submit" disabled={loading} className="submit-button">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
