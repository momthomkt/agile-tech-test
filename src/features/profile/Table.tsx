import React from 'react';
import './Table.scss';

const Table: React.FC = () => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>ABC</td>
            <td>Description</td>
            <td>HTML, CSS</td>
            <td>
              <button className="btn-edit">✏️</button>
              <button className="btn-delete">🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
