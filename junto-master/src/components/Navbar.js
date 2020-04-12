import React from "react";
import { Link } from "gatsby";
//import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="logo-text">
              <h1 className="junto-toplogo">
                <a href="#jumpto">Junto</a>
              </h1>
            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                選ばれる理由
              </Link>
              <Link className="navbar-item" to="/products">
                ご利用の流れ
              </Link>
              <Link className="navbar-item" to="/blog">
                当社エージェントのご紹介
              </Link>
              <Link className="navbar-item" to="/contact">
                よくある質問
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                ITエンジニアお役立ちコラム
              </Link>
              <div>
                <Link className="btn" to="./">
                  無料相談を予約する
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
