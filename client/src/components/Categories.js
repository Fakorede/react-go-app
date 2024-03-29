import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export default function Categories() {
  let { path } = useRouteMatch();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li><Link to={`${path}/comedy`}>Comedy</Link></li>
        <li><Link to={`${path}/drama`}>Drama</Link></li>
      </ul>
    </div>
  )
}
