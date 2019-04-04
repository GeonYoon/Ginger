import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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
                    </div>
                </nav>
            </div>
            );
    }
}


export default Header;