import React from 'react'

const Card = (props) => {
   
    
  return (
    <>
        <div className="Container">
            <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p>You are a Full stack developer at Amazon and you belong to India.
        </p> 
        <p>Joining date:{props.jd}</p>
        <button>View More</button>
        </div>
    </>
  )
}

export default Card