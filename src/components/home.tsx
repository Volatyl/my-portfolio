import bg from "../assets/bg.jpg";
import Socials from "./socials";

function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, opacity: "0.2" }}
      ></div>
      <div className="relative z-10 text-center text-white p-20">
        <div className="mt-20">
          <h1 className="text-[8vw] font-light">HI, I'M KENNEDY</h1>
          <p className="mt-2 tracking-[0.52rem]">Fullstack Developer</p>
          {/* <div className="left my-5 md:my-0 bg-white p-20">MY PICTURE</div> */}
        </div>
        <div>{/* <Socials /> */}</div>
      </div>
    </div>
  );
}

export default Home;
