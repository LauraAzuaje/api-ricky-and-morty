import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css'

export function NavBar() {
    return(
        <>
        <header>
            <ol>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/characters'>Characters</Link>
                </li>
        </ol>
        </header>
        <div>
            <Outlet/>
        </div>
        </>
    );
};