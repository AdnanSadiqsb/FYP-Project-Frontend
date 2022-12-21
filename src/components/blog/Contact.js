import React from 'react'
import { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

function Contact() {
    const defaultProps = {
        center: {
          lat: 10.998,
          lng: 77.0150
        },
        zoom: 11
      };
 
  return (
    <div>
      <div className="breadcrumbs_area">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                       <h3>Contact Us</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
   
    <div className="contact_map mt-70">
       <div className="map-area">
        <div id='googleMap'>

       <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        >
   
      </GoogleMapReact>
          </div>
       </div>
    </div>
 
    <div className="contact_area">
        <div className="container">   
            <div className="row">
                <div className="col-lg-6 col-md-6">
                   <div className="contact_message content">
                        <h3>contact us</h3>    
                         <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                        <ul>
                            <li><i className="fa fa-fax"></i>  Address : province punjab, district vehari</li>
                            <li><i className="fa fa-phone"></i> <a href="#">0300 0000000</a></li>
                            <li><i className="fa fa-envelope-o"></i><a href="tel:0(1234)567890">example@gmail.com</a>  </li>
                        </ul>             
                    </div> 
                </div>
                <div className="col-lg-6 col-md-6">
                   <div className="contact_message form">
                        <h3>Tell us your project</h3>   
                        <form id="contact-form" method="POST"  action="https://htmldemo.net/safira/safira/assets/mail.php">
                            <p>  
                               <label> Your Name (required)</label>
                                <input name="name" placeholder="Name *" type="text"/> 
                            </p>
                            <p>       
                               <label>  Your Email (required)</label>
                                <input name="email" placeholder="Email *" type="email"/>
                            </p>
                            <p>          
                               <label>  Subject</label>
                                <input name="subject" placeholder="Subject *" type="text"/>
                            </p>    
                            <div className="contact_textarea">
                                <label>  Your Message</label>
                                <textarea placeholder="Message *" name="message"  className="form-control2" ></textarea>     
                            </div>   
                            <button type="submit"> Send</button>  
                            <p className="form-messege"></p>
                        </form> 

                    </div> 
                </div>
            </div>
        </div>    
    </div>
    </div>
  )
}

export default Contact
