import localFont from "next/font/local";
import "./globals.css";
import { HeaderComponent } from "@/components/header";
import { FooterComponent } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Q7 Technology | Innovative IT Solutions",
  description: "Q7 Technology provides cutting-edge IT solutions and services, specializing in software development, cloud computing, and enterprise technology solutions to drive business growth.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
