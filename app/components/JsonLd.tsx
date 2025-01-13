export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elevano",
    url: "https://elevano.com",
    logo: "https://elevano.com/logo.svg",
    description:
      "Elevano delivers cutting-edge digital solutions, AI integration, and cloud services to transform businesses through innovative technology solutions.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/company/elevano",
      "https://twitter.com/elevano",
      // Add other social media URLs
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "customer service",
      email: "info@elevano.com",
      availableLanguage: "English",
    },
    offers: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Service",
          name: "Web Development",
          description: "Custom web application development services",
        },
        {
          "@type": "Service",
          name: "Mobile Applications",
          description: "Native and cross-platform mobile app development",
        },
        {
          "@type": "Service",
          name: "AI & Automation",
          description: "Intelligent automation and AI integration services",
        },
        // Add other services
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
