import HeadHtml from "@/components/HeadHtml";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <HeadHtml />
      <main>
        <Header />
        <div className="container mx-auto">
          <section id="hero-section" className="flex flex-col gap-16 py-28">
            <p className="font-videotype">
              0 <span className="text-whitebc">/ 0</span>
            </p>
            <h1 className="font-videotype text-7xl leading-tight">
              Coming Soon!
            </h1>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
