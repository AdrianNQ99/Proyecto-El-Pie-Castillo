import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routesConfig } from "./routes/routesConfig";

function App() {
  return (
    <>
      <Routes>
        {routesConfig.map((route) => {
          return <Route key={route.name} path={route.path} element={route.component} />;
        })}
      </Routes>
    </>
  );
}

export default App;
