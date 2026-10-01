import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import Link from "next/link";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Runa",
  description: "Move with intention.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <Container>
            <nav className="flex flex-row justify-between items-center h-20 border-b-2 border-border-primary">
              <div className="icon font-bold text-4xl">Runa</div>
              <ul className="flex flex-row">
                  <li className="px-2 border-r"><Link href="/signin">Log In</Link></li>
                  <li className="px-2"><Link href="/signup">Sign Up</Link></li>
              </ul>
            </nav>
          </Container>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
