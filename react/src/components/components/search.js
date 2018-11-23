import React from 'react';
 

export default class Search extends React.Component {
    render(){
      return (
        <div className="light_search_box_cnt"><div className="light_search_box"><i className="fas fa-search"></i><input type="text" placeholder="What can we help you find?"/><div className="close_search"><i className="fas fa-times"></i></div></div></div>
      );
    }
}