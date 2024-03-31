// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Config/routes/routes";
import PrivateRoute from "./customRoute/PrivateRoutes/PrivateRoutes";
import PublicRoute from "./customRoute/PublicRoutes/PublicRoutes";
import SingUpContainer from "./components/SignUP/container/SingUpContainer";
import NavbarWapper from "./components/shared/NavbarWapper/UI/NavbarWapper";
import HomeContainer from "./components/Home/container/HomeContainer";
import LoginContainer from "./components/Login/container/LoginContainer";
import { CssProvider } from "./components/CssContext/context/CssContex";

const App = () => {
  const userid = localStorage.getItem("user_id");
  const [authenticated, setAuthenticated] = useState(userid ? true : false);

  return (
    <Router>
      <CssProvider>
        <NavbarWapper>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<HomeContainer />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<SingUpContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Route>
          </Routes>
        </NavbarWapper>
      </CssProvider>
    </Router>
  );
};

export default App;
