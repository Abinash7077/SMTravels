import localFont from "next/font/local";
import "./globals.css";
import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
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
  title: "SM Travels",
  description: "Car, Taxi, Bus, Bolero in rents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Headers/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
