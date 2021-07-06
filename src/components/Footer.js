import React from 'react'
import { Link } from 'react-router-dom'
import images from '../global'
import { Div, Footerhead, FooterLink, Paragraph } from './footer'
import { ImgWrapper } from './header'

export const Footer = () => {
  return (
    <>
      <Div className='footer'>
        
        <Div style={{display:'flex', justifyContent:'space-around', width:'80%', height:'%', margin:'auto', marginTop:'%'}}>
        <Div className='col'>
          <Footerhead>Get to Know Us</Footerhead>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>About Amazon</FooterLink>
          <FooterLink>Investor Relations</FooterLink>
          <FooterLink>Amazon Devices</FooterLink>
        </Div>

        <Div className='col'>
          <Footerhead>Make Money with Us</Footerhead>
          <FooterLink>Sell products on Amazon</FooterLink>
          <FooterLink>Sell on Amazon Business</FooterLink>
          <FooterLink>Sell apps on Amazon</FooterLink>
          <FooterLink>Become an Affiliate</FooterLink>
          <FooterLink>Advertise Your Products</FooterLink>
          <FooterLink>Self-Publish with Us</FooterLink>
          <FooterLink>Host an Amazon Hub</FooterLink>
        </Div>

        <Div className='col'>
          <Footerhead>Amazon Payment Products</Footerhead>
          <FooterLink>Amazon Business Card</FooterLink>
          <FooterLink>Shop with Points</FooterLink>
          <FooterLink>Reload Your Balance</FooterLink>
          <FooterLink>Amazon Currency Converter</FooterLink>
        </Div>

        <Div className='col'>
          <Footerhead>Let Us Help You</Footerhead>
          <FooterLink>Amazon and COVID-19</FooterLink>
          <FooterLink>Your Account</FooterLink>
          <FooterLink>Your Orders</FooterLink>
          <FooterLink>Shipping Rates & Policies</FooterLink>
          <FooterLink>Returns & Replacements</FooterLink>
          <FooterLink>Manage Your Content and Devices</FooterLink>
          <FooterLink>Amazon Assistant</FooterLink>
          <FooterLink>Help</FooterLink>
        </Div>
        </Div>
        
        <hr style={{border:'1px solid #3a4553'}} />
        <Div className='subrow'>
          <Link to='/'>
            <ImgWrapper className='headerLogo' src={images.logo} style={{height:'27px'}} />
          </Link>
          <Div style={{width:'90%', display:'flex'}}>
            <Div className='footerrow'>
              <Paragraph className='topFooterText'>English</Paragraph>
            </Div>
            <Div className='footerrow'>
              <Paragraph className='topFooterText'>$USD - U.S. Dollar</Paragraph>
            </Div>
            <Div className='footerrow'>
              <Paragraph className='topFooterText'><span>🇺🇸</span>  United States</Paragraph>
            </Div>
          </Div>
        </Div>
      </Div>

      <Div className='bottomFooter'>
        <Div className='bottomDiv'>
          <Div className='bottomRow'>
            <FooterLink className='head'>Amazon Music</FooterLink>
            <FooterLink>Stream millions of songs</FooterLink>

          </Div>
        </Div>
      </Div>
    </>
  )
}
