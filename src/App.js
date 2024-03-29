import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import "./utils/utility-classes.css";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./configs/firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log("App.js props: ", this.props);

    return (
      <div className="app">
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                signInWithGoogle={this.props.signInWithGoogle}
                signInWithFacebook={this.props.signInWithFacebook}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                user={this.props.user}
                signOut={this.props.signOut}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
