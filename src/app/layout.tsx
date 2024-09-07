"use client";

// import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Sidebar from "@/components/Sidebar/page";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata: Metadata = {
//   title: "Simon PKL",
//   description: "Generated by create next app",
// };

const disableNavSidebar = ["/login/siswa", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        style={{ backgroundColor: "#EAEAEA" }}
        suppressHydrationWarning={true}
      >
        <div>
          {!disableNavSidebar.includes(pathname) && <Navbar />}
          <div className="flex">
            {!disableNavSidebar.includes(pathname) && <Sidebar  />}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
