import React from 'react'
import '../styles/info_card.css'

export default function InfoCard(props) {

  return(
    <div className="info-card">
      {props.properties.name}
      <div className="info-image">
        <img src={props.properties.image_url} height='200' width='300'/>
      </div>
      <div className="info-details">
        <h3>
          Rating: {props.properties.rating}
        </h3>
        <h3>
          Price: {props.properties.price}
        </h3>
      </div>
    </div>
  )
}
