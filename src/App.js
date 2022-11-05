import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/Add-review";
import Login from "./components/Login";
import RestaurantsList from "./components/Restaurant-list";
import Restaurant from "./components/Restaurant";
import ErrorBoundary from "./components/Errorboundary";
import Header from "./components/Header";


function App() {
  const initialUserState = {
    name: "",
    id: "",
    login: false
  };


  const [user, setUser] = React.useState(initialUserState);


  async function logout() {
    setUser(initialUserState)
  }




  return (
    <>
      <Header user={user} logout={logout} />
      <ErrorBoundary>
        <div className="container mt-3">
          <Routes>
            <Route path={"/"} element={<RestaurantsList />} />
            <Route path={"/restaurants"} element={<RestaurantsList />} />
            <Route path={"/restaurants/:id"} element={<Restaurant user={user} />}/>
            <Route path={"/restaurants/:id/review"} element={<AddReview user={user}/>} />
            <Route path={"/login"} element={<Login logout={logout} user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </ErrorBoundary>

    </>
  );
}

export default App;

