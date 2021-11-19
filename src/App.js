import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cars from "./Components/Pages/Cars/Cars";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import AddCar from "./Components/Pages/AddCar/AddCar";
import CarDB from "./Components/Pages/CarDB/CarDB";
import UpdateItem from "./Components/Pages/UpdateItem/UpdateItem";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import UserReview from "./Components/Pages/Dashboard/UserReview/UserReview";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addCar">
              <AddCar></AddCar>
            </PrivateRoute>
            <PrivateRoute path="/cardb">
              <CarDB></CarDB>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <UserReview></UserReview>
            </PrivateRoute>
            <Route path="/cars">
              <Cars></Cars>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/car/update/:id">
              <UpdateItem></UpdateItem>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
