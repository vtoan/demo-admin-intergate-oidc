import React from "react";
import { Switch, Route } from "react-router-dom";
//page com
import Category from "./pages/category/Category";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import NotMatch from "./pages/errors/NotMatch";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Product} />
      <Route path="/categories" component={Category} />
      <Route path="/users" component={User} />
      <Route path="*" component={NotMatch} />
    </Switch>
  );
}
