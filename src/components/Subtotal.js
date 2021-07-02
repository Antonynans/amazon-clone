import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { Button, Div, Input, Small } from './subtotal';


export const Subtotal = () => {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

console.log('basket', basket)
  return (
    <>
     <Div className='subtotal'>
       <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <Small className='gift'>
              <Input type='checkbox' /> This order contains a gift
            </Small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
       />
       <Button>Proceed to Checkout</Button>
     </Div>
    </>
  )
}
