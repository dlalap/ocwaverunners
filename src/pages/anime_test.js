import React, { useLayoutEffect, useState } from "react"
import anime from "animejs/lib/anime.es.js"
import styled from "styled-components"

var updates = 0
// var progressLogEl = new Object()
// var updateLogEl = new Object()

const LongPage = styled.div`
  height: 300vh;
`

const AnimeTest = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useLayoutEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  anime({
    targets: ".update-demo .el",
    translateY: scrollPosition + 500,
    direction: "linear",
    easing: "easeInOutCirc",
    update: function (anim) {
      updates++
      // progressLogEl.value = "progress : " + Math.round(anim.progress) + "%"
      // updateLogEl.value = "updates : " + updates
    },
  })

  return (
    <LongPage className="update-demo">
      <div className="el">
        <h1>Hi.</h1>
        <h2>{scrollPosition}</h2>
        {/* <h2 className=".time-animation">{progressLogEl}</h2>
        <h2 className=".time-">{updateLogEl}</h2> */}
      </div>
    </LongPage>
  )
}

export default AnimeTest
