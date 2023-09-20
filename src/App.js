import React from "react";
import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import BrowserRouter
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your entire app with Router */}
      <Container className={"top_60"}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} lg={3} md={4}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Header />
            <Switch>
              <Route path="/Portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
