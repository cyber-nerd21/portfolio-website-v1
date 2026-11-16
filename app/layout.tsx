import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Amogh Deodhar — GenAI Backend Engineer · Information Technology",
  description:
    "Curious mind building intelligent things. Amogh Deodhar is an Information Technology engineering student at Bharati Vidyapeeth College of Engineering specializing in GenAI, RAG pipelines, LLM agents, and automation.",
  keywords: [
    "Amogh Deodhar",
    "GenAI Backend Engineer",
    "RAG",
    "LLM Agents",
    "FastAPI",
    "LangChain",
    "Information Technology",
    "Bharati Vidyapeeth College of Engineering",
    "Amogh Deodhar Portfolio",
  ],
  authors: [{ name: "Amogh Deodhar", url: "https://github.com/cyber-nerd21" }],
  openGraph: {
    title: "Amogh Deodhar — GenAI Backend Engineer",
    description:
      "Curious mind. Building intelligent things. Information Technology engineering student and developer passionate about AI, backend engineering and automation.",
    url: "https://amoghdeodhar.dev",
    siteName: "Amogh Deodhar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF9F6] text-[#242424] font-sans antialiased selection:bg-[#E8E2D5] selection:text-[#242424]">
        {children}
      </body>
    </html>
  );
}
