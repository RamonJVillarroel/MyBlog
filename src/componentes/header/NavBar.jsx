import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const categories = [
        { name: "inicio", id: 0, route: "/" },
    ];
    return (
        <header>
            <div className='menu bg-neutral-700'>
                <h1 className='letramenu text-teal-400 '>Mi Blog</h1>
                {categories.map((category) => <NavLink key={category.id} className="letranav text-teal-400" to={category.route}>{category.name}</NavLink>)}
            </div>
        </header>
    )
}
export default NavBar