import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import NextThemeProvider from "@/Providers/NextThemeProvider";


const josefin = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Travelo",
  description: "Your Next Travel Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
      suppressHydrationWarning >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider >
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NextThemeProvider>
      </body>
    </html >
  );
}
