import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
