export type Metadata = {
  metadataBase?: URL;
  title?: any;
  description?: string;
  keywords?: string[];
  authors?: Array<{ name: string; url?: string }>;
  creator?: string;
  publisher?: string;
  robots?: any;
  alternates?: any;
  openGraph?: any;
  twitter?: any;
  icons?: any;
  manifest?: string;
};

export const siteConfig = {
  name: "Alex James",
  description:
    "Alex James — Ordinary coder & gamer boy. Interfaces, interactive experiences, and software that feel calm, considered, and quietly fast.",
  url: "https://example.com",
  ogImage: "https://github.com/AlexJamesHQ.png",
  creator: "@AlexJamesHQ",
  authors: [
    {
      name: "Alex James",
      url: "https://github.com/AlexJamesHQ",
    },
  ],
  keywords: [
    "portfolio",
    "personal site",
    "Alex James",
    "React",
    "Tailwind CSS",
    "TypeScript",
  ],
} as const;

export const baseMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator,
  },
  manifest: "/site.webmanifest",
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
    },
    twitter: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
    },
  };
}
