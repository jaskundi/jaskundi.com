export const CertificationCategories = [
  "Core",
  "AI",
  "Agile",
  "Leadership",
] as const;
export type CertificationCategory = (typeof CertificationCategories)[number];

export type Certification = {
  name: string;
  issuer: string;
  year: number;
  category: CertificationCategory;
  url: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    name: "Product Manager (PMC™)",
    issuer: "Product School",
    year: 2026,
    category: "Core",
    url: "#",
    featured: true,
  },
  {
    name: "AI Product Management",
    issuer: "Product School",
    year: 2026,
    category: "AI",
    url: "#",
    featured: true,
  },
  {
    name: "Go-to-Market",
    issuer: "Product School",
    year: 2026,
    category: "Core",
    url: "#",
  },
  {
    name: "Product Experimentation",
    issuer: "Product School",
    year: 2026,
    category: "Core",
    url: "#",
  },
  {
    name: "Scrum Product Owner (CSPO®)",
    issuer: "Scrum Alliance",
    year: 2026,
    category: "Agile",
    url: "#",
    featured: true,
  },
  {
    name: "Google Prompting Essentials",
    issuer: "Google",
    year: 2025,
    category: "AI",
    url: "#",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    year: 2025,
    category: "AI",
    url: "#",
    featured: true,
  },
  {
    name: "WiHTL Future Leaders Programme",
    issuer: "WiHTL",
    year: 2022,
    category: "Leadership",
    url: "#",
    featured: true,
  },
];

// ABOUTME: Groups certifications by year, optionally filtering to featured only
const groupByYear = (
  certs: Certification[]
): Record<string, Certification[]> => {
  return certs.reduce<Record<string, Certification[]>>((acc, cert) => {
    const year = String(cert.year);
    if (!acc[year]) acc[year] = [];
    acc[year].push(cert);
    return acc;
  }, {});
};

export const getCertificationsByYear = (): Record<string, Certification[]> => {
  return groupByYear(certifications);
};

export const getFeaturedCertificationsByYear = (): Record<
  string,
  Certification[]
> => {
  return groupByYear(certifications.filter((cert) => cert.featured));
};
