import React, { useState, useContext } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaSignOutAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Data } from './Data'
import { UserContext } from '../context/User';
import './style.css'

export const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onClickLogout = async () => {
        try {
            const removeToken = sessionStorage.removeItem('x-auth-token');
            sessionStorage.clear();
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div>
                <Navbar id='header'>
                    <Nav><button aria-label='Menu Lateral' data-testid='sidebar' className='btn btn btn-outline-dark text-white' onClick={showSidebar}><FaBars /></button></Nav>
                    <Navbar.Brand href="/" className='mx-2 text-white' aria-label='SIGUS' data-testid='sigus-logo'>SIGUS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <button aria-label='Sair do Sistema' data-testid='logout' className='btn btn btn-danger' onClick={onClickLogout}>
                                <FaSignOutAlt className='mx-2' />Sair
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div id="main">
                <Container>
                    <div className='card o-hidden border-3 shadow-lg my-5'>
                        <div div className='card-body p-0' data-testid='outlet'>
                            <Outlet />
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars' aria-label='Fechar Menu Lateral' data-testid='sidebar-close'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {Data.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} aria-label={`${item.title}`} data-testid='sidebar-item'>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}
