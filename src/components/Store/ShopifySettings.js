export default {
    "product": {
        events: {
            openModal: (product) => {
                const productName = product.selectedVariant.sku
                window.fbq('track', 'ViewContent', { content_name: productName })
            },
        },
        "styles": {
            "product": {
                "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                },
                "text-align": "left",
            },
            layout: 'horizontal',
            "img": {
            "box-shadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            "transition": "all 0.3s cubic-bezier(.25,.8,.25,1)",
            ":hover": {
                "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
            },
            },
            "title": {
                "color": "#ffffff",
                "font-family": "Lato",
                "font-size": "1.3rem",
            },
            "quantityInput": {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px"
            },
            "price": {
                "color": "#ffffff",
                "font-family": "Lato",
                "font-size": "15px",
            },
            "compareAt": {
                "color": "#ffffff",
            },
        },
        "buttonDestination": "modal",
        "contents": {
            "button": false,
            "options": false
        },
        "isButton": true,
        "text": {
            "button": "VIEW PRODUCT"
        },
        "googleFonts": [
            "Roboto",
            "Lato",
        ]
        },
        "productSet": {
            "styles": {
                "products": {
                "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                }
                }
            },
            iframe: false,
        },
        "modalProduct": {
            "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true,
            },
            events: {
                addVariantToCart: (product) => {
                    const productName = product.selectedVariant.sku
                    window.fbq('track', 'AddToCart', { content_name: productName })
                 },
            },
            "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                    },
                    "price": {
                        "color": "#4a4a4a",
                    },
                    "title": {
                        "color": "#4a4a4a",
                    },
                    "compareAt": {
                        "color": "#4a4a4a",
                    },
                },
                "button": {
                    "font-family": "Roboto, sans-serif",
                    "font-weight": "bold",
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px",
                    ":hover": {
                        "background-color": "#c7713e"
                    },
                    "background-color": "#dd7d45",
                    ":focus": {
                        "background-color": "#c7713e"
                    },
                    "border-radius": "6px"
                },
                "quantityInput": {
                    "font-size": "13px",
                    "padding-top": "14.5px",
                    "padding-bottom": "14.5px"
                }
            },
            "googleFonts": [
                "Roboto"
            ],
            "text": {
                "button": "Add to cart"
            }
        },
        "cart": {
            events: {
                openCheckout: () => {
                    window.fbq('track', 'InitiateCheckout')
                }
            },
            "styles": {
                "button": {
                "font-family": "Roboto, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                ":hover": {
                    "background-color": "#c7713e"
                },
                "background-color": "#dd7d45",
                ":focus": {
                    "background-color": "#c7713e"
                },
                "border-radius": "6px"
                }
            },
            "text": {
                "total": "Subtotal",
                "button": "Checkout"
            },
            "googleFonts": [
                "Roboto"
            ]
        },
        "toggle": {
        "styles": {
            "toggle": {
            "font-family": "Roboto, sans-serif",
            "font-weight": "bold",
            "background-color": "#dd7d45",
            ":hover": {
                "background-color": "#c7713e"
            },
            ":focus": {
                "background-color": "#c7713e"
            }
            },
            "count": {
            "font-size": "13px"
            }
        },
        "googleFonts": [
            "Roboto"
        ]
    }
}
