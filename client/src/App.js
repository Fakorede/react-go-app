import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Categories from './components/Categories';
import Category from './components/Category';
import Admin from './components/Admin';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">
            Go Watch a Movie!
          </h1>
          <hr className="mb-3" />
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/categories">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Switch>
              <Route path="/movies/:id" component={Movie}></Route>
              <Route path="/movies"><Movies /></Route>
              <Route exact path="/categories"><Categories /></Route>
              <Route 
                exact 
                path="/categories/comedy"
                render={(props) => <Category {...props} title={`Comedy`} />}
              ></Route>
              <Route 
                exact 
                path="/categories/drama"
                render={(props) => <Category {...props} title={`Drama`} />}
              ></Route>
              <Route path="/admin"><Admin /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
