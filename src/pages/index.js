import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkillsAndProjects from "@/components/SkillsAndProjects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mo. J. - Full Stack JavaScript Developer</title>
        <meta name="description" content="Portfolio website for Mo. J." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
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
