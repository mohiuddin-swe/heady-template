import { Link, useLocation } from "react-router-dom";

import "./css/Navbar.css";
import logo from "../assets/main-logo.png";

const navItems = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "overview",
    path: "/overview",
  },
  {
    id: 3,
    name: "video",
    path: "/video",
  },
  {
    id: 4,
    name: "reviews",
    path: "/reviews",
  },
  {
    id: 5,
    name: "collection",
    path: "/collection",
  },
  {
    id: 6,
    name: "FAQs",
    path: "/faqs",
  },
  {
    id: 7,
    name: "newslater",
    path: "/newslater",
  },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img className="logo_img" src={logo} alt="logo" />
      </Link>

      <ul>
        {navItems.map((item) => (
          <li key={item?.id}>
            <Link
              className={`nav_link ${
                pathname === item?.path ? "active" : "noActive"
              }`}
              to={item?.path}
            >
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
