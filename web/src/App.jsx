import "./App.css";
import { Routes, Route } from "react-router-dom"; // Corrected import
import { routesConfig } from "./routes/routesConfig";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {routesConfig.map((route) => {
          return <Route key={route.name} path={route.path} element={route.component} />;
        })}
      </Routes>
    </>
  );
}

export default App;
