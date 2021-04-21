import React from "react";
import { Switch, Route } from "react-router-dom";
//page com
import Category from "./pages/category/Category";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product-detail/ProductDetail";
import NotMatch from "./pages/errors/NotMatch";
//authen
import SigninOidc from "./pages/auth/Signin-oidc";
import SignoutOidc from "./pages/auth/Signout-oidc";
import PrivateRoute from "./utils/protectedRoute";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/signout-oidc" component={SignoutOidc} />
      <Route path="/signin-oidc" component={SigninOidc} />

      <PrivateRoute exact path="/" component={Product} />
      <PrivateRoute path="/product/:id" component={ProductDetail} />
      <PrivateRoute path="/categories" component={Category} />
      <PrivateRoute path="/users" component={User} />
      <Route path="*" component={NotMatch} />
    </Switch>
  );
}
