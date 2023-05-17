import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import RTLogo from "../app/assets/images/white_logo_512x512.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="primary"  expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={RTLogo} alt="root and terra logo" className="float-start" />
      </NavbarBrand>

        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="mx-auto mt-2 " navbar>

            <NavItem>
              
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/products">
                <i className="fa fa-list fa-lg" /> Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <i className="fa fa-address-card fa-lg" /> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      
    </Navbar>
  );
};

export default Header;
