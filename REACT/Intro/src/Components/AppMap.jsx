import React from 'react'
// import Card from './Components/Card'
// import Greet from './Components/Greet'

import Hw from './Hw'
const App = () => {
const jobs = [
  {
    id: 1,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    postedDate: "5 Days Ago",
    jobProfile: "Frontend Engineer",
    keyword1: "Full Time",
    keyword2: "Junior Level",
    payout: "$65/hour",
    location: "Mumbai, India",
  },
  {
    id: 2,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    postedDate: "2 Days Ago",
    jobProfile: "React Developer",
    keyword1: "Full Time",
    keyword2: "Mid Level",
    payout: "$80/hour",
    location: "Bangalore, India",
  },
  {
    id: 3,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    postedDate: "1 Week Ago",
    jobProfile: "Software Engineer",
    keyword1: "Full Time",
    keyword2: "Experienced",
    payout: "$75/hour",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    postedDate: "3 Days Ago",
    jobProfile: "UI Developer",
    keyword1: "Full Time",
    keyword2: "Senior Level",
    payout: "$90/hour",
    location: "Pune, India",
  },
  {
    id: 5,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    postedDate: "Today",
    jobProfile: "Frontend Developer",
    keyword1: "Remote",
    keyword2: "Junior Level",
    payout: "$70/hour",
    location: "Noida, India",
  },
  {
    id: 6,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    postedDate: "4 Days Ago",
    jobProfile: "Web Developer",
    keyword1: "Full Time",
    keyword2: "Entry Level",
    payout: "$55/hour",
    location: "Chennai, India",
  },
  {
    id: 7,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/9/96/Infosys_logo.svg",
    companyName: "Infosys",
    postedDate: "6 Days Ago",
    jobProfile: "JavaScript Developer",
    keyword1: "Hybrid",
    keyword2: "Junior Level",
    payout: "$50/hour",
    location: "Mysore, India",
  },
  {
    id: 8,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_Corporate_logo.svg",
    companyName: "Adobe",
    postedDate: "2 Weeks Ago",
    jobProfile: "UI/UX Engineer",
    keyword1: "Full Time",
    keyword2: "Mid Level",
    payout: "$85/hour",
    location: "Gurgaon, India",
  },
  {
    id: 9,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    postedDate: "1 Day Ago",
    jobProfile: "Frontend Architect",
    keyword1: "Full Time",
    keyword2: "Senior Level",
    payout: "$95/hour",
    location: "Delhi, India",
  },
  {
    id: 10,
    companyImage: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tata_Consultancy_Services_Logo.svg",
    companyName: "TCS",
    postedDate: "5 Hours Ago",
    jobProfile: "React JS Developer",
    keyword1: "Contract",
    keyword2: "Mid Level",
    payout: "$60/hour",
    location: "Kolkata, India",
  },
];

  return (
   <div className='app'>
    {/* <Hw/>
     <Hw/>
      <Hw/>
       <Hw/> */}

       {jobs.map((jobs)=>{
      return <Hw Cname={jobs.companyName}
       date={jobs.postedDate} 
       profile={jobs.jobProfile}
       key1={jobs.keyword1} key2={jobs.keyword2}
       pay={jobs.payout}
       loc={jobs.location}
       img={jobs.companyImage}
       />
       })}
   </div>
  )

}

export default App



// Card name='Ayushman' jd='12/14/2005' img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'/>
//     <Card name='Salman khan'jd='12/1/2009' img='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D' />
//     <Card name='Messi' jd='10/12/2010' img='https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D'/>