import React from 'react';
import images from '../global';
import { Div, H2, ImgWrapper } from './checkout';
import { useStateValue } from './StateProvider';
import { Subtotal } from './Subtotal';
import { CheckoutProduct } from './CheckoutProduct';

export const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Div className='checkout'>
        <Div className='left'>
          <ImgWrapper
            src={images.checkout} alt='' 
          />

          <Div>
            <h3>Hello, {user?.email}</h3>
            <H2>Your shopping Basket</H2>
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </Div>

        </Div>
        <Div className='right'>
          <Subtotal />
        </Div>
      </Div>
    </>
  )
}
