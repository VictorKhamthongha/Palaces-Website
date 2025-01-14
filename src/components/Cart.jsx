import React from "react";
import "./Navigation.css";
import "./Cart.css";

function Cart() {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>

        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=5"
        />

        <title>Cart</title>
        <meta name="description" content="cart Description" />
        <meta property="og:title" content="cart" />
        <meta property="og:description" content="cart Description" />
        <meta name="generator" content="Quest" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rock+Salt:400"
        />
        <link rel="stylesheet" href="index.css" />

        <script src="index.js"></script>
      </head>
      <body class="websiteBody">
        <div class="cart-Page-outer">
          <div id="cart-Page" data-name="cart-Page" class="cart-Page">
            <div class="cart-outer">
              <div id="cart-frame" data-name="cart-frame 8" class="cart-frame">

                <div class="Cart-Banner-Frame-outer">
                  <div
                    id="Cart-Banner-Frame"
                    data-name="Cart-Banner-Frame"
                    alt="Cart-Banner-Frame"
                    class="Cart-Banner-Frame"
                  ></div>
                </div>

                <div class="parent-container">
                      <div class="cart-title-outer">
                        <span class="cart-title">Cart</span>
                      </div>
                    </div>
                

                <div class="cart-body-Outer">
                  <div id="cart-body" data-name="cart-body" class="cart-body">
                    <div class="parent-container">
                      <div class="cart-left-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Remove</div>
                          <div class="text-in-span">xbutton xbutton xbutton xbutton</div>
                        </span>
                      </div>

                      <div class="cart-middle-left-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Item</div>
                          <div class="text-in-span">Seafood Papaya Salad<br/>Wings<br/>Rice<br/>Papaya</div>
                        </span>
                      </div>

                      <div class="cart-middle-right-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Price</div>
                          <div class="text-in-span">$1.50 $2.50 $3.50 $4.50</div>
                        </span>
                      </div>

                      <div class="cart-right-child">
                        <span class="cart-span-menu-items">
                          <div class="remove-title">Qty</div>
                          <div class="text-in-span">box box box box</div>
                        </span>
                      </div>
                    </div>

                    <div class="checkout-button-outer">
                      <div class="checkout-button">Checkout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Cart;
