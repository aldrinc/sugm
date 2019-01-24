import React from "react";
import Slider from "react-slick";
import TagManager from 'react-gtm-module';




const tagManagerArgs = {
  dataLayerName: 'AppDataLayer'
}


class SimpleSlider extends React.Component {

  constructor(props) {
		super(props);
		this.state = { images: [] };
		
  }

  

  componentWillMount() {
      this.setState({images: this.props.product.images})

  }

	componentDidMount() {
    this.setState({images: this.props.product.images})
    console.log(this.props.product);

    let slickListDiv = document.getElementsByClassName('slick-list')[0]
    slickListDiv.addEventListener('wheel', event => {
      event.preventDefault()
      event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
    })

    var productObj = this.props.product;

    tagManagerArgs.dataLayer = {
      'event' : 'productDetailImpression',
      'ecommerce': {
        'detail': {
          'actionField': {'list': 'Product Detail Page'},    // 'detail' actions have an optional list property.
          'products': [{
          'name': productObj.title,                      // Name or ID is required.
          'id': productObj.id,
          'price': productObj.variants[0].price,
          'brand': productObj.vendor,
          'variant': productObj.variants[0].title
        }]
         }
       }
    }
    TagManager.dataLayer(tagManagerArgs)
  }

  settings = {
    dots: true, 
    dotsClass: "slick-dots",
    customPaging: (i) => {
      return (this.state && this.state.images[i]) ? <img className="dotsImage" src={this.state.images[i].src} alt=""/>: <button className="sliderDots"></button>  
    },
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
		 adaptiveHeight: true,
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
			 adaptiveHeight: true,
        vertical: false,
       verticalSwiping: false,
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   };

  render() {
    let productImages = (this.props && this.props.product) ? this.props.product.images.map((image) => {
      return (
        <div key={image.id}>
          <img src={image.src} alt="" />
        </div>
      );
    }) : '';
    return (
 
	<div className="row">
	<div className="col-sm-12 singlepage_slider">
      <Slider {...this.settings} ref={slider => this.slider = (slider) ? slider.innerSlider : null}>
        {productImages}
      </Slider>
	  </div>
	  </div>
	  
    );
  }
}
export default SimpleSlider;
