import React from "react"
// import Logo from "../../images/wrhorizontal_white.png"
// import Video from "../../video/ocwaverunners.webm"

const Landing = () => {
  return (
    <div className="landing">
      <img
        className="landing-image"
        src="/wrhorizontal_white.png"
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
        >
          <source src="/video/ocwaverunners.webm" type="video/webm" />
        </video>
      </div>
    </div>
  )
}

export default Landing
