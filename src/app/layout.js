import { Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const notoSansJP = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "Eng To TR AI Teacher",
  description: "Learn Turkish with AI Teacher",
};
// Defines global metadata for the application including the title and description.
// RootLayout component wraps child components with globally defined font styles for consistency across the application.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${notoSansJP.variable}`} >
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Other tags like stylesheets or fonts */}
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
