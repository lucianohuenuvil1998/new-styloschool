export type ProductLine = {
  label: string;
  value: string;
};

export type Product = {
  title: string;
  image: string;
  lines: ProductLine[];
};

export type College = {
  slug: string;
  name: string;
  shortName?: string;
  image: string;
  description?: string;
};

export type Category = {
  title: string;
  image: string;
  href: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
