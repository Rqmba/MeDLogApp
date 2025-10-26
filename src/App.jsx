import { Routes, Route } from "react-router";
import HomePage from "./pages/homepage";
import History from "./pages/history";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default App;
