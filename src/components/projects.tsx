import imports from "../assets/sites/imports.png";
import calc from "../assets/sites/calc.png";
import back from "../assets/back.jpg";

function Projects() {
  const sites = [
    { url: "https://fastidious-cascaron-b3aba8.netlify.app/", pic: imports },
    {
      url: "https://646c9dc63f98e6007ab7ec0d--fancy-haupia-fc64f5.netlify.app/",
      pic: calc,
    },
  ];
  return (
    <div className="">
      <div className="bg-black relative w-full h-[20vh]">
        <div
          className="absolute top-0 left-0 h-full bg-cover bg-center w-full blur-sm"
          style={{ backgroundImage: `url(${back})`, opacity: "0.6" }}
        ></div>
        <div className="relative text-center text-white pt-[5vh]">
          <h1 className="text-[5vw]">WHAT I'VE DONE</h1> <p className="text-[1rem] font-thin">(more coming soon)</p>
        </div>
      </div>
      <section className="bg-white p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[6vh] relative">
        {sites.map((site, index) => {
          return (
            <div key={index} className="shadow-md hover:opacity-60 transition-all duration-300">
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                <img src={site.pic} alt="Site image" />
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
