import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import images from '../global';
import { auth } from "../Firebase";
import { Button, Div, Form, ImgWrapper, Input, Paragraph } from './login';


export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <>
      <Div className='login'>
        <Link to='/'>
          <ImgWrapper 
          src={images.loginLogo} />
        </Link>
        <Div className='container'>
          <Paragraph className='header'>Sign-in</Paragraph>
          <Form>
            <Paragraph className='subheader'>E-mail</Paragraph>
            <Input type='text' value={email} onChange={e => setEmail(e.target.value)} />

            <Paragraph className='subheader'>Password</Paragraph>
            <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            <Button type='submit' className='login' onClick={signIn}>Sign In</Button>
          </Form>
          <Paragraph className='text'>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </Paragraph>
          <Button className='register' onClick={register}>Create your Amazon Account</Button>
        </Div>
      </Div>
    </>
  )
}
