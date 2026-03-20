"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import type { Certification } from "@/data/certifications";

import { Button } from "@/components/button";
import { CertificationsList } from "@/components/certifications-list";
import { Section } from "@/components/section";
import { SvgIconBack } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type CertificationsContentProps = {
  certifications: Record<string, Certification[]>;
};

const CertificationsContent = ({
  certifications,
}: CertificationsContentProps) => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <div className="space-y-8">
          <Link href="/" className="block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("common.backToHome")}
              </Typography>
            </Button>
          </Link>

          <Typography variant="h1" display="block">
            {t.rich("certifications.continuousGrowth", {
              serif: (chunks: ReactNode) => (
                <span className="font-serif italic text-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </Typography>
        </div>

        <CertificationsList certifications={certifications} />
      </div>
    </Section>
  );
};

export default CertificationsContent;
