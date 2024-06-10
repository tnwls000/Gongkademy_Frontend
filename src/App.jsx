import Header from "./components/header/Header";
import { LoginProvider } from "./contexts/LoginContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <LoginProvider>
      <Header />
      <Outlet />
    </LoginProvider>
  );
}

export default App;
