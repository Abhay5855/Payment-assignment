import React from "react";
import "./sidebar.css";
import logo from "../../assets/images/sidebar.png";
import arrow from "../../assets/images/downarrow.svg";
import wallet from "../../assets/images/wallet.svg";
import { sidebarItems } from "../../data/data";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__image">
        <section>
          <img src={logo} loading="lazy" alt=".." />
          <div className="sidebar__details">
            <h3>Nishayan</h3>
            <a href="#">Visit store</a>
          </div>
        </section>

        <div className="sidebar__arrow">
          <img src={arrow} loading="lazy" alt="..." />
        </div>
      </div>

      {/* Section */}
      <section className="sidebar__links">
        {sidebarItems?.map((item) => (
          <div
            className={
              item.active
                ? "sidebar__links__data__active"
                : "sidebar__links__data"
            }
          >
            <img src={item.icon} loading="lazy" alt="..." />
            <a href={item.route}>{item.name}</a>
          </div>
        ))}
      </section>

      <section className="sidebar__footer">
        <div>
          <img src={wallet} alt="..." loading="lazy" />

          <div className="wallet__content">
            <h3>Available credits</h3>
            <span>222.10</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
