import React from 'react'
import { Cardlink, Div, H2, ImgWrapper } from './home'
// import { Header } from './Header'
import images from '../global'
import { Product } from './Product';
import Carousels from './carousel';
import { Link } from 'react-router-dom';
import { Button } from './login';


export const Home = () => {
  
  return (
    <>
      {/* <Header /> */}
      <Div className='home'>
        <Div className="container">
          {/* <ImgWrapper
            src={images.img1}
            alt="homepage-image"
          /> */}
          <Carousels />
          <Div className='row' style={{marginTop:'-26%'}}>
            <Div className='card'>
              <H2>Computers & Accessories</H2>
              <ImgWrapper className='card' src={images.computer} />
              <Cardlink className='card' to='/shop'>Shop now</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Computers & Accessories</H2>
              <ImgWrapper className='card' src={images.computer} />
              <Cardlink className='card' to='/shop'>Shop now</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Get fit at home</H2>
              <ImgWrapper className='card' src={images.gift} />
              <Cardlink className='card' to='/shop'>Explore now</Cardlink>
            </Div>

            <Div className='card' style={{background:'transparent', padding:'0', marginBottom:'0'}}>
              <Div className='box'>
                <H2 style={{marginTop:'0'}}>Sign in for the best experience</H2>
                <Cardlink to='/login' style={{color:'#111'}}><Button type='submit' className='login' style={{width:'91%', margin:'4%'}} >Sign in securely</Button></Cardlink>
              </Div>
              <hr style={{height:'1.5rem', background:'transparent', border:'none'}} />
                <ImgWrapper className='ship' src={images.ship} />
            </Div>

            {/* <Product 
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image={images.product1}
            />
            <Product 
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image={images.product2}
            /> */}
          </Div>
          <Div className='row'>
          <Div className='card'>
              <H2>Oculus</H2>
              <ImgWrapper className='card' src={images.occulus} />
              <Cardlink className='card' to='/shop'>Shop now</Cardlink>
            </Div>

            <Div className='card'>
              <H2>AmazonBasics</H2>
              <ImgWrapper className='card' src={images.basics} />
              <Cardlink className='card' to='/shop'>See more</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Gaming accessories</H2>
              <ImgWrapper className='card' src={images.gift} />
              <Cardlink className='card' to='/shop'>See more</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Find your ideal TV</H2>
              <ImgWrapper className='card' src={images.ideal} />
              <Cardlink className='card' to='/shop'>See more</Cardlink>
            </Div>
          {/* <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={images.product3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={images.product4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={images.product5}
          /> */}
          </Div>
          <Div className='row'>
          {/* <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image={images.product6}
          /> */}
          </Div>
        </Div>
      </Div>
      {/* <Product /> */}
    </>
  )
}
