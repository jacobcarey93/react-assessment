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
            <div id='browse-header'>
              <h1>BROWSE INVENTORY</h1>
              <div>
                <input type="checkbox" name="in stock" checked /> In Stock<br />
                <input type="checkbox" name="out of stock" checked /> Out of Stock<br />
              </div>
              Genre
          <select>
                <option>None</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Sci-Fi</option>
                <option>Mystery</option>
              </select>

            </div>
            <div className='book-card'>
              <div>
                <img src="#" alt="book" />
              </div>
              <div>
                <h1>Title</h1>
              </div>
              <div>
                <p>by</p><h2>Author</h2>
              </div>
              <div>
                <h3>IN STOCK: </h3>
                <p>Yes</p>
              </div>
              <div>
                <button>DETAILS</button>
              </div>

            </div>

            <button> +ADD NEW BOOK </button>



          </div>
        </div>
      </div>
    );
  }
}

export default BrowsingView;