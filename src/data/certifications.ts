export const CertificationCategories = ["Core", "AI", "Leadership"] as const;
export type CertificationCategory = (typeof CertificationCategories)[number];

export type Certification = {
  name: string;
  issuer: string;
  year: number;
  category: CertificationCategory;
  url: string;
};

export const certifications: Certification[] = [
  {
    name: "Product Manager (PMC™)",
    issuer: "Product School",
    year: 2026,
    category: "Core",
    url: "#",
  },
  {
    name: "AI Product Strategy",
    issuer: "Product School",
    year: 2026,
    category: "AI",
    url: "#",
  },
  {
    name: "Go-to-Market Certification",
    issuer: "Product School",
    year: 2026,
    category: "Core",
    url: "#",
  },
  {
    name: "Product Experimentation Certification",
    issuer: "Product School",
    year: 2026,
    category: "Core",
    url: "#",
  },
  {
    name: "Google Prompting Essentials Specialization",
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
  },
  {
    name: "WiHTL Ethnic Future Leaders Programme",
    issuer: "WiHTL",
    year: 2022,
    category: "Leadership",
    url: "#",
  },
];

export const getCertificationsByYear = (): Record<string, Certification[]> => {
  return certifications.reduce<Record<string, Certification[]>>((acc, cert) => {
    const year = String(cert.year);
    if (!acc[year]) acc[year] = [];
    acc[year].push(cert);
    return acc;
  }, {});
};
