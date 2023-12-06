import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Divider from "./components/Divider/Divider";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Divider />
      <AboutMe />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </>
  );
}

export default App;
