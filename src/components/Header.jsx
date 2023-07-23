import Navbar from "./Navbar";
import "./Header.css";
import SearchInput from "./searchInput";

function Header({ onSearch }) {
  return (
    <header className="Header">
      <Navbar />
      <SearchInput onSearch={onSearch} />
    </header>
  );
}

export default Header;
