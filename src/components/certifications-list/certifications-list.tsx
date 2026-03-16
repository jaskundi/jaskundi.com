"use client";

import { useState } from "react";

import type { Certification } from "@/data/certifications";
import { isNullOrUndefined } from "@/utils/helpers";

import { Typography } from "@/components/typography";

import CertificationsListItem from "./certifications-list-item";

type CertificationsListProps = {
  certifications: Record<string, Certification[]>;
};

const CertificationsList = ({ certifications }: CertificationsListProps) => {
  const years = Object.keys(certifications).sort().reverse();

  const [activeName, setActiveName] = useState<string | null>(null);

  return (
    <div className="border-b border-gray-100">
      {years.map((year) => (
        <div
          key={year}
          className="grid grid-cols-12 gap-6 border-t border-gray-100"
        >
          <div className="col-span-2 py-3">
            <Typography variant="body2" color="muted">
              {year}
            </Typography>
          </div>

          <div className="col-span-10 divide-y divide-gray-100">
            {certifications[year].map((cert) => (
              <CertificationsListItem
                key={cert.name}
                name={cert.name}
                issuer={cert.issuer}
                category={cert.category}
                url={cert.url}
                active={
                  isNullOrUndefined(activeName) || activeName === cert.name
                }
                onMouseLeave={() => setActiveName(null)}
                onMouseEnter={() => setActiveName(cert.name)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsList;
