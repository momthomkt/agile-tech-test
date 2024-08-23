import './Header.scss'
import { useLocation, Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from "../../resources/images/logo.svg"

import URL_CONST from '../../constants/URL_const';

const Header = () => {
  const location = useLocation();
  return (
    <header className="main">
      <div className="hbox">
        {/* <div className="logo">
          <span className="logo-circle"></span>
          <span className="logo-bar"></span>
        </div> */}
        <div className="logo-container">
          <Link to={`${URL_CONST.HOME}`}>
            <Logo />
          </Link>
        </div>
        {location.pathname !== URL_CONST.SIGIN ?
          <Link to={`${URL_CONST.SIGIN}`}>
          <button className="btn-header sign-in-btn">
            Sign In
          </button>
          </Link>
          : <></>
        }
        
        {/* <button className="btn-header profile-btn">
          Profile
        </button>
        <button className="btn-header logout-btn">
          Logout
        </button> */}
      </div>
      </header>
  )
}

export default Header