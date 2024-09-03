import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DataContext from '../../context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Menu from "../../assets/images/icons/menu.png"
import Search from "../../assets/images/icons/Search.png"
import Notification from "../../assets/images/icons/Notification.png"
import Avatar from "../../assets/images/icons/Avatar.jpg"
import { FaSortDown } from "react-icons/fa";
import { IoCaretDown } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo_rempic_swan.png';


function NavbarOne() {
    const { isOpen, setIsOpen, isLogedIn, setIsLogedIn } = useContext(DataContext);
    const location = useLocation();

    const toggleClick = () => {
        setIsOpen(!isOpen);
    };
    const toggleLogin = () => {
        setIsLogedIn(true);
    };
    const getLinkClass = (path) => {
        return location.pathname === path ? 'top-navbar-pro-drop-btn active-page-root-css' : 'top-navbar-pro-drop-btn';
    };

    return (
        <div className='top-navbar-banner'>
            <Navbar key="xl" expand="xl">
                <Container fluid={isLogedIn}>
                    {isLogedIn ?
                        <>
                            <button className='bg-transparent border-0' onClick={toggleClick}>
                                <LazyLoadImage className="toggle-button-1" src={Menu} alt="Menu" />
                            </button>

                            <h3 className='top-nav-text-1'>Dashboard</h3>
                        </>
                        :
                        <Navbar.Brand href="/"><LazyLoadImage alt="Logo" src={Logo} /></Navbar.Brand>
                    }
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$xl`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-$xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-$xl`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body>
                            {isLogedIn ?
                                <Nav className='w-100'>
                                    <Nav className="mx-auto top-navbar-search-sec">
                                        <div class="input-group my-auto">
                                            <span class="input-group-text" id="basic-addon1">
                                                <LazyLoadImage src={Search} alt="Search" />
                                            </span>
                                            <input type="text" class="form-control" placeholder="Search type of keywords" />
                                        </div>
                                    </Nav>
                                    <Nav className="align-items-center">
                                        <Nav.Link className=''>
                                            <div className='position-relative notify-active'></div>
                                            <LazyLoadImage className='top-navbar-notify-1' src={Notification} alt="Notification" />
                                        </Nav.Link>
                                        <Nav.Link className='top-navbar-pro-drop-sec'>
                                            <div class="dropdown">
                                                <Link to="/profile">
                                                    <button className={getLinkClass('/profile')} type="button"
                                                    // data-bs-toggle="dropdown" aria-expanded="false"
                                                    >
                                                        <div className='d-flex align-items-center gap-2'>
                                                            <LazyLoadImage className='pro-drop-img-1' src={Avatar} alt="Avatar" />
                                                            <span>Eleanor Pena</span>
                                                            <IoCaretDown className='pro-drop-icon-1' />
                                                        </div>
                                                    </button>
                                                </Link>
                                                {/* <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul> */}
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Nav>
                                :
                                <Nav className='w-100 bef-login-n-sec'>
                                    <Nav className="ms-lg-auto gap-3">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/type">SignIn</a>
                                        </li>
                                        <button className='bef-b-login-1'
                                        // href="/signup"
                                         onClick={toggleLogin}
                                         >
                                            Signup
                                        </button>
                                    </Nav>
                                </Nav>
                            }

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div >
    )
}

export default NavbarOne
