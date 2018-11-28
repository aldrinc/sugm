import React from "react";
import Slider from "react-slick";
import ProductImg1 from '../../images/product/product-image-1.jpg';
 

class SimpleSlider extends React.Component {
	
  render() {
	 
    var settings = {
     dots: true, 
	 dotsClass: "slick-dots slick-thumb",
      infinite: true,
      slidesToShow: 1, 
      slidesToScroll: 1,
      vertical: true, 
      verticalSwiping: true, 
    responsive: [
        {
          breakpoint: 1024,
          settings: { 
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
			   vertical: false,
			  verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
			   vertical: false,
			  verticalSwiping: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
	
    return (
	 <div className="container">
	  
	<div className="row">
	<div className="col-sm-12">
      <Slider {...settings}>
        <div>
          <img src={ProductImg1} alt="" />
        </div>
        <div>
          <img src={ProductImg1} alt="" />
        </div>
        <div>
          <img src={ProductImg1} alt="" />
        </div>
        <div>
         <img src={ProductImg1} alt="" />
        </div>
        <div>
         <img src={ProductImg1} alt="" />
        </div>
        <div>
         <img src={ProductImg1} alt="" />
        </div>
      </Slider>
	  </div>
	  </div>
	  </div>
    );
  }
}
export default SimpleSlider;
