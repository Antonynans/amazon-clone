import React from 'react'
import { Button, Div, ImgWrapper, Paragraph } from './product';
import { useStateValue } from "./StateProvider";

  export function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
  
 
    return (
      <Div className="product">
        <Div className="info">
          <Paragraph>{title}</Paragraph>
          <Paragraph className="price">
            <small>$</small>
            <strong>{price}</strong>
          </Paragraph>
          <Div className="rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Paragraph>⭐</Paragraph>
              ))}
          </Div>
        </Div>
  
        <ImgWrapper src={image} alt="" />
  
        <Button onClick={addToBasket}>Add to Basket</Button>
      </Div>
    );
  }

