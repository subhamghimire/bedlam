import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './views/home/Home'
import Store from './views/store/Store'
import Product from './views/store/product/Product'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/store" exact component={Store} />
        <Route path="/store/:category" exact component={Store} />
        <Route path="/store/id/:id" exact component={Product} />
        {/* <Route path="/about-us" exact component={AboutUs} />
          <Route path="/stockist" exact component={Stockist} />
          <Route path="/news" exact component={News} />
        <Route path="/contact-us" exact component={ContactUs} /> */}
      </Switch>
    </Router>
  )
}
