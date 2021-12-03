import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>  
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
