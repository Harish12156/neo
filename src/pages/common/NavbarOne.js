import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DataContext from '../../context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Menu from "../../assets/images/menu.png"
import { Button } from 'bootstrap';
function NavbarOne() {
    const { isOpen, setIsOpen } = useContext(DataContext);

    const toggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='top-navbar-banner'>
            <Navbar key="xl" expand="xl">
                <Container fluid>
                    <button className='bg-transparent border-0' onClick={toggleClick}>
                        <LazyLoadImage className="toggle-button-1" src={Menu} alt="Menu" />
                    </button>

                    <h3 className='top-nav-text-1'>Dashboard</h3>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$xl`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-$xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-$xl`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarOne
