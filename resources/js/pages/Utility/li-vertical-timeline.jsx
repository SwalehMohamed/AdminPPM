import PropTypes from 'prop-types'
import React from "react"

const LiVerticalTimeline = props => {
  return (
    <React.Fragment>
      <li className="event-list">
        <div className="event-timeline-dot">
          <i
            className={
              props.status.id === 3
                ? "fab fa-right-arrow-circle fa-fade-right"
                : "fab fa-right-arrow-circle"
            }
          />
        </div>
        <div className="d-flex">
          <div className="me-3">
            <i
              className={"fa " + props.status.iconClass + " h2 text-primary"}
            />
          </div>
          <div className="flex-grow-1">
            <div>
              <h5>{props.status.stausTitle}</h5>
              <p className="text-muted">{props.status.description}</p>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  )
}

LiVerticalTimeline.propTypes = {
  status: PropTypes.object
}

export default LiVerticalTimeline
