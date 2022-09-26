import React from 'react'
import Header from '../../molecules/Header/Header';
import Banner from '../../molecules/Banner/Banner';
import GroupHeroLights from '../../molecules/GroupHeroLights/GroupHeroLights';
import Download from '../../molecules/Download/Download';
import Footer from '../../molecules/Footer/Footer';
const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <GroupHeroLights/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Home