import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/Header';
import Add from './component/Add';
import Home from './component/Home';
import Edit from './component/Edit';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Container>
      <div style={{maxWidth: "40rem", margin: "1rem auto"}}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </Router>
      </div>
      </Container>
    </div>
  );
}

export default App;
 