import React, { Component } from "react"
import { Element } from 'react-scroll'
import ShopifySettings from './ShopifySettings'
// import Digital from '../../digital.png'

import './Store.scss'

class Store extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     shopifyLoaded: false,
  //   }
  // }

  componentDidMount() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    // let that = this
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = window.ShopifyBuy.buildClient({
        domain: 'rope-and-ladder.myshopify.com',
        storefrontAccessToken: '522a179f33ef10f2aa670e674588fa45',
      });

      window.ShopifyBuy.UI.onReady(client).then(ui => {
        // that.setState({ shopifyLoaded: true })
        ui.createComponent('collection', ({
          id: '157015900234',
          node: document.getElementById('collection-component-1575338007576'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: ShopifySettings,
        }))
      })
    }
  }

  render() {
    return (
      <Element name='store' className='page-section sub-section store-section'>
        <div className="store">
        <div className='section-header store-header'>Store</div>
          <div className='store-wrapper'>
            <div id='collection-component-1575338007576'>
            </div>
            {/*<div className="has-image shopify-buy__layout-vertical shopify-buy__product store-add-on">
              <div tabindex="0" role="button" aria-label="View details" className="shopify-buy__btn--parent">
                <div className="shopify-buy__product-img-wrapper" data-element="product.imgWrapper">
                  <img alt="Digital Preorder" data-element="product.img" className="shopify-buy__product__variant-img" src={Digital} />
                </div>
                <h1 className="shopify-buy__product__title" data-element="product.title">
                  Digital Preorder
                </h1>
                <div className="shopify-buy__product__price" data-element="product.prices">
                  <span className="shopify-buy__product__actual-price " data-element="product.price">$10.00</span>
                </div>
              </div>
            </div>*/}
            {/*!this.state.shopifyLoaded && (
              <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )*/}
          </div>
        </div>
      </Element>
    );
  }
}

export default Store;
