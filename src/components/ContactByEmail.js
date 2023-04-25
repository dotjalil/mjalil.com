import Link from "next/link";
import Image from "next/image";
import openLinkIcon from "../../public/open-link.svg";

const ContactByEmail = () => {
  return (
    <section className="font-videotype py-18 mt-52 text-center">
      <h2 className="text-4xl">contact me</h2>
      <Link
        href="mailto:mo@mjalil.com"
        className="flex items-center justify-center mt-10 gap-4"
      >
        mo@mjalil.com <Image alt="open in new tab icon" src={openLinkIcon} />
      </Link>
    </section>
  );
};

export default ContactByEmail;
