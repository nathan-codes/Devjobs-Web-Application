import "./Navbar.css";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";

// Theme Functions
const setDarkMode = () => {
  document.querySelector("body").setAttribute("data-theme", "dark");
  localStorage.setItem("selectedTheme", "dark");
};

const setLightMode = () => {
  document.querySelector("body").setAttribute("data-theme", "light");
  localStorage.setItem("selectedTheme", "light");
};

const selectedTheme = localStorage.getItem("selectedTheme");

if (selectedTheme === "dark") {
  setDarkMode();
}


const toggleTheme = (evt) =>
  evt.target.checked ? setDarkMode() : setLightMode();

// Theme toogle switch button from material UI
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#5964E0",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "green" : "#FFFFFF",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    color: "#5964E0",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,

    backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
    boxSizing: "border-box",
  },
}));

function Navbar() {
  return (
    <nav className="navbar px-2 py-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          devjobs
        </a>
        <span className="">
          <Stack direction="row" spacing={1} alignItems="center">
            <img src={sunIcon} alt="light-theme" />
            <AntSwitch
              onChange={toggleTheme}
              defaultChecked={selectedTheme === "dark"}
              inputProps={{ "aria-label": "ant design" }}
            />
            <img src={moonIcon} alt="dark-theme" />
          </Stack>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
