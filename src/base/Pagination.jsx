import React from "react";
import "./Pagination.css";
import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-button">
        <img src={prev} />
        Previous
      </div>
      <div className={`page-number ${false ? "active" : "normal"}`}>1</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>...</div>
      <div className={`page-number ${true ? "active" : "normal"}`}>10</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>11</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>12</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>13</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>14</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>15</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>16</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>17</div>
      <div className={`page-number ${false ? "active" : "normal"}`}>18</div>
      <div className="pagination-button">
        Next
        <img src={next} />
      </div>
    </div>
  );
};

export default Pagination;
