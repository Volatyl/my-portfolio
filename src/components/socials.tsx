import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Socials() {
  const social = [
    { name: "GITHUB", url: "https://github.com/Volatyl", icon: FaGithubSquare },
    {
      name: "TWITTER",
      url: "https://twitter.com/DjVolatyl",
      icon: FaTwitterSquare,
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/kennedy-muinde-22b14673",
      icon: FaLinkedin,
    },
  ];
  return (
    <>
      <div className="mt-20 flex justify-center flex-wrap">
        {social.map((site, index) => {
          return (
            <div key={index} className="flex flex-col p-5">
              <a
                href={site.url} target="blank"
                className="bg-orange-500 cursor-pointer p-10 text-white text-[3rem] rounded-full hover:animate-spin-short"
              >
                {React.createElement(site.icon)}
              </a>
              <p className="p-5">{site.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Socials;
