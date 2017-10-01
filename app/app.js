var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/Home');
var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
),
  document.getElementById('root')
);
