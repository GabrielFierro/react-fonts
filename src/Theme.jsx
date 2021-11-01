import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#D20000",
		},
		secondary: {
			main: "#d20069",
		},
	},
	typography: {
		h1: {
			fontFamily: "Qahiri",
		},
		subtitle: {
			fontFamily: "Rubik",
		},
	},
});

export default theme;
