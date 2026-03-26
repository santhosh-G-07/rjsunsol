import { SITE_URL } from "@/lib/site";
import { ASSET_PATHS } from "@/lib/site-images";
import type { BlogPost } from "@/lib/constants";

const PUBLISHER = {
  "@type": "Organization" as const,
  name: "RJ Sunsol Green Energy",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject" as const,
    url: `${SITE_URL}${ASSET_PATHS.logo}`,
  },
};

export default function BlogPostingSchema({ post }: { post: BlogPost }) {
  const url = `${SITE_URL}/blogs/${post.slug}`;
  const imageUrl = post.heroImage.startsWith("http")
    ? post.heroImage
    : `${SITE_URL}${post.heroImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    author: PUBLISHER,
    publisher: PUBLISHER,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
