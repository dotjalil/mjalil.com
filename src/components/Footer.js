import Image from "next/image";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import hackerrank from "../../public/hackerrank.svg";
import github from "../../public/github.svg";

const Footer = (props) => {
  return (
    <footer
      id="footer"
      className="container mx-auto px-4 flex flex-col-reverse sm:flex sm:flex-row sm:justify-between sm:items-end py-10"
    >
      <div className="font-videotype text-lg text-whited4">
        <p className="text-center sm:text-left">Based in Cairo, Egypt</p>
        <p className="text-center sm:text-left">
          Currently Freelance WordPress Developer
        </p>
      </div>
      <div className="flex justify-center mb-5 sm:mb-0 sm:items-end">
        <ul className="list-none flex space-x-5">
          <li>
            <a target="_blank" href="https://linkedin.com/in/mjalilk">
              <Image alt="github" src={linkedin} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/dotjalil">
              <Image alt="github" src={github} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/mo_jalil96">
              <Image alt="github" src={hackerrank} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.hackerrank.com/mgkmohammad">
              <Image alt="github" src={twitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
