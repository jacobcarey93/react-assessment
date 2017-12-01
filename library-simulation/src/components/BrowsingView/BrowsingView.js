import React, { Component } from 'react';
import './BrowsingView.css';
import Navbar from '../Navbar/Navbar';

class BrowsingView extends Component {
  render() {
    return (
      <div className="BrowsingView">
        <Navbar />
        <div className='browsing-main'>
          <div className='browsing-parent'>
          <div className='browse-header'>
          <h1>BROWSE INVENTORY</h1>
          <input type="checkbox" name="in stock" checked /> In Stock<br/>
          <input type="checkbox" name="out of stock" checked /> Out of Stock<br/>
          
          </div>



          </div>
        </div>
      </div>
    );
  }
}

export default BrowsingView;
