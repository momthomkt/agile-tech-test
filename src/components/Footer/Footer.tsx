import './Footer.scss'
import { ReactComponent as Logo } from "../../resources/images/logo.svg"
import { ReactComponent as Message } from "../../resources/images/message.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="hbox">
        <div className="row-up">
          <div className="footer-contact">
            <div className="title">
              <Logo />
              <h3 className="name">
                DataWarehouse
              </h3>
            </div>
            <div className="text-up">
              <h4>Warehouse Society, 234</h4>
              <h4>Bahagia Ave Street PRBW 29281</h4>
            </div>
            <div className="text-down">
              <div className="email">
                info@warehouse.project
              </div>
              <div className="phone">
                1-232-3434 (Main)
              </div>
            </div>
          </div>
          <div className="footer-mid">
            <h4 className='title'>About</h4>
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">DW News</a></li>
            </ul>
          </div>
          <div className="footer-mid">
            <h4 className='title'>Help</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Sign up</a></li>
              <li><a href="#">Guide</a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Q&A</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h4 className='title'>Social Media</h4>
              <ul>
                <li><a href="#"><span className="circle"></span></a></li>
                <li><a href="#"><span className="circle"></span></a></li>
                <li><a href="#"><span className="circle"></span></a></li>
              </ul>
          </div>
        </div>
        <div className="row-dow">
          <div className="copyright">
            <div>© Datawarehouse™, 2020. All rights reserved.</div>
            <div>Company Registration Number: 21479524.</div>
          </div>
          <div className="message">
            <Message />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer