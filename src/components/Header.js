import React from 'react';
import images from '../global';
import { Div, ImgWrapper, Icon, Input, Span } from './header.jsx';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
import { auth } from "../Firebase";


export const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <>
    <Div className='header'>
      <Link to='/'>
        <ImgWrapper className='headerLogo' src={images.logo} />
      </Link>
      <Div className='search'>
        <Input type='text' />
        <Icon>
          <SearchIcon />
        </Icon>
      </Div>
      <Div className='nav'>
        <Link to={!user && '/login'}>
          <Div className='option' onClick={handleAuthentication} >
            <Span className='optionLineOne'>Hello {!user ? 'Guest' : user.email}</Span>
            <Span className='optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</Span>
          </Div>
        </Link>
        

        <Div className='option'>
          <Span className='ooptionLineOne'>Returns</Span>
          <Span className='optionLineTwo'>& Orders</Span>
        </Div>

        <Div className='option'>
          <Span className='ooptionLineOne'>Your</Span>
          <Span className='optionLineTwo'>Prime</Span>        
        </Div>

        <Link to='/checkout'>
          <Div className='optionBasket'>
              <ShoppingBasketIcon />
              <Span className='basketCount'>{basket?.length}</Span>
          </Div>
        </Link>
      </Div>
    </Div>
    </>
  )
}
