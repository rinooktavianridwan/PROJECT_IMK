// NavbarComponent.jsx

import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { navLinks, popUpNav } from "../data/index";
import { NavLink } from "react-router-dom";
import PopUpComponent from "./PopUpComponent";

const NavbarComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState([]);

  const handlePopupToggle = (linkId) => {
    const selectedPopupData = popUpNav.filter((popup) => popup.id === linkId);

    if (selectedPopupData[0] === popupData[0]) {
      setShowPopup(false);
      setPopupData([]);
    } else {
      setPopupData(selectedPopupData);
      setShowPopup(true);
    }
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".popUpBar") &&
      !event.target.closest(".textLink")
    ) {
      setShowPopup(false);
      setPopupData([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar className="navBar">
        <Container fluid>
          <Nav className="mx-auto">
            {navLinks.map((link) => (
              <div key={link.id} className="navLinkItem">
                {link.Image ? (
                  <NavLink to={link.path}>
                    <div className="logoContainer">
                      <img
                        src={link.Image}
                        alt={link.text}
                        style={link.imageSize}
                        className="logoImage"
                      />
                    </div>
                  </NavLink>
                ) : (
                  <h1
                    onClick={() => handlePopupToggle(link.id)}
                    className="textLink"
                  >
                    {link.text}
                  </h1>
                )}
              </div>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <Navbar className={`popUpBar ${showPopup ? "show" : "hide"}`}>
        {showPopup && (
          <PopUpComponent
            data={popupData}
            closePopup={() => setShowPopup(false)}
          />
        )}
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
