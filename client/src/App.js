import React from "react";
import ReactDom from "react-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./components/images/memories.png";
import Form from "./components/Form/Forms";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
