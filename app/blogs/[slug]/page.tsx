import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOGS_DATA, type BlogPost } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";
import BlogDetailHero from "@/components/sections/blogs/BlogDetailHero";
import BlogDetailContent from "@/components/sections/blogs/BlogDetailContent";
import BlogDetailCTA from "@/components/sections/blogs/BlogDetailCTA";
import BlogPostingSchema from "@/components/seo/BlogPostingSchema";
import CTABanner from "@/components/sections/CTABanner";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOGS_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOGS_DATA.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog | RJ Sunsol" };
  const url = `${SITE_URL}/blogs/${post.slug}`;
  const imageUrl = post.heroImage.startsWith("http") ? post.heroImage : `${SITE_URL}${post.heroImage}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blogs/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = BLOGS_DATA.find((p) => p.slug === params.slug) as BlogPost | undefined;
  if (!post) notFound();

  return (
    <main id="main-content" className="bg-graphite">
      <BlogPostingSchema post={post} />
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <BlogDetailCTA post={post} />
      <CTABanner />
    </main>
  );
}
