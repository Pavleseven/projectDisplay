import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import "./styles/main.css";
import { ApplicationProvider } from "./context";
import { useEffect, useState } from "react";
import { getData } from "./helpers";
import { Routes, Route } from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getData(setProjects);
  }, []);

  return (
    <ApplicationProvider value={{ projects, setProjects }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </ApplicationProvider>
  );
}

export default App;
