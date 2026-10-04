import type { Metadata } from "next";
import Hero from "./section/Hero";
import About from "./section/About";
import Navbar from "./components/Navbar";
import Modes from "./section/Modes";
import Map from "./section/Map";
import Join from "./section/Join";
import Footer from "./section/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://defusync.yudong.me/#organization",

      name: "DEFUSYNC",

      alternateName: ["WAIT Network", "WAITMC"],

      url: "https://defusync.yudong.me",

      logo: {
        "@type": "ImageObject",
        url: "https://defusync.yudong.me/logo.jpg",
      },

      description: "DEFUSYNC 是一個台灣 Minecraft 槍戰競技伺服器。",
    },

    {
      "@type": "WebSite",
      "@id": "https://defusync.yudong.me/#website",

      url: "https://defusync.yudong.me",
      name: "DEFUSYNC",

      alternateName: ["DEFUSYNC Minecraft 槍戰伺服器"],

      inLanguage: "zh-TW",

      publisher: {
        "@id": "https://defusync.yudong.me/#organization",
      },

      about: {
        "@id": "https://defusync.yudong.me/#gameserver",
      },
    },

    {
      "@type": "GameServer",
      "@id": "https://defusync.yudong.me/#gameserver",

      name: "DEFUSYNC",

      url: "https://defusync.yudong.me",

      identifier: "defusync.yudong.me",

      description:
        "台灣 Minecraft 槍戰伺服器，主打 SND 經典爆破、TDM 團隊死鬥、DUEL 1v1 與 REALISTIC 寫實模式。",

      game: {
        "@type": "VideoGame",
        name: "Minecraft",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Modes />
      <Map />
      <Join />
      <Footer />
    </>
  );
}
