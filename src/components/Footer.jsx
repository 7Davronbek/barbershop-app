import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 text-center">
                    <div className="logo"><a href="/">LOGO</a></div>

                    <div className="d-flex justify-content-center">
                        <ul className='list-names'>
                            <li>Artist Management:</li>
                            <li>Email:</li>
                            <li>Phone:</li>
                        </ul>
                        <ul className='list-info'>
                            <li><a href="">Jake Henedy</a></li>
                            <li><a href="">support@gmail.com:</a></li>
                            <li><a href="">+998 90 345 67 89</a></li>
                        </ul>

                    </div>
               <div className="socials">
                <ul>
                    <li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faYoutube}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={faFacebookF}/></a></li>
                </ul>
               </div>

                </div>
            </div>
                   <div className="copyright">©  2022 <a target={"blank"} href="https://kokoagency.uz">kOkO digital agency</a>.</div>
        </div>
    </div>
  )
}

export default Footer