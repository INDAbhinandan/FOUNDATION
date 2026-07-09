import React from 'react'
// import Card from './Components/Card'
// import Greet from './Components/Greet'

import Hw from './Components/Hw'
const arr=[45,99,25,90]

const App = () => {
  return (
   <div className='app'>
    {/* <Hw/>
     <Hw/>
      <Hw/>
       <Hw/> */}

       {arr.map(()=>{
      return <Hw/>
       })}
   </div>
  )

}

export default App



// Card name='Ayushman' jd='12/14/2005' img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'/>
//     <Card name='Salman khan'jd='12/1/2009' img='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D' />
//     <Card name='Messi' jd='10/12/2010' img='https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D'/>