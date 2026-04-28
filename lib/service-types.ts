export type ServiceCategory =
  | "General"
  | "Cosmetic"
  | "Surgical"
  | "Orthodontic"
  | "Paediatric"
  | "Emergency"
  | "Diagnostic";

export type ServiceDisplayType = "IMAGE" | "ICON";

export type Service = {
  slug: string;
  category: ServiceCategory;
  displayType: ServiceDisplayType;
  imageSrc?: string;
  imageAlt?: string;
  iconName?: string;
  iconColor?: string;
  iconBg?: string;
  badgeColor: string;
  title: string;
  shortDesc: string;
  duration: string;
  price: string;
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
