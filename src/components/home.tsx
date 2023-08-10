import bg from "../assets/bg.jpg";
import Socials from "./socials";
import pic from "../assets/me.jpeg";
import imports from "../assets/sites/imports.png";
import calc from "../assets/sites/calc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const sites = [
    { url: "https://fastidious-cascaron-b3aba8.netlify.app/", pic: imports },
    {
      url: "https://646c9dc63f98e6007ab7ec0d--fancy-haupia-fc64f5.netlify.app/",
      pic: calc,
    },
  ];
  return (
    <div className="relative w-full bg-black transition-all duration-500">
      <section
        id="home"
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${bg})`, opacity: "0.4" }}
      ></section>
      <div className="relative z-10 text-center text-white mt-5">
        <div className="h-[89vh] pt-[15rem]">
          <h1 className="text-[8vw] font-light">HI, I'M KENNEDY</h1>
          <p className="mt-2 text-[2vw] tracking-[0.52rem]">
            Fullstack Developer
          </p>
          <div className="text-[2rem] mt-[30vh] hover:rotate-180 transition-all duration-500">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
        <div className="bg-white p-10 text-gray-800">
          <div className="flex justify-center">
            <img src={pic} alt="" className="w-[15rem] mb-10 rounded-full" />
          </div>
          <p className="">
            Hello, I'm Kennedy, a passionate and versatile fullstack developer
            dedicated to crafting seamless digital experiences. With a blend of
            creativity and technical expertise, I bring ideas to life through
            elegant and functional web applications. My journey in the world of
            development has equipped me with a diverse skill set, ranging from
            front-end aesthetics to back-end efficiency. Through a commitment to
            continuous learning and innovation, I strive to deliver solutions
            that not only meet but exceed expectations. Join me as I embark on
            this coding adventure, where every line of code is an opportunity to
            make the virtual world a better place. Welcome to my portfolio,
            where innovation meets execution.
          </p>
          <Socials />
          <section
            id="projects"
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[6vh]"
          >
            {sites.map((site, index) => {
              return (
                <div key={index} className="shadow-md">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <img src={site.pic} alt="Site image" />
                  </a>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
