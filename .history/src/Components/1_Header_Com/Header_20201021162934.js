import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Todo_Icon from "../../Utiliz/Images/Todo_Icon.png";
import "./Header.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <div>
        <header className="">
          <nav className="navbar navbar-expand-ls navbar-dark bg-dark col">
            <div className="logo">
              <NavLink to="/">
                <p className="btn1">TO-DO LIST</p>
                <img src={Todo_Icon} alt="TODO" className="img1" />
              </NavLink>
            </div>

            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={(e) => this.handleToggle(e)}
            />
            <div className="nav">
              <ul className={`collaped ${isExpanded ? "is-expanded" : ""}`}>
                <NavLink to="/firstpage">
                  <button className="btn2">WeatherApp</button>
                </NavLink>
                <NavLink to="/secondpage">
                  <button>Navigation</button>
                </NavLink>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
