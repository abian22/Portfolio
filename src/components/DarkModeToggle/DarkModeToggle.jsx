import { Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DarkModeToggle() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);
  const headerElement = document.querySelector("header");

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);

    document.body.style.backgroundColor = mode ? "#fff" : "#001F3F"; 
    headerElement.style.backgroundImage = mode
      ? "linear-gradient(#fff, #fff), linear-gradient(283deg, rgb(5, 241, 255) 5%, rgba(5, 178, 255, 0.25) 100%)"
      : "linear-gradient(#001F3F, #001F3F), linear-gradient(283deg, rgb(5, 241, 255) 5%, rgba(5, 178, 255, 0.25) 100%)";

    headerElement.style.color = mode ? "#fff" : "#333";
    document.body.style.color = mode ? "#000" : "#fff"; 
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Switch checked={mode} onChange={handleChange} sx={{ top: "-10px" }} />
    </ThemeProvider>
  );
}
