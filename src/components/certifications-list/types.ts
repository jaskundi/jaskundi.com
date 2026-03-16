import type { ChipColor } from "@/components/chip";
import type { CertificationCategory } from "@/data/certifications";

export type CertificationCategoryColorMapping = Record<
  CertificationCategory,
  ChipColor
>;
