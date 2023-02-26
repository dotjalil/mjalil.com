import { useState } from "react";
import Link from "next/link";

const Header = (props) => {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  function toggleMobileMenu() {
    const value = mobileMenuVisibility ? false : true;
    setMobileMenuVisibility(value);
  }

  return (
    <>
      {/* Implement the overlay menu */}
      <div
        id="menu"
        className={`${
          mobileMenuVisibility
            ? "w-screen h-screen opacity-95"
            : "w-0 h-0 opacity-0"
        } fixed z-90 flex justify-center items-center bg-black duration-700 border-solid border-4 border-white`}
      >
        <button
          className="fixed top-6 right-8 text-white hover:text-amber-500 text-4xl font-semibold duration-300"
          onClick={toggleMobileMenu}
        >
          ×
        </button>
        <div className="flex flex-col text-white text-center text-xl font-videotype space-y-3">
          <Link className="hover:text-amber-500 duration-300" href="/">
            home
          </Link>
          <Link className="hover:text-amber-500 duration-300" href="/about">
            about
          </Link>
          <Link className="hover:text-amber-500 duration-300" href="/work">
            my work
          </Link>
          <Link className="hover:text-amber-500 duration-300" href="/contact">
            contact
          </Link>
        </div>
      </div>
      <header className="container mx-auto px-4 pt-5 sm:pt-12 font-videotype flex justify-between">
        <Link href="/">
          <h1 className="text-base sm:text-2xl">
            Mo. J. <p className="text-xs sm:text-base">Mohamed Abduljalil</p>
          </h1>
        </Link>
        <nav className="">
          <ul className="list-none hidden sm:flex space-x-5">
            <li className="py-2 px-3.5 border border-solid border-white8f rounded-full text-whitec9">
              <Link href="/">home</Link>
            </li>
            <li className="py-2 px-3.5 border border-solid border-white8f rounded-full text-whitec9">
              <Link href="/about">about</Link>
            </li>
            <li className="py-2 px-3.5 border border-solid border-white8f rounded-full text-whitec9">
              <Link href="/work">my work</Link>
            </li>
            <li className="py-2 px-3.5 border border-solid border-white8f rounded-full text-whitec9">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleMobileMenu}
          className="flex gap-4 items-center sm:hidden"
        >
          <span>Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;
