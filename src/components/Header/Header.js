import React, { Component } from "react";
import './Header.scss';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return <header className="header">
						<a className="header__logo" href="/">
							<img src={logo} alt="logo" />
						</a>
                        <ul>
                            <li>
                                <a className="" href="#">sing in</a>
                            </li>
                            <li>
                                <a className="" href="#">login</a>
                            </li>
                        </ul>
					</header>;
    }
}

export default Header;