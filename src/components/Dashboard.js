import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { auth } from '../Firebase'
import { Checkout } from './Checkout'
import { Header } from './Header'
import { Home } from './Home'
import { Login } from './Login'
import { useStateValue } from './StateProvider'

export default function Dashboard() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <Route path="/login" exact component={Login} />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </div>
  )
}
