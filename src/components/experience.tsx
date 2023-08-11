

function Experience() {
  const techs = [
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "REACT JS",
    "PYTHON",
    "FLASK",
    "DJANGO",
    "FAST API",
    "SQL",
    "PHOTOSHOP",
  ];
  return (
    <div className="relative bg-zinc-100 p-[8vw] md:p-20">
      <div className="flex justify-center flex-col text-center">
        <h1 className="text-4xl pb-5 p-5">EXPERIENCE</h1>
        <p className="font-thin text-xl p-5">
          I've been doing web development for about a year now, and I'm always
          eager to learn more in this fast paced industry.
        </p>
        <h2 className="p-5 tracking-[0.2rem]">
          SOME TECHNOLOGIES I HAVE WORKED WITH:
        </h2>
        <ul className=" flex flex-wrap gap-4 justify-center">
    
          {techs.map((tech, index) => {
            return (
              <li
                key={index}
                className="border-[1px] border-zinc-800 rounded-lg py-4 w-40 cursor-pointer hover:bg-orange-500 hover:text-white hover:border-white transition-all duration-300"
              >
                <h1>{tech}</h1>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
