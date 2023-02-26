import "@/styles/globals.css";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

const videotype = localFont({
  src: "../../public/videotype/videotype.otf",
  variable: "--font-videotype",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${videotype.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
