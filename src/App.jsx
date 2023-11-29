import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe"
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="divider"/>
      <AboutMe />
    </>
  );
}

export default App;
