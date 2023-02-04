import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Columns from "./pages/Columns";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Columns></Columns>}></Route>
        <Route path="/kanban-board" element={<Columns />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
