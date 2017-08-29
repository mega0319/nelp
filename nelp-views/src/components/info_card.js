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
        <h4> Rating: {props.properties.rating} </h4>
        <h4> Price: {props.properties.price} </h4>
        <h4> Phone: {props.properties.display_phone} </h4>
        <h5> {props.properties.location.address1}</h5>
        <h5> {props.properties.location.city}</h5>
        <h5> {props.properties.location.zip_code}</h5>
        <a className='link-button' href={props.properties.url} target='_blank'>Website</a>
      </div>
    </div>
  )
}
