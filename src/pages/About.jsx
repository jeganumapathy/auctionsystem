import React from "react";
import logo from '../logo.svg';


const About = () => {
  const about_two = {
    color: "white",
    backgroundColor:"#eff0ee",
    fontFamily: "Arial",
    padding: "20px 0"
  };


  return (
    <div>

      <div className="middlewrapper">
        <div className="about-who-we-are">
          <div className="wrapper">
            <div className="about-who-main">  
              <div className="about-who-img"> </div>
              <div className="about-who-img-detail">
                <h1 className="about-who-title">Who We Are</h1>
                <p>In 2020, the author knew there was a better way to run their estate liquidation business. After looking tirelessly for a technology solution that would help them increase efficiency and create even happier customers, they realized that there was a major void in the market. There were options - but no solution truly met the unique needs of estate liquidators.</p>
                <p>So, they built it themselves.</p>
                <p>After their auction and inventory management software was launched for Black Rock Galleries towards the end of 2014, it didn't take long to see the incredible impact on their business and for others in the industry to take notice.</p>
                <p>After many conversations with industry peers, it became clear that there was a real need for the software in the industry, designed by people who actually understood the industry - and AuctionNinja was born.</p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="about-two-box" style={{about_two }}>
        <div className="wrapper">
          <div className="about-who-img">
            <div className="about-top-box-detail-title">Since it's initial soft launch in 2016, AuctionNinja...</div>
          </div>
          <div className="about-who-img-detail">
            <p>...has helped countless auctioneers and estate liquidators revolutionize the way they do business. By transforming outdated business processes with an easy-to-use and affordable technology solution, our vendors can hold more sales than ever before in a fraction of the time and with fewer resources.</p>
            <p>The impact? Sustainable business growth.</p>
            <p>We commit to providing our customers with the most sophisticated and secure software on the market, the best training and customer support and of course, a marketplace experience that our vendors and bidders love.</p>
            <p>Our people are experts at understanding the needs and goals of businesses like yours and are
              tirelessly dedicated to the success of our customers.</p>
          </div>
          <div className="clear"></div>
        </div>
      </div>

    </div>
  );
}
export default About;
