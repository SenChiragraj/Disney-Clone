import React from 'react'
import Header from './Header';
import MainContent from './MainContent';
import FeatureAds from './FeatureADs';
import Footer from './Footer';
import FooterEnd from './FooterEnd.js'

import './styles/home.css';


export default function Home() {
  return (
    <div className='home'>
      {/* Header */}
      <Header/>
      <div className="middle">
      {/* Middle Content */}
      <MainContent/>
      </div>
      {/* Bottom Content */}
      <div className="featureAds">
        <FeatureAds/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
      <div className="footerEnd">
        <FooterEnd/>
      </div>
    </div>
  )
}
