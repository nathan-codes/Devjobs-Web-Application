import "./App.css";
// import Header from "./components/Header";
import CardGroup from "./components/CardGroup";
import { useState } from "react";
import developerData from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      {/* <Header onSearch={handleSearch} /> */}
      <CardGroup devData={developerData} searchTerm={searchTerm} />
    </>
  );
}

export default App;
