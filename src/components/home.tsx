import bg from "../assets/bg.jpg";

function Home() {
  return (
    <>
      <div className="bg-black">
        <div
          className="text-3xl text-yellow-600 min-h-screen bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            opacity: "0.2",
          }}
        >
          init
        </div>
      </div>
    </>
  );
}

export default Home;
