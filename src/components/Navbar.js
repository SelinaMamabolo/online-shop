import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Shop from '../Shop';
import Cart from './Cart';
import Signup from './signUp';



const Navbar = () => {
    return (
        <Router>
            <header className="header">
                <nav className="navBar">
                    <a className="logo-nav">WearIt</a>
                    <ul className="menu-nav">
                        <Link className="link-nav" to="/" > Home </Link>
                        <Link className="link-nav" to="/Cart" > Cart </Link>
                        <Link className="link-nav" to="/SingUp" > SignUp </Link>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route exact path="/">
                    <Shop></Shop>
                </Route>
                <Route exact path="/Cart">
                    <Cart></Cart>
                </Route>
                <Route exact path="/SingUp">
                    <Signup></Signup>
                </Route>
            </Switch>
        </Router>

    );
};

export default Navbar;