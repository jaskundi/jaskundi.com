import { getCertificationsByYear } from "@/data/certifications";

import { CertificationsList } from "@/components/certifications-list";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const CertificationsTable = () => {
  const certifications = getCertificationsByYear();

  return (
    <Section id="certifications">
      <div className="space-y-16">
        <Typography variant="subtitle1">Certifications</Typography>

        <CertificationsList certifications={certifications} />
      </div>
    </Section>
  );
};

export default CertificationsTable;
