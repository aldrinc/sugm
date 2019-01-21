import React from "react";
import ProductImg1 from '../images/product/product-image-1.jpg';
import icon_1 from '../images/icon_1.jpg'; 
import icon_2 from '../images/icon_2.jpg'; 
import icon_3 from '../images/icon_3.jpg'; 
import icon_4 from '../images/icon_4.jpg';  

function Singleproduct() {
  return (
 <div className="container-fluid">
	       <div className="row">
		<div className="col-sm-2">
		<div className="tumnail_cnt">
			<ul>
				<li><img src={ProductImg1} alt="" /></li>
				<li><img src={ProductImg1} alt="" /></li>
				<li><img src={ProductImg1} alt="" /></li>
				<li><img src={ProductImg1} alt="" /></li>
			</ul>
			</div>
		</div>
		<div className="col-sm-5">
			<div className="full_img">
			<ul>
				<li><img src={ProductImg1} alt="" /></li>
				<li><img src={ProductImg1} alt="" /></li>
				<li><img src={ProductImg1} alt="" /></li>
				<li><img src={ProductImg1} alt="" /></li>
			</ul>
			</div>
		</div>
		<div className="col-sm-4">
			<div className="pro_right_box">
				<h2>100g Wax Beads - Choose Your Scent!</h2>
				<div className="pro_review">
				<i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><p>4.8 stars. 4169 Orders</p>
				</div>
				<div className="price_cnt">
					<p><del>$62.97</del><span>$26.95(50%off)</span></p>
				</div>
				<div className="pro_type">
				<label>Type</label>
				<select>
					<option>Set of 12 colors</option>
					<option>Set of 16 colors</option>
					<option>Set of 18 colors</option>								
					<option>Set of 24 colors</option>
				</select>				
				</div>
				<div className="pro_qyt">
				<label>Quantity</label>			
				</div>
				<div className="addbuttonbox">
					<button id="addToBagBtn">Add to Bag</button>
				</div>
				<div className="fr_bog_tgh_cnt">
					<ul>
						<li>
							<div className="pro_item"><div className="pro_img"><img src={ProductImg1} alt="" /></div><a href="singleproduct.html">100g Wax Beads - Choose Your Scent!</a>
							 
							<div className="p_price">$215</div> </div>
						</li>
						<li>
							<div className="pro_item"><div className="pro_img"><img src={ProductImg1} alt="" /></div><a href="singleproduct.html">100g Wax Beads - Choose Your Scent!</a>
							 
							<div className="p_price">$215</div> </div>
						</li>
						<li>
							<div className="pro_item"><div className="pro_img"><img src={ProductImg1} alt="" /></div><a href="singleproduct.html">100g Wax Beads - Choose Your Scent!</a>
							<div className="setof_pro_type">
									<select>
										<option>Set of 12 colors</option>
										<option>Set of 16 colors</option>
										<option>Set of 18 colors</option>								
										<option>Set of 24 colors</option>
									</select>				
									</div>
							<div className="p_price">$215</div> </div>
						</li>
					</ul>
					<div className="buyallcnt">
						<button>Buy All and Save <i className="fas fa-check-circle"></i></button>
					</div>
					</div>
					<div className="frewidebox">
							 <ul>
							  <li>
								  <img src={icon_1} alt="" />
									<p>Free Worldwide Shipping</p>
								  </li>
								  <li>
									<img src={icon_2}alt="" />
									<p>Easy Returns</p>
								  </li>
								  <li>
									<img src={icon_3} alt="" />
									<p>Human Helpdesk</p>
								  </li>
								  <li>
									<img src={icon_4} alt="" />
									<p>Secure Checkout</p>
								  </li>
							</ul>
					</div>
					<div className="product_detail_cnt">
						<h3>Product Details</h3>
						<p>#1 Best Selling Product <br/>
						Free Worldwide Shipping - No surprises at checkout!<br/>
						90% of Reviewers Recommend this product</p>	
							<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong> </p>
							<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							<p><strong>UPDATE:</strong> Due to hug demand we are officially running low on this product , please place your order order while supplies shipping Estimates are 2-3 weeks as a result of unexpected demand. </p>
							<p className="sep_content">Free worldwide shipping & 57% Off Today!</p>
							<p>Hesitant? Ask our many customers form all around the world.</p>
							<p>Don’t like it ? we’ll be sad, but we’ll take it back</p>
					</div>
				</div>				
			</div>
		</div>
	</div>
);
  }
}

export default Singleproduct;	
 