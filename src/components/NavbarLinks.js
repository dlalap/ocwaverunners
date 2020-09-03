import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");
  font-family: "Jost", sans-serif;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #30c8ff;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #30c8ff;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 200;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/runwithus">Run With Us</NavItem>
      <NavItem to="/wavestore">Shop Apparel</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="https://instagram.com/ocwaverunners/">Instagram</NavItem>
    </>
  )
}

export default NavbarLinks
