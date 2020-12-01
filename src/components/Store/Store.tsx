import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import { shopifySettings } from './ShopifySettings'

import './Store.scss'

const scriptURL =
  'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

function loadScript() {
  var script = document.createElement('script')
  script.async = true
  script.src = scriptURL
  ;(
    document.getElementsByTagName('head')[0] ||
    document.getElementsByTagName('body')[0]
  ).appendChild(script)
  script.onload = ShopifyBuyInit
}

function ShopifyBuyInit() {
  var client = (window as any).ShopifyBuy.buildClient({
    domain: 'rope-and-ladder.myshopify.com',
    storefrontAccessToken: '522a179f33ef10f2aa670e674588fa45',
  })

  ;(window as any).ShopifyBuy.UI.onReady(client).then((ui: any) => {
    ui.createComponent('collection', {
      id: '157015900234',
      node: document.getElementById('collection-component-1575338007576'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: shopifySettings,
    })
  })
}

const Store = () => {
  useEffect(() => {
    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        ShopifyBuyInit()
      } else {
        loadScript()
      }
    } else {
      loadScript()
    }
  }, [])

  return (
    <Element
      name="store"
      id="store"
      className="page-section sub-section store-section"
    >
      <div className="store">
        <div className="section-header store-header">Store</div>
        <div className="store-wrapper">
          <div id="collection-component-1575338007576" />
        </div>
      </div>
    </Element>
  )
}

export default Store
