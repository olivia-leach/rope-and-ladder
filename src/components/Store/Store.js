import React, { Component, Fragment } from "react";
import Logo from '../../logo.png'
import shirt from '../../tee.png'
import shirt2 from '../../comingsoon.png'
import Footer from "../Footer";

import './Store.scss'

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, label: "Women's Shirt", link: 'https://www.google.com', price: 25, image: shirt, hoveredImage: shirt2 },
        { id: 2, label: "Men's Shirt", link: 'https://www.google.com', price: 25, image: shirt, hoveredImage: shirt2 },
        { id: 3, label: 'Vinyl', link: 'https://www.google.com', price: 30, image: shirt, hoveredImage: shirt2 },
        { id: 4, label: 'Shirt, Vinyl + Booklet Bundle', link: 'https://www.google.com', price: 50, image: shirt, hoveredImage: shirt2 },
        { id: 5, label: 'Shirt + Vinyl Bundle', link: 'https://www.google.com', price: 40, image: shirt, hoveredImage: shirt2 },
        { id: 6, label: 'Booklet', link: 'https://www.google.com', price: 10, image: shirt, hoveredImage: shirt2 }
      ]
    }
  }

  handleHover = (e) => {
    const { id } = e.currentTarget.dataset
    this.setState(prevState => ({
      hoveredId: id === prevState.hoveredId ? null : id
    }))
    // this.setState(prevState => ({
    //   items: prevState.items.map(item => {
    //     if (item.id == id) {
    //       const { hoveredImage, image } = item
    //       item.image = hoveredImage
    //       item.hoveredImage = image
    //     }
    //     return item
    //   })
    // }))
  }

  render() {
    return (
        <div className="store other-page">
          {/*<div className='store-header'>FEATURED MERCHANDISE</div>*/}
          <div className='store-wrapper'>
            {this.state.items.map(item =>
              <a className={`store-item ${this.state.hoveredId && this.state.hoveredId != item.id ? 'fade-out' : ''}`} href={item.link} target='_blank' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} data-id={item.id}>
                <div className='image-wrapper'><img src={item.image} alt={item.label} /></div>
                <div className='title'>{item.label}</div>
                <div className='price'>${item.price.toFixed(2)}</div>
              </a>
            )}
          </div>
          <Footer />
        </div>
    );
  }
}

export default Store;
