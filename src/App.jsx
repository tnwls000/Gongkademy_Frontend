import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import AppRouter from "@router/AppRouter";
import { LoginProvider } from "./contexts/LoginContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginProvider>
        <Header />
        <Outlet />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
