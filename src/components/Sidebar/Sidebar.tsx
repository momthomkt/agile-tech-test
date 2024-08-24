// import { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import './Sidebar.scss';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 1024) {
//         setIsOpen(false);
//       } else {
//         setIsOpen(true);
//       }
//     };

//     handleResize();

//     // Gắn hàm handleResize vào sự kiện resize của window
//     window.addEventListener('resize', handleResize);

//     // Dọn dẹp sự kiện khi component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className='sidebar-container'>
//       <div className="toggle-btn" onClick={toggleSidebar}>
//         {/* {isOpen ? <FaArrowLeft /> : <FaArrowRight />} */}
//         {isOpen ? <GoChevronLeft /> : <GoChevronRight />}
//       </div>
//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <nav className="menu">
//           <a href="#">Posts</a>
//           <a href="#">Logout</a>
//         </nav>
//       </div>
//     </div>
    
//   );
// };

// export default Sidebar;


import { useState, useEffect } from 'react';
import { useLocation, useNavigate ,Link } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { ReactComponent as Logo } from "../../resources/images/logo.svg"
import URL_CONST from '../../constants/URL_const';
import { useAppDispatch } from '../../app/hook';
import { logoutUser } from '../../services/authService';
import './Sidebar.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser(navigate))
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

      <div className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <GoChevronLeft /> : <GoChevronRight />}
      </div>

      <nav className="menu">
        <div className="logo-container">
          <Link to={`${URL_CONST.HOME}`}>
            <Logo className='logo' style={{width: '49px', height: '35px'}} />
          </Link>
        </div>
        <div className='nav-action'>Posts</div>
        <div className='nav-action' onClick={handleLogout}>Logout</div>
      </nav>
    </div>
  );
};

export default Sidebar;
