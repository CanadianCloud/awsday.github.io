import { Suspense } from "react";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ScrollToHash } from "@/components/ScrollToHash";
import CityModal from "@/components/layout/CityModal";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "AWS Day",
  description:
    "The AWS Community Day in Vancouver Canada features expert-led talks, technical workshops, hands-on labs, and networking opportunities with industry leaders and fellow enthusiasts. Whether you're an experienced professional or a newcomer in the world of AWS, come join us. Be part of the movement to create a better, smarter, and more connected world.",
};

const fontHeading = localFont({
  src: "../../public/fonts/amazon/Ember/AmazonEmber_He.ttf",
  display: "swap",
  variable: "--font-heading",
});

const fontBody = localFont({
  src: "../../public/fonts/amazon/Ember/AmazonEmber_Rg.ttf",
  display: "swap",
  variable: "--font-body",
});

// Load Amazon Ember Display Heavy font for maximum boldness
const fontHeroDate = localFont({
  src: "../../public/fonts/amazon/Ember Display/AmazonEmberDisplay_He.ttf",
  weight: "900",
  display: "swap",
  variable: "--font-hero-date",
});

const fontHeroRegular = localFont({
  src: "../../public/fonts/amazon/Ember Display/AmazonEmberDisplay_Rg.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-hero-regular",
});


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable, fontHeroDate.variable, fontHeroRegular.variable)}
      >
        <ScrollToHash />
        <Suspense fallback={null}>
          <CityModal />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
