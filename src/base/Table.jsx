import React from "react";
import "./table.css";
import { columns, rows } from "../data/data";

const Table = () => {
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <div className="responsive_table__header">
                  {column.name}
                  {column.icon && <img src={column.icon} alt="icon" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="table__id">{row.id}</td>
              <td className="table__date">{row.date}</td>
              <td className="table__date">{row.amount}</td>
              <td className="table__date">{row.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
