import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import Home from '@ui/Home';
import Header from '@ui/common/components/Header';
// import Footer from '@ui/common/components/Footer';

import './App.scss';

library.add(faTrophy);

const App: React.SFC = () => (
  <Router>
    <Header />
    <Route path="/" component={Home} />
    {/* <Footer /> */}
  </Router>
);

export default App;
