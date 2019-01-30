import React from 'react';
import {NavLink} from "react-router-dom";
import { LocalStorage } from '../../helpers/LocalStorage';
import Icon from "../../images/arrow";
import {Link} from "react-router-dom"; 
 
class SidebarMenu extends React.Component {
	constructor() {
    super();
    this.lc = new LocalStorage();
  }

  showCategories = ['best-sellers', 'all-products', 'more-art-goods'];

  render() { 
    let collect = null;
    const collections = this.lc.getObject('collections');
    if(collections) {
      collect = collections.map((collection) => {
        return (
          (this.showCategories.indexOf(collection.handle) > -1) ? 
          <li key={collection.id} onClick={() => this.props.sidebarOpen(false)}>
            <NavLink exact activeClassName="current" to={`/${collection.handle}`} ><span>{collection.title}</span><Icon width={30} /></NavLink>
          </li>
          : null
        );
      });
    }
    return (
        <div className="side_bar_cnt">
        <div className="side_box">
          <ul className="menu-content">
            {collect}
          </ul>
          <ul className="menu-page-content">
            <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/about" >
              About Us
              </Link>
            </li>
                <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/findmyorder" >
              Find my Order
              </Link>
            </li>
                <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/customerservice" >
              Customer Service
              </Link>
            </li> 
            <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/returns" >
              Returns
              </Link>
            </li> 
            <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/privacypolicy" >
              Privacy Policy
              </Link>
            </li> 
            <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/terms" >
              Terms & Conditions
              </Link>
            </li> 
            <li onClick={() => this.props.sidebarOpen(false)}>
              <Link to="/contactus" >
              Contact Us
              </Link>
            </li> 
          </ul>
		   </div>
          <div className="cruncy_option">
            <select>
              <option>United States (USD) </option>
            </select>
          </div>
       
        </div>
      );
  }
}
 
export default SidebarMenu; 