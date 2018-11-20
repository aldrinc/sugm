import React from 'react';
import logo from '../../images/logo.png';
import menu from '../../images/menu.png';
 
import cart_icon from '../../images/cart_icon.png';
 
 
 
class Header extends React.Component {
	constructor() {
    super();

    this.state = { 
      shop: {}
    };
	
  }
  
  render() {
    return (
      <header className="Apps__header">

<div className="container-fluid">
  <div className="row headder">
    <div className="col-4 header_left">
      <div className="nav-side-menu"> <div className="toggle-button"><img src={menu} alt="" /></div>
        <div className="menu-list">
        <div className="menu_list_cnt">
			<div className="close_menu"><i className="fas fa-times"></i></div>
          <ul className="menu-content">
            <li> <a href="#"> Sale </a> </li>
            <li  data-toggle="collapse" data-target="#products" className="collapsed active"> <a href="artandmore.html">Art & More <span className="fas fa-plus"></span></a>  </li>
            <ul className="sub-menu collapse" id="products">
              <li className="active"><a href="#">CSS3 Animation</a></li>
              <li><a href="#">General</a></li>
              <li><a href="#">Buttons</a></li>
              <li><a href="#">Tabs & Accordions</a></li>
              <li><a href="#">Typography</a></li>
              <li><a href="#">FontAwesome</a></li>
              <li><a href="#">Slider</a></li>
              <li><a href="#">Panels</a></li>
              <li><a href="#">Widgets</a></li>
              <li><a href="#">Bootstrap Model</a></li>
            </ul>
            <li data-toggle="collapse" data-target="#service" className="collapsed"> <a href="#">Best Selling <span className="fas fa-plus"></span></a> </li>
            <ul className="sub-menu collapse" id="service">
              <li>New Service 1</li>
              <li>New Service 2</li>
              <li>New Service 3</li>
            </ul>
            <li data-toggle="collapse" data-target="#new" className="collapsed"> <a href="#">All Products <span className="fas fa-plus"></span></a> </li>
            <ul className="sub-menu collapse" id="new">
              <li>New New 1</li>
              <li>New New 2</li>
              <li>New New 3</li>
            </ul>
            <ul className="page_nave">
            <li> <a href="#"> About Us</a> </li>
            <li> <a href="#"> Find my Order</a> </li>
            <li> <a href="#"> Our Policies</a> </li>
          </ul>
          </ul>
        </div>
        </div>
      </div>
    </div>
    <div className="col-4 header_center"> <img src={logo} alt="" /> </div>
    <div className="col-4 header_right">
      <ul>
	  <li><div className="search_c"><i className="fas fa-search"></i></div>  <div className="light_search_box_cnt"><div className="light_search_box"><i className="fas fa-search"></i><input type="text" placeholder="What can we help you find?" /><div className="close_search"><i className="fas fa-times"></i></div></div></div></li>
        <li><div className="cart_icon"><img src={cart_icon} alt="" /></div>
		 
		</li>
      </ul>
	  
    </div>
  </div>
  </div>
  
  
    </header>
  
    );
  }
}

 

export default (Header);

