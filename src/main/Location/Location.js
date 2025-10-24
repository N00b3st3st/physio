import React from 'react'
import './Location.css'

const Location = () => {
    return (
        <div className='location' id='location'>
            <div className='col-12'>
                <div className='col-12' style={{margin: 'auto', textAlign:'center'}}>
                    <h2>Location</h2>
                </div>
                <div className='col-12 d-none d-md-block' style={{margin: 'auto', textAlign:'center'}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.549221295982!2d-79.3870634843574!3d43.6425667791219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d1f7e3c1%3A0x7d0a2d5e9d9e9e9e!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1678901234567!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        style={{border:'0'}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>                
                </div>
                <div className='col-11 d-md-none d-xs-block' style={{margin: 'auto', textAlign:'center'}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.549221295982!2d-79.3870634843574!3d43.6425667791219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d1f7e3c1%3A0x7d0a2d5e9d9e9e9e!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1678901234567!5m2!1sen!2sca"
                        width="100%"
                        height="300"
                        style={{border:'0'}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>                
                </div>
            </div>
        </div>
    )
}

export default Location
