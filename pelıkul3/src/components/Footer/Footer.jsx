import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className="title">
                    Get Funded Today!
                </span>
                <EmailBox />

                <hr/>
                <div className="f-menu">
                    <span>Home</span>
                    <span>asdfsad</span>
                    <span>sadfas</span>
                    <span>fasdf</span>
                    <span>sdfasdfsdafsad</span>
                </div>
                <hr />

                <span className='text'>
                   adsfasdfasdfasdf
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer