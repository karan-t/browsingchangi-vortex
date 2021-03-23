import React, { Component } from "react";
import MainDashboard from './components/MainDashbaord'
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="main_dashboard">
        <div className="audio_container">
          <MainDashboard />
          </div>
      </div>
    );
  }
}
