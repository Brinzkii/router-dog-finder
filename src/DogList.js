import React from 'react'
import {Link} from 'react-router-dom'
import uuid from 'react-uuid'
import './DogList.css'

function DogList({dogs}) {
    return (
        <ul className='DogList'>
            { dogs.map(d => 
                <li key={uuid()} className='DogList-item'>
                    <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                    <br/>
                    <img src={d.src}/>
                </li>) 
            }
        </ul>
    )
}

export default DogList