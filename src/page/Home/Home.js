import React from 'react'
import './Home.css'
import Data from '../../context/Data'
import { Link } from 'react-router-dom'
export default function Home() {
    let cards = Data.map(e=>{
        return (
            <div key={e.id} className='card'>
           <Link to={"/animal/"+e.id}>
           <img src={e.poster} alt="posterimage"/>
            <span>{e.title}</span>
           </Link>
          </div>
        )
    })
  return (
    <div className='home'>
      <section className='herosection'>
        <h1>Welcome to the AnimalPlanet</h1>
      </section>
      <section className='cardsection'>
        {cards}
      </section>
    </div>
  )
}
