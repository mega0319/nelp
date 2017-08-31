import React, { Component } from 'react'

export default function StarRating(props) {
  let count = 5
  let stars = props.stars
  let starSpans = ''

  while (count > 0) {
    (stars <= 0) ? starSpans += '☆' : starSpans += '★'
    count--
    stars--
  }

  return (
    <span className='star'>
      {starSpans}
    </span>
  )
}
