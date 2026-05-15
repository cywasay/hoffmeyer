import localFont from "next/font/local";
import "./globals.css";

const codeNext = localFont({
  src: [
    {
      path: "../components/fonts/code_next/CodeNext-Trial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../components/fonts/code_next/CodeNext-Trial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../components/fonts/code_next/CodeNext-Trial-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../components/fonts/code_next/CodeNext-Trial-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-code-next",
});

export const metadata = {
  title: "Hoffmeyer - Premium Mobile First",
  description: "A premium mobile-first landing page experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${codeNext.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
