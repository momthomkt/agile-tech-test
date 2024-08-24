import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar-container'>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* <div className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div> */}
      <nav className="menu">
        <a href="#">Posts</a>
        <a href="#">Logout</a>
      </nav>
    </div>
    </div>
    
  );
};

export default Sidebar;
