import { Link } from "react-router-dom";

import logo from "../assets/main-logo.png";

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ backgroundColor: "pink", display: "inline-block" }}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul style={{ display: "flex", gap: "2rem" }}>
        <li>
          <Link to={"/"}> home</Link>
        </li>
        <li>
          <Link to={"/overview"}>overview</Link>
        </li>
        <li>
          <Link to={"/video"}> video</Link>
        </li>
        <li>
          <Link to={"/reviews"}> reviews</Link>
        </li>
        <li>
          <Link to={"/faqs"}> FAQs</Link>
        </li>
        <li>
          <Link to={"/collection"}> collection</Link>
        </li>
        <li>
          <Link to={"/newslater"}> newslater</Link>
        </li>
      </ul>
    </div>
  );
}
