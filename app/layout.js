import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
  title: "Hello this is begining",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <nav>
          <ul className="flex gap-5">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/About'>About</Link></li>
            <li><Link href='/blogs'>Blogs</Link></li>
            <li><Link href='/posts'>Posts</Link></li>
          </ul>
        </nav>
        <hr/>
        {children}
      </body>
    </html>
  );
}
