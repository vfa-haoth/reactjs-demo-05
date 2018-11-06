import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menu = [
    {
        name : 'Home',
        to : '/',
        exact : true
    },
    {
        name : 'About',
        to : '/about',
        exact : false
    },
    {
        name : 'Contact',
        to : '/contact',
        exact : false
    },
    {
        name : 'Products',
        to : '/products',
        exact : false
    },
    {
        name : 'Sign in',
        to : '/signin',
        exact : false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link 
                            to={to} 
                            className="my-link"
                        >
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        { this.showMenu(menu) }
                    </ul>
                </nav>
            </div>
        );
    }

    showMenu = (menus) => {
        var result = null;

        if(menu.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }

        return result;
    }
}

export default Menu;
