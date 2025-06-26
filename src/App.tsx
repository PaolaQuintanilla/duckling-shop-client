import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ListDucks from "./pages/Ducks/ListDucks/ListDucks";
import { AddDuckPage } from "./pages/Ducks/AddDuck/AddDuckPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<ListDucks />} />
          <Route path="/almacen" element={<ListDucks />} />
          <Route path="/almacen/nuevo" element={<AddDuckPage />} />
          <Route
            path="/almacen/editar/:id"
            element={<AddDuckPage editMode />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
