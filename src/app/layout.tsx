import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Icons } from "@/components/icons";
import SearchBar from "@/components/search-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/theme-button";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { HomeButton } from "@/components/ui/home-button";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCSearch",
  description: "Just Me Designing a Search Engine To Learn NextJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-900 dark:text-slate-100 text-slate-900">
            <div className="w-full pt-4 pl-4 space-x-2">
              <ModeToggle />
              <HomeButton />
            </div>
            <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
              />
            </svg>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
              <div className="h-full w-full flex flex-col items-center gap-4">
                <Icons.Sparkles className="h-16 w-16" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  JCSearch
                </h1>
                <p className="max-w-xl text-center text-lg text-slate-700 dark:text-slate-400">
                  Just Me Designing a Search Engine To Learn NextJS
                </p>
                <div className="mx-auto mt-16 w-full max-w-2xl flex flex-col">
                  <SearchBar />
                  {children}
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
