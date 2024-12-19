import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Details from "./Components/Details";
import SearchResult from "./Components/SearchResult";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:id" element={<Details />} />
            <Route path="search" element={<SearchResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
