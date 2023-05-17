import Link from "next/link";
import Image from "next/image";
import Styles from "./SkillsAndProjects.module.css";

const Project = (props) => {
  return (
    <Link
      className={`${Styles.project} rounded-xl bg-white text-black pb-6 outline outline-2 outline-white`}
      href={`/projects/${props.slug}`}
    >
      <article>
        <Image
          alt="project thumbnail"
          src={props.image}
          width={468}
          height={208}
        />
        <h3 className="px-3.5 pt-6">{props.title}</h3>
      </article>
    </Link>
  );
};

export default Project;
