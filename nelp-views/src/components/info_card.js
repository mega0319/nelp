import React from 'react'
import StarRating from './star_rating'
import '../styles/info_card.css'

export default function InfoCard(props) {

  return(
    <div className="animated slideInRight info-card">
      <div className="info-image">
        <img src={props.properties.image_url} height='200' width='300'/>
      </div>
      <div className="info-details">
        <h2 className="info-title"> {props.properties.name} </h2>
        <h3> Rating: <StarRating stars={props.properties.rating}/> </h3>
        <h3> Price: <n className="price"> {props.properties.price} </n> </h3>
        <h3> Phone: {props.properties.display_phone} </h3>
        <h5> {props.properties.location.address1}, {props.properties.location.city}, {props.properties.location.zip_code}</h5> <br/>
        <a className='link-button' href={props.properties.url} target='_blank'>Website</a>
      </div>
    </div>
  )
}
