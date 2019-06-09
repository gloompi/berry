import * as React from 'react';
import { Link } from 'react-router-dom';
// import FaceBook from '@ui/common/svg/Facebook';
// import LinkedIn from '@ui/common/svg/LinkedIn';
// import Instagram from '@ui/common/svg/Instagram';
// import Twitter from '@ui/common/svg/Twitter';

const Footer: React.SFC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          2019 &copy; Berry
        </div>
        <ul className="footer__middle">
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">Trade</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">FaQ</Link>
          </li>
        </ul>
        <ul className="footer__social-list">
          {/* <li className="footer__social-item">
            <FaceBook width={25}/>
          </li>
          <li className="footer__social-item">
            <LinkedIn width={25}/>
          </li>
          <li className="footer__social-item">
            <Instagram width={25}/>
          </li>
          <li className="footer__social-item">
            <Twitter width={25}/>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
