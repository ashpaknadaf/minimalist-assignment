
import { FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare, FaFacebook } from "react-icons/fa";
import './index.css'
import { CiLinkedin } from "react-icons/ci";

const FooterSection = () => (
    <div className='footer-bg-container'>
        <div className="border-desing-container">
            <img 
            src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719068559/Frame_64_tre0rd.svg'
            className='footer-border-design'
            alt='footer-design'
            />
        </div>
        
        <div className='footer-content-container'>
            <img 
              src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719068719/Frame_62_1_fpi3aw.svg'
              className='footer-section-image'
              alt='footer'
            />

            <div className='follow-us-section-container'>
              <h1 className='follow-us-heading'>Follow us on</h1>
              <div className='social-media-icons-container'>
                <img 
                  src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719080049/001-instagram_shceii.svg'
                  className="icon-image"
                  alt='instagram'
                />
                <img 
                  src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719080210/002-youtube_dsyqff.svg'
                  className="icon-image"
                  alt='youtube'
                />
                <img 
                  src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719080387/003-twitter_qodwju.svg'
                  className="icon-image"
                  alt='teitter'
                />
                <img 
                  src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719080451/004-facebook_tsttqn.svg'
                  className="icon-image"
                  alt='facebook'
                />
                <img 
                  src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719080512/005-linkedin_dwdumt.svg'
                  className="icon-image"
                  alt="linkedin"
                />
              </div>
            </div>

            <img 
              src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719068719/Frame_62_1_fpi3aw.svg'
              className='footer-section-image'
              alt='footer'
            />
        </div>

        <img 
          src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719068559/Frame_64_tre0rd.svg'
          className='footer-border-design'
          alt='footer-design'
        />
    </div>
)

export default FooterSection