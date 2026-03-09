"use client";

import { useTranslations } from "next-intl";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";
import { CertificationListItem } from "@/sections/certifications";

const Certifications = () => {
  const t = useTranslations();

  const items = [
    {
      name: t("certifications.items.1.name"),
      issuer: t("certifications.items.1.issuer"),
      date: t("certifications.items.1.date"),
      url: t("certifications.items.1.url"),
    },
    {
      name: t("certifications.items.2.name"),
      issuer: t("certifications.items.2.issuer"),
      date: t("certifications.items.2.date"),
      url: t("certifications.items.2.url"),
    },
    {
      name: t("certifications.items.3.name"),
      issuer: t("certifications.items.3.issuer"),
      date: t("certifications.items.3.date"),
      url: t("certifications.items.3.url"),
    },
    {
      name: t("certifications.items.4.name"),
      issuer: t("certifications.items.4.issuer"),
      date: t("certifications.items.4.date"),
      url: t("certifications.items.4.url"),
    },
  ];

  return (
    <Section id="certifications">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">
            {t("certifications.title")}
          </Typography>
        </div>

        <div className="col-span-1 sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <CertificationListItem
              key={item.name}
              name={item.name}
              issuer={item.issuer}
              date={item.date}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
