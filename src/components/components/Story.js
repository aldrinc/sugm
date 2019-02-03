import React from 'react';

import icon_1 from '../../images/fwc.png'; 
import icon_2 from '../../images/er.png'; 
import icon_3 from '../../images/hh.png'; 
import icon_4 from '../../images/sc.png'; 
 
 
 
class  Story extends React.Component {
 
  render() {
    return (
<div className="text_cnt">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5">
        <div className="over_story_cnt">
          <h2>Our Story and Promise</h2>
          <p>Vincent & Bosco is a modern art brand dedicated to promoting premium art goods for artists young and old. Inspired by aspiring artists' struggles, our goal is to equip new artists with the tools they need to stand out from the crowd. In addition to supporting the arts, we're committed to operational excellence through delivering product to your door quickly and with little hassle. </p>
          <ul>
            <li> <img src={icon_1} alt="" />
              <p>Free Worldwide Shipping</p>
            </li>
            <li> <img src={icon_2}alt="" />
              <p>Easy Returns</p>
            </li>
            <li> <img src={icon_3} alt="" />
              <p>Human Helpdesk</p>
            </li>
            <li> <img src={icon_4} alt="" />
              <p>Secure Checkout</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-7 hide_mob">
        <div className="holyday_cnt">
          <div className="holyday_text_cnt">
            <h3>Modern art meets modern discounts.</h3>
            <p>Free shipping for customers who purchase over $35 in goods!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
  }
}
export default (Story); 