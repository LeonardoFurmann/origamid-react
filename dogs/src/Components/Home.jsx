import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

const Home = () => {
  return (
    <secion className='container mainContainer'>
      <Head title="Fotos" description = "Home do site Dogs" />
      <Feed /> 
    </secion>
  )
}

export default Home