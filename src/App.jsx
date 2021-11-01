/* Imports for the MaterialUI components */
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/* Import the Theme */
import Theme from "./Theme.jsx";
/* Import the CSS styles */
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<div className="App">
				<header>
					<Typography variant="h1" component="div" gutterBottom color="primary">
						Welcome to halloween
					</Typography>
					<Button variant="contained" color="secondary">
						<Typography variant="subtitle">Ready to go</Typography>
					</Button>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
