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
            <Route path="/cars">
              <Cars></Cars>
            </Route>
            <Route path="/addCar">
              <AddCar></AddCar>
            </Route>
            <Route path="/cardb">
              <CarDB></CarDB>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/purchase/:id">
              <Purchase></Purchase>
            </Route>
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
