import React from "react"
import Logo from "../../images/wrhorizontal_white.png"
import Video from "../../video/ocwaverunners.mp4"

const Landing = () => {
  return (
    <div className="landing">
      <img src={Logo} alt="Wave Runners Logo" width="500vw" />

      <div className="landing-parallax">
        <video
          className="video-player"
          height="100%"
          width="100%"
          loop
          muted
          autoPlay
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Landing
