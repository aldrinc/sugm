import React from 'react';
import {Link} from "react-router-dom";

class Banner extends React.Component {
render() {
    return (
     	
		<div className="container-fluid">
			<div className="row">
			<div className="col-12">
			  <div className="app_banner_cnt">
				<div className="app_banner_text">
				  <h1>The thrill of living is in the joy of giving.</h1>
				  <Link to="#">Shop our best seller and more here</Link></div>
			  </div>
			</div>
			</div>
</div>
    );
  }
}
export default (Banner); 