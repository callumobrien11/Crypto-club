import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HubPage from "./pages/HubPage/HubPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import RatesPage from "./pages/RatesPage/RatesPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PostFormPage from "./pages/PostFormPage/PostFormPage";

class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        token = null
      } else {
        this.setState({ user: payload.user })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar setUserInState={this.setUserInState}/>
        {this.state.user ? (
          <Routes>
            <Route path="/" element={<HubPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/rates" element={<RatesPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/post/new" element={<PostFormPage />} />
          </Routes>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}

export default App;
