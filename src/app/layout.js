import { Roboto } from "next/font/google";
//components
import PageTransition from "./components/ui/PageTransition";
import "./globals.css";
import StairTransition from "./components/ui/StairTransition";
const roboto = Roboto({
  subsets: ["latin"],
  weight:['100','300','400','500','700','900']
});
export const metadata = {
  title: "EnerFi",
  description: "Where Blockchain Meets Clean Energy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-[#030A12] text-white relative overflow-x-hidden max-w-[1440px] mx-auto`}
      > 
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
