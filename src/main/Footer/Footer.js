import React from 'react'
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Instagram from '@mui/icons-material/Instagram';
import './Footer.css'

const Footer = () => {

    const handleRedirectContact = (contact) => {
        if(contact === "Facebook"){
          window.location.href = "https://www.facebook.com/"
        } else if (contact === "Instagram") {
          window.location.href = "https://www.instagram.com/"
        } else if (contact === "LinkedIn") {
          window.location.href = "https://www.linkedin.com/"
        }  else if (contact === "Whatsapp") {
          window.location.href = "https://www.whatsapp.com/"
        }
      }

    return (
        <div className='footer'>
            <div className={'col-12 d-flex m-auto'}>
                <div className={'col-md-4 col-6 m-align'}>
                    <div>
                        <p>We are here to serve you. Provided you with the best facility and care that was return to you</p>
                    </div>
                    <div className={'d-flex'}>
                        <div className={'col-3'}>
                            <Facebook  onClick= {() => handleRedirectContact('Facebook')} style={{color:'blue', cursor:'pointer'}}/>
                        </div>
                        <div className={'col-3'}>
                            <WhatsApp  onClick= {() => handleRedirectContact('Whatsapp')} style={{color:'green', cursor:'pointer'}} />
                        </div>
                        <div className={'col-3'}>
                            <Instagram  onClick= {() => handleRedirectContact('Instagram')} style={{color:'deeppink', cursor:'pointer'}}/>
                        </div>
                        <div className={'col-3'}>
                            <LinkedIn  onClick= {() => handleRedirectContact('LinkedIn')} style={{color:'blue', cursor:'pointer'}} />
                        </div>
                    </div>
                </div>
                <div className={'col-md-4 col-6 m-align'} style={{padding: '0px 20px'}}>
                    <div>
                        <h3 style={{fontWeight:'bold'}}>Her Wellness</h3>
                    </div>
                    <div className='p-2'>
                        <a href='#home'>Home</a>
                    </div>
                    <div className='p-2'>
                        <a href='#about'>About</a>
                    </div>
                    <div className='p-2'>
                        <a href='#testimonials'>Testimonials</a>
                    </div>
                    <div className='p-2'>
                        <a href='#demo'>Demo</a>
                    </div>
                </div>
            </div>
            <div className={'col-12'}>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Copyright © 2025 Her Wellness. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
