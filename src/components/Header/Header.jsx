import mainLogo from "../../assets/mainLogo.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <img src={mainLogo} alt="mainLogo" />
      <form>
        <input type="text" placeholder="Введите запрос" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      </form>
    </header>
  );
};

export default Header;
