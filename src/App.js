import "./App.css";
import AppState from "./context/AppState";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppState>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={<Login/>}
              />
            </Routes>
          </BrowserRouter>
      </AppState>
    </>
  );
}

export default App;
