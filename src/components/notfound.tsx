import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center mt-[40vh]">
      <h1 className="text-red-500 text-[6vw] font-bold">404 - Not Found</h1>
      <p className="text-[2vw] text-gray-800">
        The page you're looking for does not exist.
      </p>
      <div className="border-t-[1vw] border-gray-700 mt-[5vh] pt-[5vh]  w-[50vw] flex justify-center">
        <NavLink
          to={"/"}
          className="bg-orange-500 text-white p-3 rounded-md font-semibold px-10 hover:scale-95 hover:bg-orange-400 transition-all duration-300"
        >
          HOME
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
