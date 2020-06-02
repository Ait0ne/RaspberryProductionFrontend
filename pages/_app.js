import React, { Fragment } from 'react';
import { Provider, connect } from 'react-redux';
import App from 'next/app';
// import wrapper  from '../src/redux/store';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout/layout.component';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import withReduxStore from '../src/with-redux-store';
import {hydrate} from 'react-dom';

import './index.css';
import '../components/Slider/slider.styles.css';
import '../components/Header/header.styles.css';
import '../components/cart-icon/cart-icon.styles.css';
import '../components/sign-in/sign-in.styles.css';
import '../components/sign-up/sign-up.styles.css';
import '../components/FormInput/forminput.styles.css';
import './auth.css';
import '../components/cart-dropdown/cart-dropdown.styles.css';
import '../components/cart-item/cart-item.styles.css';
import '../components/Footer/footer.styles.css';
import './itemgallery/item.css';
import '../components/Review/review.styles.css';
import '../components/CheckoutItem/checkout-item.styles.css';
import './checkout.css';
import '../components/Chatbutton/chat-button.styles.css';
import '../components/Chat/chat.styles.css';
import './payment.css'

import { AnimatePresence } from 'framer-motion'







// config.autoAddCss = false

class MyApp extends App {
  constructor(props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }

  render() {

      const {Component, pageProps, reduxStore} = this.props;

      return (           
                  <Provider store={reduxStore}>
                    <PersistGate
                            loading={<Component {...pageProps} />}
                            persistor={this.persistor}
                          >
                      <AnimatePresence exitBeforeEnter>
                        <Layout>

                              <Component {...pageProps}/>
                          
                        </Layout>
                      </AnimatePresence>
                    </PersistGate>

                  </Provider>
                  
                  
      );
  }
}

export default withReduxStore(MyApp)


