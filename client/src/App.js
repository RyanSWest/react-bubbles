import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './components/privateRoute';
import BubblePage from './components/BubblePage';

 import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* <Login /> */}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path = '/colors'
        component = {BubblePage} 
         render= {props => (
           <BubblePage{...props} setColorList = {setColorList}/>
         )}
         />}}
      </div>
    </Router>
  );
}

export default App;
