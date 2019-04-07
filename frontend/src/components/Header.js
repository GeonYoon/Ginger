import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';




class Header extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper brown lighten-2">
                        <Link 
                            to={'/'}
                            className="left brand-logo" 
                        >
                            Ginger
                        </Link>
                        <ul className = "right">
                            <li key='1'><Link to={'/'}>Articles</Link></li>
                            <li key='2'><Link to={'/authorlist'}>Authors</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            );
    }
}


export default Header;