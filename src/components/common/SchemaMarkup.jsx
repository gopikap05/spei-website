import { Helmet } from "react-helmet-async";

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.spei.in/#organization",
        "name": "SP Engineers India",
        "alternateName": "SPEI",
        "url": "https://www.spei.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.spei.in/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9195009032",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Tamil"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 22, SF No. 579/5A1, Rajaji Layout, Rajsriya U-8 Back Side, Hosur Taluk",
          "addressLocality": "Hosur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "635126",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.spei.in"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.spei.in/#localbusiness",
        "name": "SP Engineers India",
        "image": "https://www.spei.in/logo.png",
        "url": "https://www.spei.in",
        "telephone": "+91-9195009032",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 22, SF No. 579/5A1, Rajaji Layout, Rajsriya U-8 Back Side, Hosur Taluk",
          "addressLocality": "Hosur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "635126",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.7409,
          "longitude": 77.8253
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "description": "SP Engineers India is a leading manufacturer of Special Purpose Machines (SPM), industrial automation equipment, conveyor systems, assembly lines, and pipeline fabrication based in Hosur, Tamil Nadu, India.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industrial Machines & Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Special Purpose Machines (SPM)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Life Cycle Endurance Testing Machines" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Washing Machines" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pick and Place Machines" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Conveyor Systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assembly Line Systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipeline and Heavy Fabrication" } }
          ]
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default SchemaMarkup;