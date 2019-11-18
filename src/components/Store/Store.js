import React, { Component } from "react";
import vinyl from '../../store-album-3.jpg'
import vinyl2 from '../../store-album-2.jpg'
import booklet from '../../store-booklet-1.jpg'
import booklet2 from '../../store-booklet-2.jpg'
import booklettee from '../../store-booklet-tee.jpg'
import vinyltee from '../../store-vinyl-tee.jpg'
import digital from '../../digital.png'
import shirt from '../../store-tee-1.jpg'
import shirt2 from '../../store-tee-2.jpg'
import Footer from "../Footer";
import { Element } from 'react-scroll'

import './Store.scss'
import { Parallax } from "react-scroll-parallax";

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { label: 'Vinyl LP', link: 'https://ropeandladder.bandcamp.com/merch', price: 30, image: vinyl, hoveredImage: vinyl2 },
        { label: "T-Shirt", link: 'https://ropeandladder.bandcamp.com/merch/t-shirt', price: 20, image: shirt, hoveredImage: shirt2 },
        { label: 'Booklet', link: 'https://ropeandladder.bandcamp.com/merch/booklet', price: 10, image: booklet2, hoveredImage: booklet },
        { label: 'Vinyl/Tee Bundle', link: 'https://ropeandladder.bandcamp.com/merch/vinyl-tee-bundle', price: 40, image: vinyltee, hoveredImage: null },
        { label: 'Booklet/Tee Bundle', link: 'https://ropeandladder.bandcamp.com/merch/booklet-tee-bundle', price: 27, image: booklettee, hoveredImage: null },
        { label: 'Digital Preorder', link: 'https://ropeandladder.bandcamp.com/album/rope-and-ladder-2', price: 10, image: digital, hoveredImage: null },
      ]
    }
  }

  render() {
    return (
      <Element name='store' className='page-section sub-section store-section'>
        <div className="store">
        <div className='store-header'>Store</div>
          <div className='store-wrapper'>
            {this.state.items.map((item, i) =>
              <a key={item.label} className='store-item' href={item.link} target='_blank'>
                <div className='image-wrapper image-1'>
                  <img src={item.image} alt={item.label} />
                  {item.hoveredImage && (<img className='image-2' src={item.hoveredImage} alt={item.label} />)}
                </div>
                <div className='title'>{item.label}</div>
                <div className='price'>${item.price.toFixed(2)}</div>
              </a>
            )}
          </div>
        </div>
      </Element>
    );
  }
}

export default Store;
