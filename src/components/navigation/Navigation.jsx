import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  console.log(location);

  const navs = [
    { name: "Home", path: "/" },
    { name: "Catalog", path: "/catalog" },
    { name: "Favorites", path: "/favorites" },
  ];
  return (
    <nav>
      <ul className="flex-ul">
        {navs.map((nav, id) => {
          return (
            <li
              key={id}
              className={
                location.pathname === nav.path
                  ? "is-active li-navigation"
                  : "li-navigation"
              }
            >
              <Link className="link" to={nav.path}>
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
