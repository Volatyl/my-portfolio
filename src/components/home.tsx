import bg from "../assets/bg.jpg";
import Socials from "./socials";
import pic from "../assets/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Projects from "./projects";
import Footer from "./footer";
import Contacts from "./contacts";
import Experience from "./experience";

function Home() {
  return (
    <>
      <div className="relative w-full bg-black transition-all duration-500">
        <div
          id="home"
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${bg})`, opacity: "0.4" }}
        ></div>
        <div className="relative z- text-center text-white mt-5">
          <div className="h-[89vh] pt-[15rem]">
            <h1 className="text-[8vw] font-light">HI, I'M KENNEDY</h1>
            <p className="mt-2 text-[2vw] tracking-[0.52rem]">
              Fullstack Developer
            </p>
            <div className="text-[2rem] mt-[30vh] animate-bounce">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
          <div className="bg-white p-10 text-gray-800">
            <div className="flex justify-center">
              <img src={pic} alt="" className="w-[15rem] mb-10 rounded-full" />
            </div>
            <p className="">
              Hello, I'm Kennedy, a passionate and versatile fullstack developer
              dedicated to crafting seamless digital experiences. With a blend
              of creativity and technical expertise, I bring ideas to life
              through elegant and functional web applications. My journey in the
              world of development has equipped me with a diverse skill set,
              ranging from front-end aesthetics to back-end efficiency. Through
              a commitment to continuous learning and innovation, I strive to
              deliver solutions that not only meet but exceed expectations. Join
              me as I embark on this coding adventure, where every line of code
              is an opportunity to make the virtual world a better place.
              Welcome to my portfolio, where innovation meets execution.
            </p>
            <Socials />
          </div>
        </div>
      </div>
      <div>
        <Experience />
      </div>
      <div id="projects" className="">
        <Projects />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
