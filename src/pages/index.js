import Head from "next/head";
import Router from "next/router";
import nprogress from "nprogress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkillsAndProjects from "@/components/SkillsAndProjects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

Router.events.on("routeChangeStart", (url) => {
  nprogress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  nprogress.done(false);
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mo. J. - Full Stack JavaScript Developer</title>
        <meta name="description" content="Portfolio website for Mo. J." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <main>
        <Header />
        <div className="container mx-auto px-4">
          <Hero />
          <SkillsAndProjects />
          <Blog />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
