import { Routes, Route } from "react-router";
import Today from "./pages/today";
import Add from "./pages/add";
import History from "./pages/history";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Today />} />
      <Route path="/add" element={<Add />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default App;
