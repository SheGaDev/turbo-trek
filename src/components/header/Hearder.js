import Navigation from "components/navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-wrapper">
      <Link to="/">
        <span className="logo">
          Turbo<span className="sub-logo">Trek</span>
        </span>
      </Link>
      <Navigation />
    </header>
  );
}
