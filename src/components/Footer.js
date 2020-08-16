import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Svg = styled.span`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  background-image: url("http://127.0.0.1:5500/src/images/instagram-new-outline.svg");
`

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    filter: invert(27%) sepia(100%) saturate(2878%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
    transition: all 1s ease-in;
  }
`

const Footer = () => {
  return (
    <footer>
      <FooterLink to="https://www.instagram.com/ocwaverunners">
        <h3 className="footer-ig">Find us on Instagram.</h3>
        <Svg />
      </FooterLink>
    </footer>
  )
}

export default Footer
