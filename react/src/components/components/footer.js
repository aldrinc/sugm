import React from 'react';
import footer_logo from '../../images/footer_logo.jpg';
import {Link} from "react-router-dom";

class  Footer extends React.Component {
  render() {
    return (
	<div className="footer">
	<div className="footer_mobile">
<div className="container">
	<div className="row">
      <div className="col-sm-12">
		<div className="footer_logo">
			<img src={footer_logo} alt="" />
	  </div>
	  </div>
	  </div>
	<div className="row">
      <div className="col-sm-12">
		<div className="footer_menu">
			<ul>
				<li><Link to="#">Help</Link></li>
				<li><Link to="#">About Us</Link></li>
				<li><Link to="#">Returns</Link></li>
				<li><Link to="#">About Our Ads</Link></li>
				<li><Link to="#">Jobs</Link></li>
				<li><Link to="#">Privacy Policy</Link></li>
				<li><Link to="#">Terms</Link></li>
				<li><Link to="#">Email Us</Link></li>
			</ul>
	  </div>
	  <div className="emailsubscribe">
		<h2>Be First</h2>
		<p>Want exclusive offers and first and access to products? Sign up for email alerts.</p>
		<div className="emailsubscrivebox">
			<input type="text" placeholder="Your email address" />
			<input type="submit" value="+" />
		</div>
		<div className="kjkj">
			<p>By entering your email,you agree to our</p>
			<p><Link to="#">Terms of Service</Link>+<Link to="#">Privacy Policy</Link>,including receipt of emails and promotions. You can unsubscribe at any time. </p>
		</div>
	  </div>
	  </div>
	  </div>
	  </div>	
	  </div>	
 <div className="deskfooter">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-2">
            <div className="footer-title">
            <h5>Customer Service</h5>
            <ul>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Order Status</Link></li>
              <li><Link to="#">Shipping</Link></li>
              <li><Link to="#">Returns & Exchanges</Link></li>
              <li><Link to="#">Give Us Feedback</Link></li>
            </ul>
          </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="footer-title">
            <h5>About Us</h5>
            <ul>
              <li><Link to="#">Shutupandgiftme Cares</Link></li>
              <li><Link to="#">Site Map</Link></li>
              <li><Link to="#">Get Email Updates</Link></li>
            </ul>
          </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="footer-title">
            <h5>Services</h5>
              <li><Link to="#">Bulk Ordering</Link></li>
            <ul>
            </ul>
          </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="footer-title">
            <h5>Shutupandgiftme, Inc.</h5>
            <ul>
              <li><Link to="#">Investor Relations</Link></li>
              <li><Link to="#">Press Releases</Link></li>
            </ul>
          </div>
          </div>
          <div className="col-md-4">
            <div className="footer-title">
            <h6>Get Connected!</h6>
            <ul className="social-icon-ft">
              <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
              <li><Link to="#"><i className="fab fa-pinterest-p"></i></Link></li>
              <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
            </ul>
          </div>
          </div>

          <div className="col-md-6">
            <div className="footer-btm">
              <ul>
                <li><Link to="#">Your Privacy Rights</Link></li>
                <li><Link to="#">Term & Conditions</Link></li>
                <li><Link to="#">Interest-Based Ads</Link></li>
            
              </ul>
            </div>
          </div>
		   <div className="col-md-6">
            <div className="footer-btm">
           <p className="copy">© 2018 Shutupandgiftme, Inc.</p>
        </div>
        </div>
        </div>
      </div>
      
    </div>	  
</div>
    
    );
  }
}
export default (Footer); 