import {Rancho, Poppins, Lobster_Two} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const rancho = Rancho({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "Next Food App",
  description: "My Food Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
