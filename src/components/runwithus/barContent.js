import React, { useState } from "react"
import styled from "styled-components"
import anime from "animejs/lib/anime.es.js"

const ContentDiv = styled.div`
  border: 1px solid blue;
`

const Content = styled.div`
  width: 100px;
  height: ${props =>
    Math.min(props.height, 10) *
    10 *
    (props.length ? props.length + 1 : 1.25)}px;
  border-left: 2px solid #30c8ff;
  display: flex;
  position: absolute;
  transform: translateY(-50%);
  z-index: -100;
  opacity: ${props => Math.min(props.height, 10) / 10};
`

const Detail = styled.h4`
  margin-left: 10px;
  display: flex;
  align-items: flex-end;
`

const BarContent = props => {
  return (
    <ContentDiv>
      <Content height={props.progress} length={props.length}>
        <Detail>
          {props.label ? props.label : "Label"}
          {/* {" "}
          {props.progress ? props.progress : ""} */}
        </Detail>
      </Content>
    </ContentDiv>
  )
}

export default BarContent
