import React from 'react'
import { Button, Div, ImgWrapper, Paragraph } from './checkoutProduct';
import { useStateValue } from './StateProvider';

export const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <>
     <Div className='checkout'>
        <ImgWrapper
          src={image} />

        <Div className='info'>
          <Paragraph className='title'>{title}</Paragraph>
          <Paragraph className='price'>
            <small>$</small>
            <strong>{price}</strong>
          </Paragraph>
          <Div className='rating'>
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          </Div>
          {!hideButton && (
            <Button onClick={removeFromBasket}>Remove from Basket</Button>
          )}
        </Div>
      </Div> 
    </>
  )
}
