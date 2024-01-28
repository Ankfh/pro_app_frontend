// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Config/routes/routes";
import PrivateRoute from "./customRoute/PrivateRoutes/PrivateRoutes";
import PublicRoute from "./customRoute/PublicRoutes/PublicRoutes";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} element={<PrivateRoute />}>
            <Route path={path} element={<Component />} />
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
