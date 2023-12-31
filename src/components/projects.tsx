import imports from "../assets/sites/imports.png";
import tamtam from "../assets/sites/tamtam.png";
import calc from "../assets/sites/calc.png";
import port from "../assets/sites/port.png";
import stem from "../assets/sites/stem.png";
import back from "../assets/back.jpg";

function Projects() {
  const sites = [
    { url: "https://cars-sales.netlify.app/", pic: imports },
    {
      url: "https://646c9dc63f98e6007ab7ec0d--fancy-haupia-fc64f5.netlify.app/",
      pic: calc,
    },
    { url: "https://tamtammobiles.com/", pic: tamtam },{ url: "https://kennedy-muinde.netlify.app/", pic: port },
   { url: "https://stemresourcegroup.org/", pic: stem }
  ];
  return (
    <div className="">
      <div className="bg-black relative w-full ">
        <div
          className="absolute top-0 left-0 h-full bg-cover bg-center w-full blur-sm"
          style={{ backgroundImage: `url(${back})`, opacity: "0.6" }}
        ></div>
        <div id="details" className="relative text-center text-white p-[4rem] ">
          <h1 className="text-[5vw]">WHAT I'VE DONE</h1>{" "}
          <p className="text-[1rem] font-thin">(more coming soon)</p>
        </div>
      </div>
      <div className="bg-white p-[8vw] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[6vh] relative">
        {sites.map((site, index) => {
          return (
            <div
              key={index}
              className="shadow-md relative overflow-hidden group"
            >
              <img src={site.pic} alt="Site image" />

              <div className="absolute bg-black/20  h-full w-full -bottom-10 opacity-0 hover:opacity-100 hover:bottom-0 transition-all duration-500 flex justify-center items-center">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md"
                >
                  VISIT SITE{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
