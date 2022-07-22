import React from 'react';
import Home from './Home';

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
       <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    )
  }
}

export default App;
