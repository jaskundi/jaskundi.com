"use client";

import { useTranslations } from "next-intl";

import { getFeaturedCertificationsByYear } from "@/data/certifications";

import { CertificationsList } from "@/components/certifications-list";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const CertificationsTable = () => {
  const t = useTranslations();
  const certifications = getFeaturedCertificationsByYear();

  return (
    <Section id="certifications">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("certifications.title")}</Typography>

        <div className="space-y-6">
          <CertificationsList certifications={certifications} />

          <div className="flex justify-end">
            <Link href="/certifications">{t("certifications.viewAll")}</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CertificationsTable;
