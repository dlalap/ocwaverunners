import React from "react"
import styled from "styled-components"
import WaveLogo from "../images/waves.svg"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Svg = styled.span`
  display: inline-block;
  width: 48px;
  height: 48px;
  background-image: url(${WaveLogo});

  :hover,
  :focus {
    filter: invert(27%) sepia(100%) saturate(2878%) hue-rotate(346deg)
      brightness(104%) contrast(97%);
    transition: all 0.4s ease-in;
  }
`

const Logo = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "waves" }, extension: { eq: "svg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 50, pngQuality: 80) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(data.file)

  return (
    <LogoWrap as={Link} to="/">
      {/* <svg src={WaveLogo} alt="logo" className="svg-logo" /> */}
      <Svg className="svg-logo" />
    </LogoWrap>
  )
}

export default Logo
