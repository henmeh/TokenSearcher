import React from "react";
// Style
import { GlobalStyle } from "./GlobalStyle";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/header";
// Views
import Home from "./views/HomeView/home";

import styled from "styled-components";

const Wrapper = styled.div`
  //display: grid;
  //grid-template-rows: 70px 50px 1fr 10px;
  //min-height: 97vh;
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <GlobalStyle />
      </Router>
    </Wrapper>
  );
};

export default App;
