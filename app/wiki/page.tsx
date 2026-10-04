import type { Metadata } from "next";
import { getAllContent } from "../../libs/markdown";
import WikiListClient from "./WikiListClient";
import { Post } from "../../types/post";
import Navbar from "../components/Navbar";
import Footer from "../section/Footer";

export const metadata: Metadata = {
  title: "Wiki｜遊戲指南、公告與開發日誌",
  description:
    "DEFUSYNC 官方 Wiki，收錄 Minecraft 槍戰伺服器的遊戲指南、伺服器公告、更新資訊與開發日誌。",
  alternates: {
    canonical: "/wiki",
  },
  openGraph: {
    title: "DEFUSYNC Wiki｜遊戲指南、公告與開發日誌",
    description:
      "DEFUSYNC 官方 Wiki，收錄 Minecraft 槍戰伺服器的遊戲指南、伺服器公告、更新資訊與開發日誌。",
    url: "/wiki",
    type: "website",
  },
};

export default function Page() {
  const allPosts = getAllContent() as Post[];
  return (
    <main>
      <Navbar />
      <WikiListClient initialPosts={allPosts} />
      <Footer />
    </main>
  );
}
