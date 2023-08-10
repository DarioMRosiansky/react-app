import React from 'react'

import HomeMain from '../components/HomeMain'
import HeaderComponent from '../layouts/HeaderComponent'
import Background from '../assets/images/mapmundi.jpg'
import FooterComponent from '../layouts/FooterComponent'


export default function Home() {/*<HeaderComponent color="grey"/>*/
  return (
    <div className='w-full min-h-screen bg-cover flex flex-col  justify-between' style={{backgroundImage: `url(${Background})`}} >
      <HeaderComponent text="grey"/>
      <HomeMain />
      <FooterComponent text="grey" bg="black"/>
    </div>
  )
 
   
      
   
  
}
