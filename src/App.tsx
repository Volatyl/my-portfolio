import { Routes, Route } from "react-router";
import Home from "./components/home";
import Header from "./components/header";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import NotFound from "./components/notfound";

function App() {
  return (
    <div className="">
      <div className="fixed z-20 top-0 right-0 left-0">
        <Header />
      </div>
      <div className="mt-[11vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
