import React, { useState } from 'react'
import "./Actuality.scss"
import { NavLink, Outlet } from 'react-router-dom'
import avatar from '../../../assets/avatars/face-5.jpg'
export default function Actuality() {
  return (
    <div className='actuality'>
      <div className="head-actuality">
        <div className="item">
          <NavLink to="./recentQuestions">Question Recente</NavLink>
        </div>
        <div className="item">
          <NavLink to="./popularQuestions">Populaires</NavLink>
          <NavLink to="/actuality/popularQuestions">Populaires</NavLink>
        </div>
        <div className="item">
          <NavLink to="./MostViewQuestions">Plus visitées</NavLink>
        </div>
      </div>
      <div className="containe-actuality">
        <Outlet />
      </div>
    </div>
  )
}