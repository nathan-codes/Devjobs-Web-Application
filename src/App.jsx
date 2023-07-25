import "./App.css";
import Header from "./components/Header";
import CardGroup from "./components/CardGroup";
import DetailsPage from "./components/pages/DetailsPage";
import { useState } from "react";
import developerData from "./data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onSearch={handleSearch} />
              <CardGroup devData={developerData} searchTerm={searchTerm} />
            </>
          }
        ></Route>

        <Route path="/detailspage/:id" element={<DetailsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
