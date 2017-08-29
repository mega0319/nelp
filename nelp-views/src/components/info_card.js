import React from 'react'
import '../styles/info_card.css'

export default function InfoCard(props) {

  return(
    <li className="info-card">
      {props.properties.name}
      <div className="info-image">
        <img src={props.properties.image_url} height='200' width='200'/>
      </div>
      <div className="info-details">

      </div>
    </li>
  )
}
