import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from './Table';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <header>
          <button className="btn-add">Add new</button>
          <div className="filters">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Tags" />
          </div>
        </header>
        <Table />
        <div className="pagination">
          <button>Phân phân trang</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
