import { Button } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import images from '../global';
import { ImgWrapper } from './home';

export default function Carousels() {

  var items = [{
    src:images.img1
  },
  {
    src: images.img2
  },
  {
    src: images.img3
  },
  {
    src: images.img4
  },
  {
    src: images.img5
  },
  {
    src: images.img6
  }];

return (
  <Carousel IndicatorIcon={false}
  
  >
      {items.map((item, i) => <Item key={i} item={item} />)}
  </Carousel>
)
}

function Item(props) {
  return (
      <>
          <ImgWrapper className='home' src={props.item.src} />
      </>
  )
}


// import React from "react";
// import images from '../global';
// import { ImgWrapper } from './home';

// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// export default function App() {

//   var items = [{
//         src:images.img1
//       },
//       {
//         src: images.img2
//       },
//       {
//         src: images.img3
//       },
//       {
//         src: images.img4
//       },
//       {
//         src: images.img5
//       },
//       {
//         src: images.img6
//       }];
    

//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };

//   return (

//     <div className="App">

//       <Slider {...settings}>
//         {/* <div>{items}</div> */}
//       </Slider>

//     </div>

//   );

// }