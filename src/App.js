import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './components/StateProvider';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
