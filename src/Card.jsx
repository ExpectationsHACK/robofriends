import React from 'react'
import { robots } from './Robots.jsx'
import { getImageUrl } from './utils.jsx'

const Card = ({ robots }) => {
    const  cardProperties = robots.map(robot => 
        <div key={robot.id} className='tc bg-light-green dib br3 pa3 ma3 grow bw2 fl w-20
        shadow-5'>
            <h1>{robot.signature}</h1>
            <img 
               src={getImageUrl(robot)}
               alt={robot.name}
            />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.username}</p>
            </div>

        </div>
        );
    return (
        <div>
            {cardProperties}
        </div>
    )

}


export default Card