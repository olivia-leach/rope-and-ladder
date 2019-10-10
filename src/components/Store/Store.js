import React, { Component } from "react";
import vinyl from '../../store-album-1.png'
import vinyl2 from '../../store-album-2.jpg'
import booklet from '../../store-booklet-1.jpg'
import booklet2 from '../../store-booklet-2.jpg'
import booklettee from '../../store-booklet-tee.jpg'
import vinyltee from '../../store-vinyl-tee.jpg'
import shirt from '../../tshirt.jpg'
import Footer from "../Footer";

import './Store.scss'

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 3, label: 'Vinyl LP', link: 'https://ropeandladder.bandcamp.com/merch', price: 30, image: vinyl, hoveredImage: vinyl2 },
        // { id: 1, label: "Women's Shirt", link: 'https://www.google.com', price: 25, image: shirt, hoveredImage: shirt2 },
        { id: 2, label: "T-Shirt", link: 'https://ropeandladder.bandcamp.com/merch/t-shirt', price: 20, image: shirt, hoveredImage: null },
        { id: 6, label: 'Booklet', link: 'https://ropeandladder.bandcamp.com/merch/booklet', price: 10, image: booklet2, hoveredImage: booklet },
        { id: 5, label: 'Vinyl/Tee Bundle', link: 'https://ropeandladder.bandcamp.com/merch/vinyl-tee-bundle', price: 40, image: vinyltee, hoveredImage: null },
        { id: 4, label: 'Booklet/Tee Bundle', link: 'https://ropeandladder.bandcamp.com/merch/booklet-tee-bundle', price: 30, image: booklettee, hoveredImage: null },
      ]
    }
  }

  handleHover = (e) => {
    const { id } = e.currentTarget.dataset
    this.setState(prevState => ({
      hoveredId: id === prevState.hoveredId ? null : id
    }))
    // setTimeout(() => {
    //   this.setState(prevState => ({
    //     items: prevState.items.map(item => {
    //       if (item.id == id) {
    //         const { hoveredImage, image } = item
    //         item.image = hoveredImage
    //         item.hoveredImage = image
    //       }
    //       return item
    //     })
    //   }))
    // }, 1000)
  }

  render() {
    return (
        <div className="store other-page">
          {/*<div className='store-header'>FEATURED MERCHANDISE</div>*/}
          <div className='store-wrapper'>
            {this.state.items.map(item =>
              <a className={`store-item ${this.state.hoveredId && this.state.hoveredId != item.id ? 'fade-out' : ''}${this.state.hoveredId == item.id ? 'hovered' : ''}`} href={item.link} target='_blank' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} data-id={item.id}>
                <div className='image-wrapper image-1'>
                  <img src={item.image} alt={item.label} />
                  {item.hoveredImage && (<img className='image-2' src={item.hoveredImage} alt={item.label} />)}
                </div>
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
