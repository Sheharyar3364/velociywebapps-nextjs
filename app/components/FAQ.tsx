"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "What technologies do you work with?",
      answer:
        "We specialize in Laravel, React, Next.js, Solid.js, Django, Flask, React Native, and modern JavaScript/TypeScript frameworks. We choose the best technology stack based on your specific project requirements.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Most projects are delivered within 2-8 weeks depending on complexity. Simple landing pages can be completed in 1-2 weeks, while complex web applications may take 6-8 weeks. We'll provide an accurate timeline during our discovery call.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! Every package includes post-launch support ranging from 1-6 months depending on your plan. We're here to fix bugs, provide training, and help you make the most of your new platform.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer fixed-price packages starting from $750 for simple projects. You'll receive a detailed quote with no hidden fees after our initial consultation. We believe in transparent pricing so you know exactly what you're paying for.",
    },
    {
      question: "Can you work with my existing project?",
      answer:
        "Absolutely! We can enhance, fix, or complete existing projects. We'll review your codebase, identify issues, and provide recommendations before starting work.",
    },
    {
      question: "Do I own the source code?",
      answer:
        "Yes, you own 100% of the source code and all intellectual property rights. Upon project completion and final payment, we transfer everything to you with full ownership.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="faq"
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
            FAQ
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Everything you need to know about working with us
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                {faq.question}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
