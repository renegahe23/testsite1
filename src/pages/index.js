import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-pro-react.scss?v=1.3.0"

// pages for this product
import AboutUsPage from "pages/AboutUsPage/AboutUsPage.jsx"
import BlogPostPage from "pages/BlogPostPage/BlogPostPage.jsx"
import BlogPostsPage from "pages/BlogPostsPage/BlogPostsPage.jsx"
import ComponentsPage from "pages/ComponentsPage/ComponentsPage.jsx"
import ContactUsPage from "pages/ContactUsPage/ContactUsPage.jsx"
import EcommercePage from "pages/EcommercePage/EcommercePage.jsx"
import LandingPage from "pages/LandingPage/LandingPage.jsx"
import LoginPage from "pages/LoginPage/LoginPage.jsx"
import PresentationPage from "pages/PresentationPage/PresentationPage.jsx"
import PricingPage from "pages/PricingPage/PricingPage.jsx"
import ProfilePage from "pages/ProfilePage/ProfilePage.jsx"
import ProductPage from "pages/ProductPage/ProductPage.jsx"
import ShoppingCartPage from "pages/ShoppingCartPage/ShoppingCartPage.jsx"
import SignupPage from "pages/SignupPage/SignupPage.jsx"
import ErrorPage from "pages/ErrorPage/ErrorPage.jsx"

let history = createMemoryHistory()

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce" component={EcommercePage} />
      <Route path="/home" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/shopping-cart" component={ShoppingCartPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>
)
