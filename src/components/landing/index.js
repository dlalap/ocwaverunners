import React from "react"
import Logo from "../../images/wrhorizontal_white.png"
import Video from "../../video/ocwaverunners.webm"
import GroupImg from "../../images/group.jpg"

const Landing = () => {
  return (
    <div className="landing">
      <img
        className="landing-image"
        src={Logo}
        alt="Wave Runners Logo"
        width="500vw"
      />

      <div className="landing-parallax">
        <video
          className="video-player"
          height="100%"
          width="100%"
          loop
          muted
          autoPlay
          poster={GroupImg}
        >
          <source src={Video} type="video/webm" />
        </video>
      </div>
    </div>
  )
}

export default Landing
