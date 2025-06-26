import {Poppins, Lobster_Two} from "next/font/google";
import "./globals.css";


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
      <body
        className={`${Poppins.className}`}
      >
        <nav className={lobster.className}>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
