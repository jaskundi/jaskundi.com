import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getCertificationsByYear } from "@/data/certifications";

import CertificationsContent from "@/app/certifications/certifications-client";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("certifications.title"),
  };
};

const CertificationsPage = async () => {
  const certifications = getCertificationsByYear();

  return <CertificationsContent certifications={certifications} />;
};

export default CertificationsPage;
