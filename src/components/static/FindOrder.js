import * as React from 'react';
import {Link} from "react-router-dom";

class FindOrder extends React.Component {
    render(){
        return (
            <div className="static_content">
        <h1 className="text-center">Looking for your order?</h1>
        <p className="content_page_cnt">
          <meta charset="utf-8" />

          We can help! Here are some common questions our customers ask us.
          <p>
              <br></br>
              <span>
                  <h3>
                  My tracking label is not updating. How do I track my order?        
                  </h3>
                  <p>Most of our orders take between 12-20 business days to move from our warehouse to your door. If you live internationally this can take up to 10 days longer. In terms of tracking information, your tracking information only gets updated after the unit gets closer to you. We ship almost exclusively via USPS and local carriers so once the unit arrives at your local post office your tracking will be updated. Usually customers reach out asking about tracking numbers because they're concerned their order got lost. In our experience, we have a low order loss rate so your order most likely is in transit and tracking has not been updated yet. Hang tight!</p>
                  </span>
                <br/>
                <span>
                  <h3>
                  How do I return my product?        
                  </h3>
                 <p>You can read our return policy <Link to="/returns" >
             here,
              </Link> but the short version is we accept returns up to 25 days after the unit has been ordered. You are responsible for return shipping.                     
                 </p>
                  </span>
            
          </p>
         
          <h4>
            <span>Questions?</span>
          </h4>
          <p>
            <span>
              We are here to help! Contact us now through our contact page, or
              email us at support@shopclement.com. 
            </span>
          </p>
          <p> </p>
          <p>
            <span>
              <em>Thank you for shopping with us!</em>
            </span>
          </p>
          <p> </p>
        </p>
      </div>
 
        )
    }
}

export default FindOrder