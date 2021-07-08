import React from 'react'
import { Cardlink, Div, H2, ImgWrapper } from './home'
import images from '../global'
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
              <Cardlink className='card' to='/store'>Shop now</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Computers & Accessories</H2>
              <ImgWrapper className='card' src={images.computer} />
              <Cardlink className='card' to='/store'>Shop now</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Get fit at home</H2>
              <ImgWrapper className='card' src={images.gift} />
              <Cardlink className='card' to='/store'>Explore now</Cardlink>
            </Div>

            <Div className='card' style={{background:'transparent', padding:'0', marginBottom:'0'}}>
              <Div className='box'>
                <H2 style={{marginTop:'0'}}>Sign in for the best experience</H2>
                <Cardlink to='/login' style={{color:'#111'}}><Button type='submit' className='login' style={{width:'91%', margin:'4%'}} >Sign in securely</Button></Cardlink>
              </Div>
              <hr style={{height:'1.5rem', background:'transparent', border:'none'}} />
                <ImgWrapper className='ship' src={images.ship} />
            </Div>

           
          </Div>
          <Div className='row'>
          <Div className='card'>
              <H2>Oculus</H2>
              <ImgWrapper className='card' src={images.occulus} />
              <Cardlink className='card' to='/store'>Shop now</Cardlink>
            </Div>

            <Div className='card'>
              <H2>AmazonBasics</H2>
              <ImgWrapper className='card' src={images.basics} />
              <Cardlink className='card' to='/store'>See more</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Gaming accessories</H2>
              <ImgWrapper className='card' src={images.gift} />
              <Cardlink className='card' to='/store'>See more</Cardlink>
            </Div>

            <Div className='card'>
              <H2>Find your ideal TV</H2>
              <ImgWrapper className='card' src={images.ideal} />
              <Cardlink className='card' to='/store'>See more</Cardlink>
            </Div>
          
          </Div>
         
        </Div>
      </Div>
    </>
  )
}
