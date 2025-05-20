import styles from "./styles/Navbar.module.scss";
import { favouriteIcon, movieIcon, searchIcon } from "../../../utils/icons";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className={`${styles.navbar}`}>
      <div className={`${styles.navbar__content} container`}>
        <h4 className={`${styles.navbar__logo}`}>Movies App</h4>
        <nav aria-label="Main navigation">
          <ul className={`${styles.navbar__links}`}>
            <NavLink href="/" className={`${styles.navbar__links__item}`}>
              <span>{movieIcon}</span>
              Home
            </NavLink>
            <NavLink href="/search" className={`${styles.navbar__links__item}`}>
              <span>{searchIcon}</span>
              Search
            </NavLink>
            <NavLink
              href="/favourite"
              className={`${styles.navbar__links__item}`}
            >
              <span>{favouriteIcon}</span>
              Favourite
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
