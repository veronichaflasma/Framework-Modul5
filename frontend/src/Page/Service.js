import React from 'react';   
import ServiceArea from '../Section/ServiceArea' 

function Service () {  
        return (  
            <div>  
                {/* Start Contact */}
                <ServiceArea/>
                <section id="contact-us" className="contact-us section">
                    <div className="container">
                    <div className="contact-head">
                        <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="form-main">
                            <div className="title">
                                <h4>Get in touch</h4>
                                <h3>Write us a message</h3>
                            </div>
                            <form className="form" method="" action="">
                                <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Name<span>*</span></label>
                                    <input name="name" type="text" placeholder />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Subjects<span>*</span></label>
                                    <input name="subject" type="text" placeholder />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Email<span>*</span></label>
                                    <input name="email" type="email" placeholder />
                                    </div>	
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                    <label>Your Phone<span>*</span></label>
                                    <input name="company_name" type="text" placeholder />
                                    </div>	
                                </div>
                                <div className="col-12">
                                    <div className="form-group message">
                                    <label>your message<span>*</span></label>
                                    <textarea name="message" placeholder defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group button">
                                    <button type="submit" className="btn ">Send Message</button>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                {/*/ End Contact */}
            </div>  

        )  
    
}  
  
export default Service  