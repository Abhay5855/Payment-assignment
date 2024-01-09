import React from "react";
import "./navbar.css";
import works from "../../assets/images/works.svg";
import Search from "../../base/Search";
import menu from "../../assets/images/Menu.svg";
import dropdown from "../../assets/images/dropdown.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="payment__first">
        <div>
          <span className="payment__heading">payments</span>
        </div>
        <div className="works">
          <img src={works} loading="lazy" alt="..." />
          <span className="payment__works">how it works</span>
        </div>
      </div>

      <div className="payment__search">
        <Search
          placeholder="Search features, tutorials, etc."
          className="nav__search"
        />
      </div>

      <div className="payment__menu">
        <div>
          <img src={menu} loading="lazy" alt="..." />
        </div>
        <div>
          <img src={dropdown} loading="lazy" alt="..." />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
