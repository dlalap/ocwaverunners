// @flow
import React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import "./style.css"

const StickyStyled = styled.div`
  .section {
    height: 300vh;
  }

  .sticky {
    display: flex;
    background-color: red;
    width: 100%;
    & div {
      padding: 30px;
    }
  }

  .blue {
    background-color: blue;
  }
`

const Sticky = () => (
  <StickyStyled>
    <div className="section" />
    <Controller>
      <Scene pin={true} enabled={true} indicators={true} triggerHook="onLeave">
        <div className="sticky">
          <div>Pin Test</div>
        </div>
      </Scene>
    </Controller>
    <div className="section" />
  </StickyStyled>
)

export default Sticky
