import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://defusync.yudong.me"
      : "https://localhost:3000",
  ),
  verification: {
    google: [
      "mxF9LMrgIKvrUOCO11NjcI6Tk-qQ5dB1Hqrd7dGRao8",
      "AzG41wLRqncRKtWQNfe4dMWgwcOv5Qdy96IiQeCCEcE",
    ],
  },
  applicationName: "DEFUSYNC",
  icons: {
    icon: "/favicon.ico",
    apple: "/aicon.png",
  },
  title: {
    default: "DEFUSYNC | Minecraft 槍戰伺服器",
    template: "%s | DEFUSYNC 台灣槍戰伺服器",
  },
  description:
    "DEFUSYNC 是一個台灣 Minecraft 槍戰競技伺服器，主打 SND 經典爆破、TDM 團隊死鬥、DUEL 1v1 與 REALISTIC 寫實模式，提供自訂 Loadouts、類 COD 槍戰機制與 PVP 對戰體驗。",
  keywords: [
    "槍戰伺服器",
    "台灣槍戰伺服器",
    "minecraft 槍戰伺服器",
    "minecraft",
    "DEFUSYNC",
    "Defusync",
    "defusync",
    "pvp server",
    "pvp 伺服器",
    "競技伺服器",
    "snd",
    "search and destroy",
    "snd wiki",
    "遊戲 wiki",
    "槍械伺服器",
    "minecrat 伺服器",
    "cod minecraft",
    "經典爆破",
    "拆炸彈",
    "爆破模式",
    "決勝時刻",
    "決勝時刻M",
    "決勝時刻Mc",
    "決勝時刻 minecraft",
  ],
  openGraph: {
    title: "DEFUSYNC | Minecraft 槍戰伺服器",
    description: "DEFUSYNC 是一個台灣 Minecraft 槍戰競技伺服器，主打 SND 經典爆破、TDM 團隊死鬥、DUEL 1v1 與 REALISTIC 寫實模式，提供自訂 Loadouts、類 COD 槍戰機制與 PVP 對戰體驗。",
    url: "https://defusync.yudong.me",
    siteName: "DEFUSYNC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Inejection JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DEFUSYNC",
    alternateName: ["DEFUSYNC", "DEFUSYNC 槍戰伺服器", "DEFUSE", "DEFUSYNC 伺服器"],
    url: "https://defusync.yudong.me",
  };

  return (
    <html lang="zh-TW" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
