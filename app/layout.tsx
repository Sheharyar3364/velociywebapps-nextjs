import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VelocityWebApps | Premium Web & Mobile App Development",
  description:
    "Professional web and mobile app development services. Custom Laravel, React, Next.js, and React Native solutions. From $750. Fast delivery, 98% client satisfaction.",
  keywords:
    "web development, mobile app development, Laravel development, React development, Next.js, React Native, custom web applications",
  authors: [{ name: "VelocityWebApps" }],
  openGraph: {
    type: "website",
    url: "https://velocitywebapps.com",
    title: "VelocityWebApps - Premium Web & Mobile Development",
    description:
      "Professional web and mobile app development services. Custom Laravel, React, Next.js solutions. From $750.",
    images: [{ url: "https://velocitywebapps.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VelocityWebApps - Premium Web & Mobile Development",
    description: "Professional web and mobile app development services.",
    images: ["https://velocitywebapps.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VelocityWebApps",
              url: "https://velocitywebapps.com",
              logo: "https://velocitywebapps.com/logo.png",
              description:
                "Professional web and mobile app development services.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-348-000-3690",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        {children}
      </body>
    </html>
  );
}
