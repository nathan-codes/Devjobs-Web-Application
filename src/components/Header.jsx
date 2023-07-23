import Navbar from "./Navbar";
import SearchInput from "./SearchInput";
import "./Header.css";



function Header({ onSearch }) {
  return (
    <header className="Header">
      <Navbar />
      <SearchInput onSearch={onSearch} />
    </header>
  );
}

export default Header;
