import { Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DarkModeToggle() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);
  const headerElement = document.querySelector("header");
  const stackElement = document.querySelector(".stack .subTitle");
  const formationElement = document.querySelector("h3");
  const aboutMeContainerElement = document.querySelector(".borderImgStyle");

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);

    // aboutMeContainerElement.style.borderColor = mode ? "#001F3F" : "#001F3F";

    // document.body.style.backgroundColor = mode ? "#c4d2e7" : "#001F3F";
    // headerElement.style.backgroundColor = mode ? "#001F3F" : "#c4d2e7";
    // formationElement.style.color = mode ? "#001F3F" : "rgb(5, 241, 255)";
    // stackElement.style.color = mode ? "#001F3F" : "rgb(5, 241, 255)";
    // headerElement.style.backgroundImage = mode
    //   ? ""
    //   : "linear-gradient(#001F3F, #001F3F), linear-gradient(283deg, rgb(5, 241, 255) 5%, rgba(5, 178, 255, 0.25) 100%)";
    // headerElement.style.borderColor = mode ? "#001F3F" : "#001F3F";
    // document.body.style.color = mode ? "#000" : "#fff";
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Switch checked={mode} onChange={handleChange} sx={{ top: "-10px" }} />
    </ThemeProvider>
  );
}
