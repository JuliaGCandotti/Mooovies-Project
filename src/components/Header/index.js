import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Header.module.css";
import HeaderLinks from "../HeaderLinks";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Mooovies Logo" />
      </Link>
      <nav>
        <HeaderLinks url="./">Home</HeaderLinks>
        <HeaderLinks url="./Favorites">Favorites</HeaderLinks>
        <HeaderLinks url="./Login">Login</HeaderLinks>
      </nav>
    </header>
  );
}
