import React from "react";
import './styles/FooterEnd.css'

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function FooterEnd() {
  return (
    <div className="main">
      <div className="row1">
        <div className="row11">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Disney-logo-png.png"
            alt=""
          />
          <h4>SHOP</h4>
          <h4>PARKS</h4>
          <h4>WHAT'S NEW</h4>
        </div>
        <div className="row12">
          <span><TwitterIcon/></span>
          <span><InstagramIcon/></span>
          <span><FacebookIcon/></span>
          <span><YouTubeIcon/></span>
        </div>
      </div>
      <div className="row2">{/* Logo */}
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/Disney-logo-png.png" alt="" />

      </div>
      <div className="row3">
        <p>About Careers Internet_Safety Terms_of_Use Privacy_Policy DMCA_Notices Supplemental_Terms_of_Use Addendum_to_Privacy_Policy-for_India Contest_Terms_and_Conditions Channel_Distribution Interest-Based_Ads</p>
      </div>
      <div className="row4">
        <p>©Disney©_Disney•Pixar©_&_™Lucasfilm_LTD©Marvel._All_Rights_Reserved </p>
      </div>
    </div>
  );
}

export default FooterEnd;
