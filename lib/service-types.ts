export type ServiceCategory =
  | "General"
  | "Cosmetic"
  | "Surgical"
  | "Orthodontic"
  | "Paediatric"
  | "Emergency"
  | "Diagnostic";

export type Service = {
  slug: string;
  category: ServiceCategory;
  imageSrc: string;
  imageAlt: string;
  badgeColor: string;
  title: string;
  shortDesc: string;
  duration: string;
  badgeExtra?: string;
  fullDesc: string;
  expect: string[];
  whoNeeds: string;
  note: string;
  showHomepage: boolean;
  homepagePosition?: number;
};

export const serviceCategories: Array<"All" | ServiceCategory> = [
  "All",
  "General",
  "Cosmetic",
  "Surgical",
  "Orthodontic",
  "Paediatric",
  "Emergency",
  "Diagnostic",
];
