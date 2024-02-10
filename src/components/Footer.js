import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd foot-center">
            <h4>Our Site</h4>
            <Link className="block" to="/">Home</Link>
            <Link className="block" to="/about">About Us</Link>
            <Link className="block" to="/menu">Our Menu</Link>
            <Link className="block" to="/reserve">Book a Table</Link>
          </div>
          <div className="col-full col-half col-3rd foot-center">
            <h4>Get In Touch!</h4>
            <address>
              44 Testing Street
              <br />
              Chicago, IL, 60007
            </address>
            <a className="footer-block" href="Phone: +13243546678">
              908&#41;&nbsp;231&#45;1122
            </a>
            <br />
            <a className="footer-block" href="Our Email: support@littlelemon.org">
              support@littlelemon.org
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2024 Meta Front End UX/UI Capstone </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
