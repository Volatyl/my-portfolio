import bg from "../assets/bg.jpg";

function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, opacity: "0.2" }}
      ></div>
      <div className="relative z-10 text-center text-white p-20">
        <h1 className="text-3xl font-bold">WELCOME TO MY PORTFOLIO</h1>
        <p className="mt-2">
          This is an example of white text on a background image with opacity.
        </p>
      </div>
    </div>
  );
}

export default Home;
