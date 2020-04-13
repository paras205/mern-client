import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo-white.png';
import UserIcon from '../../assets/img/users/default.jpg';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<nav className="nav nav--tours">
					<Link to="/" className="nav__el">
						All tours
					</Link>
					<form className="nav__search">
						<button className="nav__search-btn">Search</button>
						<input type="text" placeholder="Search tours" className="nav__search-input" />
					</form>
				</nav>
				<div className="header__logo">
					<img src={logo} alt="Natours logo" />
				</div>
				<nav className="nav nav--user">
					<a href="#" className="nav__el">
						My bookings
					</a>
					<a href="#" className="nav__el">
						<img src={UserIcon} alt="User photo" className="nav__user-img" />
						<span>Jonas</span>
					</a>
					<button className="nav__el nav__el--cta">Sign up</button>
				</nav>
			</header>
		);
	}
}
export default Header;
