import React, {Component} from 'react';
import Header from "./Header";
import {Container} from "../style/Home";
import Footer from "./Footer";

class Home extends React.Component{
  render(){
    return(
        <Container>
            <Footer/>
        </Container>    
    )
  }
}
module.exports = Home;