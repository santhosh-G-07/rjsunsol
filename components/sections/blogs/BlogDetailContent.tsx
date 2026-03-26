"use client";

import type { BlogPost } from "@/lib/constants";
import { BLOG_CONTENT, type ContentBlock } from "@/lib/blog-content";

export default function BlogDetailContent({ post }: { post: BlogPost }) {
  const blocks = BLOG_CONTENT[post.slug] ?? [];

  return (
    <section
      className="py-20 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-[780px] px-6">
        {blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>
    </section>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className="mb-6 font-dmsans text-[17px] font-light leading-[1.85]"
          style={{ color: "var(--text-secondary)" }}
        >
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2
          className="mb-4 mt-12 border-l-4 border-l-[var(--accent)] pl-4 font-rajdhani text-[28px] font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          className="mb-3 mt-8 font-rajdhani text-[20px] font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-2.5">
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="font-dmsans text-[16px] leading-[1.75]"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {block.headers.map((h, j) => (
                  <th
                    key={j}
                    className="border border-[var(--border-color)] px-4 py-3 text-left font-rajdhani font-semibold"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-[var(--border-color)] px-4 py-3 font-dmsans text-[14px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "divider":
      return (
        <div
          className="my-10 h-px"
          style={{ background: "var(--gradient-divider)" }}
        />
      );
    default:
      return null;
  }
}
