import * as React from 'react';
import { Link } from 'react-router-dom';
import { compose, lifecycle, withState } from 'recompose';

import { IProps, IHandlers, IState } from './types';

import logo from '@src/utils/logo';

import './style.scss';

const headerRef = React.createRef<any>();

const Header: React.SFC<IProps> = ({ headerIsActive }) => {
  const [menuIsActive, setMenuState] = React.useState(false);
  const handleClick = () => setMenuState(!menuIsActive);
  return (
    <header ref={headerRef} className={`header ${Boolean(headerIsActive) ? 'active' : ''}`}>
      <Link to="/" className="header__logo">
        <div className="header__logo-img">
          {logo(Boolean(headerIsActive) ? '#3c3950' : '#fff', '28')}
        </div>
        <h3>Berry</h3>
      </Link>
      <div className="header__menu">
        <button
          className={`header__menu-btn ${menuIsActive ? 'active' : ''}`}
          onClick={handleClick}
          type="button"
        >
          <span />
        </button>
        <ul className={`header__menu-list ${menuIsActive ? 'active' : ''}`}>
          <li className="header__menu-item">
            <Link to="">Home</Link>
          </li>
          <li className="header__menu-item">
            <Link to="">Page 2</Link>
          </li>
          <li className="header__menu-item">
            <Link to="">Page 3</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default compose<IProps, IHandlers>(
  withState('headerIsActive', 'setHeaderState', false),
  lifecycle<IProps, IState>({
    componentDidMount() {
      window.addEventListener('scroll', (e: any) => {
        const { headerIsActive, setHeaderState } = this.props;

        if (!setHeaderState) return null;
        if (headerRef.current.scrollHeight < e.target.scrollingElement.scrollTop) {
          if (!Boolean(headerIsActive)) {
            setHeaderState(true);
          }
        } else {
          if (Boolean(headerIsActive)) {
            setHeaderState(false);
          }
        }
      });
    }
  })
)(Header);
