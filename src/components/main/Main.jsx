import React from "react";
import "./main.css";
import month from "../../assets/images/month.svg";
import Search from "../../base/Search";
import sort from "../../assets/images/sort.svg";
import download from "../../assets/images/download.svg";
import Table from "../../base/Table";
import Pagination from "../../base/Pagination";

const Main = () => {
  return (
    <div className="main__container">
      <div className="main__first">
        <div>
          <p className="main__heading">Overview</p>
        </div>
        <div className="main__month">
          <p className="main__month_text">Last Month</p>
          <img src={month} alt="..." loading="lazy" />
        </div>
      </div>

      <div className="main__cards">
        <div className="main__orders">
          <div className="main__orders__text">
            <p>Online orders</p>
          </div>
          <div className="main__money">
            <p>231</p>
          </div>
        </div>

        <div className="main__orders">
          <div className="main__orders__text">
            <p>Amount recieved</p>
          </div>
          <div className="main__money">
            <p>₹ 23,92.312.19</p>
          </div>
        </div>
      </div>

      {/* Tables */}
      <main className="main__table__section">
        <div className="main__transactions">
          <p>Transactions | This Month</p>
        </div>
        <div className="main__filters">
          <div>
            <Search
              placeholder="Search by order ID..."
              className="main__search"
            />
          </div>
          <div className="main__filter">
            <div className="main__sort">
              <p>Sort</p>
              <img src={sort} alt="..." loading="lazy" />
            </div>
            <div className="main__download">
              <img src={download} alt="..." loading="lazy" />
            </div>
          </div>
        </div>
      </main>

      <div>
        <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default Main;
