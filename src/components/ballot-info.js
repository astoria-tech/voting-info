import React from "react"
import PropTypes from "prop-types"

import "./ballot-info.css"

const BallotInfo = ({ headline }) => {
  return (
    <div className="ballot-info">
      <h2 className="ballot-info__headline">{headline}</h2>
      <div className="ballot-info__body">
        <iframe
          id="etp-iframe"
          src="http://onyourballot.vote411.org/build.do"
          title="Build your personalized ballot"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}

BallotInfo.propTypes = {
  headline: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submit: PropTypes.string.isRequired,
}

/*
  <iframe
    id="etp-iframe"
    sandbox="allow-scripts allow-same-origin allow-popups"
    src="https://onyourballot.vote411.org/build.do?q=34-30+42nd+St+Long+Island+City+New+York+11101&amp;lucky=true"
    title="Build your personalized ballot"
    width="100%"
    scrolling="no"
    style="overflow: hidden; height: 342px;"
  >
  </iframe>
*/

export default BallotInfo
