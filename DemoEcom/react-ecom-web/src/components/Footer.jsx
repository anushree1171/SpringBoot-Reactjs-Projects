import React from 'react'
import "./Footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <>
          <div className="footer">
              <div className="qaimages">
                  <div className="image one">
                      <img src="/src/images-footer/exchange.svg" alt="exchange" />
                      <h5>Easy Exchanges</h5>
                  </div>
                  <div className="image two">
                      <img src="/src/images-footer/handpicked.svg" alt="handpicked" />
                      <h5>Hand-picked products</h5>
                  </div>
                  <div className="image three">
                      <img src="/src/images-footer/assured_quality.svg" alt="assured quality" />
                      <h5>Assured Quality</h5>
                  </div>
              </div>
              <div className="copyrights">
                  <p>© {currentYear} Sonic Shoes. All rights reserved.</p>
              </div>
          </div> 
    </>
  )
}
