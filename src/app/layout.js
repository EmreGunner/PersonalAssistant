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
  title: "Emre Guner Conversational Portfolio Website",
  description: "Learn about my projects and book a meeting",
};
// Defines global metadata for the application including the title and description.
// RootLayout component wraps child components with globally defined font styles for consistency across the application.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${notoSansJP.variable}`} >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.title} />
      </head>
      
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
