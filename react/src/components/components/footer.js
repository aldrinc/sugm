import React from 'react';
import footer_logo from '../../images/footer_logo.jpg';

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
				<li><a href="#">Help</a></li>
				<li><a href="#">About us</a></li>
				<li><a href="#">Returns</a></li>
				<li><a href="#"> Wholesale</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Give Us Feedback</a></li>
				<li><a href="#">Terms</a></li>
				<li><a href="#">Email Us</a></li>
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
			<p><a href="#">Terms of Service</a>+<a href="#">Privacy Policy</a>,including receipt of emails and promotions. You can unsubscribe at any time. </p>
		</div>
	  </div>
	  </div>
	  </div>
	  </div>	
	  </div>	
 <div className="deskfooter">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="footer-title">
            <h5>Customer Service</h5>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Give Us Feedback</a></li>
            </ul>
          </div>
          </div>
          <div className="col-md-2">
            <div className="footer-title">
            <h5>About Us</h5>
            <ul>
              <li><a href="#">Shutupandgiftme Cares</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Get Email Updates</a></li>
              <li><a href="#">Blogs + More</a></li>
            </ul>
          </div>
          </div>
          <div className="col-md-2">
            <div className="footer-title">
            <h5>Services</h5>
            <ul>
              <li><a href="#">Bulk Ordering</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          </div>
          <div className="col-md-2">
            <div className="footer-title">
            <h5>Shutupandgiftme, Inc.</h5>
            <ul>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Press Releases</a></li>
            </ul>
          </div>
          </div>
          <div className="col-md-4">
            <div className="footer-title">
            <h6>Connect with us!</h6>
            <ul className="social-icon-ft">
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            </ul>
          </div>
          </div>

          <div className="col-md-6">
            <div className="footer-btm">
              <ul>
                <li><a href="#">Your Privacy Rights</a></li>
                <li><a href="#">Term & Conditions</a></li>
            
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