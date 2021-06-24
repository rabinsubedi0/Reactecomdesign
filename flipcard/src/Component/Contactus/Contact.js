import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
export default function Contact() {
    return (
        <section className="contactuspage">
            <div className="container">
                <div className="row">

                    {/* formarea */}
                    <div className="col-md-6">
                        <div>
                            <h3 id="headingone" className="pull-left">Get in touch</h3>
                        </div>
                        <form className="mb-5">
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Write Message" />
                            </div>
                            <button className="btn btn-success pull-left">Send Message</button>
                        </form>
                    </div>
              
                    {/* addressline */}
                    <div className="col-md-6" id="addline">
                        <div className="headingtwo"><h3 id="howto">How to  <span id="find" >find us</span></h3></div>
                        <hr />
                        <div className="address">
                            <h4 id="finding">Address:</h4>

                            <p><LocationOnIcon /> Kathmandu, Nepal  </p>
                        </div>
                        <div className="phone">
                            <h4 id="finding">Phone Numbers:</h4>
                            <p><PhoneIcon />014335678, 9867826013</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
