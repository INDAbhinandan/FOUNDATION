import React from 'react'

const Hw = (props) => {
  return (
    <div className='main'>
<div className="upper">
    <img src={props.img} alt="image here" />
    <button>save</button>
</div>

<div className="middle">
    <h2>{props.Cname} &nbsp;</h2>
    <span>{props.date}</span>
    <h1>{props.profile}</h1>
</div>

<div className="middle2">
    <button>{props.key1}</button>
  <button>{props.key2}</button>
</div>

<div className="down">
    <h1>{props.pay}</h1>
    <button>Apply Now</button>
</div>
  <p>{props.loc}</p>
    </div>
  )
}

export default Hw