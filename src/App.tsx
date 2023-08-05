import { Routes, Route } from "react-router";
import Home from "./components/home";
import Header from "./components/header";

function App() {
  return (
    <div className="">
      <div className="fixed z-20 top-0 right-0 left-0">
        <Header />
      </div>
      <div className="mt-[10vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
