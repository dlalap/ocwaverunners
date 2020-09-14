import React, { useLayoutEffect, useState } from "react"
// import anime from "animejs/lib/anime.es.js"
import Anime, { anime } from "react-anime"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import BarContent from "../components/runwithus/barContent"
import "./style.css"

var updates = 0
// var progressLogEl = new Object()
// var updateLogEl = new Object()

const LongPage = styled.div`
  height: 100vh;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AnimationFrame = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(1px);
  overflow: hidden;
  @media (max-width: 767.98px) {
    transform: translateX(${props => props.mobileTranslateX}px);
  }
`

const BarCollection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bar = styled.div`
  background-color: #fff;
  height: 10px;
  width: 100px;
  border-radius: 5px;
`

const Pointer = styled.div`
  height: 200px;
  width: 1px;
  background-color: #fff;
`

const AnimeTest = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [windowPosition, setWindowPosition] = useState(0)
  const [mobileXPosition, setMobileXPosition] = useState(0)
  useLayoutEffect(() => {
    const updatePosition = () => {
      if (window === "undefined") {
        return
      }
      let offset = window.pageYOffset
      setWindowPosition(offset)
      offset = offset - 880
      offset = offset / 9.5
      offset = Math.round(offset, 2)
      offset = Math.max(offset, 0)
      offset = Math.min(offset, 410)
      setScrollPosition(offset)

      offset = -1 * offset + 200
      setMobileXPosition(offset)
    }
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  // anime({
  //   targets: ".update-demo .el",
  //   direction: "linear",
  //   easing: "easeInOutCirc",
  //   update: function (anim) {
  //     updates++
  //     // progressLogEl.value = "progress : " + Math.round(anim.progress) + "%"
  //     // updateLogEl.value = "updates : " + updates
  //   },
  // })

  // anime({
  //   targets: ".anime-target",
  //   translateX: `${scrollPosition}px`,
  //   // easing: "easeInOutQuad",
  //   update: function (anim) {
  //     updates++
  //     // progressLogEl.value = "progress : " + Math.round(anim.progress) + "%"
  //     // updateLogEl.value = "updates : " + updates
  //   },
  // })

  return (
    <Controller>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <Scene
        duration="500%"
        pin={true}
        enabled={true}
        triggerHook={0}
        pushFollowers={false}
      >
        <LongPage className="update-demo">
          <h1>Our 5K Boot Camp Run Structure</h1>
          <AnimationFrame mobileTranslateX={mobileXPosition}>
            <Pointer
              className="anime-target"
              style={{ transform: `translateX(${scrollPosition}px)` }}
            >
              <h2 style={{ marginLeft: "20px" }}>
                ~{(scrollPosition / 132.25).toFixed(2)} miles
              </h2>
            </Pointer>
            <BarCollection>
              <BarContent label="Start" progress={scrollPosition} />
              <Bar />
              <BarContent
                label="Exercise Stop 1"
                progress={Math.max(scrollPosition - 105, 0)}
                length={2}
              />
              <Bar />
              <BarContent
                label="Exercise Stop 2"
                progress={Math.max(scrollPosition - 206, 0)}
                length={2}
              />
              <Bar />
              <BarContent
                label="Exercise Stop 3"
                progress={Math.max(scrollPosition - 307, 0)}
                length={2}
              />
              <Bar />
              <BarContent
                label="Beers"
                progress={Math.max(scrollPosition - 400, 0)}
              />
            </BarCollection>
          </AnimationFrame>
        </LongPage>
      </Scene>
    </Controller>
  )
}

export default AnimeTest
