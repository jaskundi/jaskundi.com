"use client";

import { useTranslations } from "next-intl";

import { getCertificationsByYear } from "@/data/certifications";

import { CertificationsList } from "@/components/certifications-list";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const CertificationsTable = () => {
  const t = useTranslations();
  const certifications = getCertificationsByYear();

  return (
    <Section id="certifications">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("certifications.title")}</Typography>

        <CertificationsList certifications={certifications} />
      </div>
    </Section>
  );
};

export default CertificationsTable;
