import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import openLink from "../../../../public/open-link.svg";

const ProjectDetails = (props) => {
  return (
    <section className="px-[10px] mt-[95px]">
      <div className="w-full bg-[#222222] py-0 sm:py-16 rounded-[10px] px-[20px] sm:px-0 sm:rounded-[50px]">
        <div className="container mx-auto py-[30px] sm:py-16 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-14">
            <div>
              <div className="block sm:hidden mb-[20px]">
                <Image
                  className="rounded-lg"
                  src={props.thumbnail}
                  height={300}
                  width={500}
                  alt="thumbnail"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h2 className="text-white text-[30px]">project details</h2>
              <div className="flex gap-12 mt-8">
                <style>
                  {`
                  ul {
                    list-style: disc;
                    padding-left: 12px;
                  }
                  ul li {
                    margin-bottom: 6px;
                  }
                  `}
                </style>
                <div className="text-[#EAEAEA] font-roboto ">
                  {parse(props.details)}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white text-[30px]">project links</h2>
              <div className="flex gap-10 mt-8">
                <div className="text-[#EAEAEA]">
                  <Link
                    href={props.website}
                    className="text-whiteaf flex gap-2"
                    target="_blank"
                  >
                    {props.website}
                    <Image
                      src={openLink}
                      alt="open external link icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <Image
              className="rounded-lg"
              src={props.thumbnail}
              height={300}
              width={500}
              alt="thumbnail"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
