import React, { Component } from 'react'
import Header from './Header.jsx';

export default class Welcome extends Component {
  render() {
    return (
       <div>
        <Header />
        <h1>This is welcome page !!</h1>
       </div>
    )
  }
}
