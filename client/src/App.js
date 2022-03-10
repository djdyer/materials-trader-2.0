import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import Auth from "./utils/auth";
import Home from "./pages/Home";
import Navigation from "../src/components/Navigation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ListingDetail from "./pages/ListingDetail";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/listingdetail/:id" component={ListingDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route render={() => <h1>Not Found!</h1>} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
