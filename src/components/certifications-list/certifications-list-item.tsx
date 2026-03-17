import type { MouseEventHandler } from "react";

import type { CertificationCategory } from "@/data/certifications";

import { Chip } from "@/components/chip";
import { Typography } from "@/components/typography";

import { cn } from "@/utils/helpers";

import type { CertificationCategoryColorMapping } from "./types";

const categoryChipColorMapping: CertificationCategoryColorMapping = {
  Core: "success",
  AI: "primary",
  Agile: "info",
  Leadership: "secondary",
};

type CertificationsListItemProps = {
  name: string;
  issuer: string;
  category: CertificationCategory;
  url: string;
  active: boolean;
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave: MouseEventHandler<HTMLAnchorElement>;
};

const CertificationsListItem = ({
  name,
  issuer,
  category,
  url,
  active,
  onMouseEnter,
  onMouseLeave,
}: CertificationsListItemProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col sm:flex-row gap-1.5 sm:justify-between py-3 transition-opacity ease-out-exponential",
        active ? "opacity-100" : "opacity-50"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-baseline gap-1 group-hover:text-blue-500">
        <Typography variant="body1" color="inherit">
          {name}
        </Typography>
        <span
          aria-hidden="true"
          className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all duration-200 text-sm"
        >
          ↗
        </span>
      </div>

      <div className="flex items-center gap-x-3">
        <Typography variant="body2" color="muted">
          {issuer}
        </Typography>
        <Chip color={categoryChipColorMapping[category]}>{category}</Chip>
      </div>
    </a>
  );
};

export default CertificationsListItem;
