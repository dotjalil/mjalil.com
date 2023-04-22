import Link from "next/link";
import Image from "next/image";
import Styles from "./Blog.module.css";
import thumb from "../../public/blogThumb.png";

const Blog = () => {
  return (
    <section id="projects" className="font-videotype pt-28">
      <p className="">
        2 <span className="text-whitebc">/ 3</span>
      </p>
      <h2 className="mt-5 text-4xl">latest blogs</h2>
      <div className="sm:grid sm:grid-cols-3 gap-[50px] mt-9">
        <Link
          className={`${Styles.project} rounded-3xl bg-[#222222] text-white pb-6`}
          href={"#"}
        >
          <article>
            <Image
              alt="project thumbnail"
              src={thumb}
              className="rounded-t-3xl"
            />
            <h3 className="px-3.5 pt-6">
              How to Clean up a Hacked WordPress Website - The Last Guide You’ll
              Read on WordPress Security.
            </h3>
          </article>
        </Link>
        <Link
          className={`${Styles.project} rounded-3xl bg-[#222222] text-white pb-6`}
          href={"#"}
        >
          <article>
            <Image
              alt="project thumbnail"
              src={thumb}
              className="rounded-t-3xl"
            />
            <h3 className="px-3.5 pt-6">
              How to Clean up a Hacked WordPress Website - The Last Guide You’ll
              Read on WordPress Security.
            </h3>
          </article>
        </Link>
        <Link
          className={`${Styles.project} rounded-3xl bg-[#222222] text-white pb-6`}
          href={"#"}
        >
          <article>
            <Image
              alt="project thumbnail"
              src={thumb}
              className="rounded-t-3xl"
            />
            <h3 className="px-3.5 pt-6">
              How to Clean up a Hacked WordPress Website - The Last Guide You’ll
              Read on WordPress Security.
            </h3>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
