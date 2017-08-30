import React, { Component } from 'react'

export default function StarRating(props) {
  let count = props.stars
  let starSpans = ''

  while (count > 0) {

    starSpans += '☆'
    count--
  }

  return (
    <span>
      {starSpans}
    </span>
  )
}
