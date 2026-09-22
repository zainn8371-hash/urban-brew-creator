import { createFileRoute } from "@tanstack/react-router";
import { CafeSite } from "@/components/cafe-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Up Town Cafe — Good Coffee. Great Food. Better Moments." },
      { name: "description", content: "Up Town Cafe is Lahore's warm neighbourhood spot for exceptional coffee, fresh food, and better moments." },
      { property: "og:title", content: "Up Town Cafe — Good Coffee. Great Food. Better Moments." },
      { property: "og:description", content: "Exceptional coffee, delicious food, and memorable moments in the heart of Lahore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CafeSite,
});
