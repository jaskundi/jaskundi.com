"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/components/link";
import { Typography } from "@/components/typography";

export type CertificationListItemProps = {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
};

const CertificationListItem = ({
  name,
  issuer,
  date,
  url,
}: CertificationListItemProps) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-1">
      <Typography variant="body1" fontWeight="medium">
        {name}
      </Typography>

      <Typography variant="body2" color="muted">
        {issuer}
        {date && ` ~ ${date}`}
      </Typography>

      {url && (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {t("certifications.showCredential")}
        </Link>
      )}
    </div>
  );
};

export default CertificationListItem;
