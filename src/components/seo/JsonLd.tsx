import { Metadata } from 'next';

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ConhdeHelena",
    "image": "https://conhdehelena.com/images/logo-gold-transparent.png",
    "@id": "https://conhdehelena.com",
    "url": "https://conhdehelena.com",
    "telephone": "+34000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sevilla",
      "addressLocality": "Sevilla",
      "postalCode": "41001",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.3891,
      "longitude": -5.9845
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/conh_dehelena",
      "https://www.tiktok.com/@conhdehelena2",
      "https://www.youtube.com/@Conh_deHelena"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}
