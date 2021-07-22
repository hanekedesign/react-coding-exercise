import React from 'react';
import {Router} from '@reach/router'
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
  
function App() {
  return (
    <Router>
      <MainPage path="/" />
      <DetailPage path="details" />
    </Router>
  );
}

export default App;
