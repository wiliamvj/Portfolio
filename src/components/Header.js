import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isSticky: false, isOpenSidebar: false };
    this.openSidebar = this.openSidebar.bind(this);
    this.onHandleClickLink = this.onHandleClickLink.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleClickDocument);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleClickDocument);
  }

  openSidebar() {
    this.setState({ isOpenSidebar: true });
  }
  onHandleClickLink() {
    this.setState({ isOpenSidebar: false });
  }

  handleScroll = (e) => {
    if (window.scrollY > 10) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };
  handleClickDocument = (e) => {
    const { isOpenSidebar } = this.state;
    if (e.target.classList.contains("site-nav-backdrop")) {
      this.setState({ isOpenSidebar: false });
    }
  };
  render() {
    const { isSticky, isOpenSidebar } = this.state;
    const data = this.props.portfolioData;

    return (
      <header
        className={`site-header ${isSticky ? "site-header--sticky" : ""} `}
      >
        {" "}
        <div className="site-header__wrapper">
          {" "}
          <div className="site-header__brand">
            {" "}
            <Link
              className="site-header__link"
              activeClass="site-nav__link--active"
              to="home"
              href="#home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {" "}
              <img
                src={isSticky ? data.logo : data.logoWhite}
                alt=""
                className="site-header__logo"
              />{" "}
            </Link>{" "}
          </div>{" "}
          <div className="site-header__spacer"></div>{" "}
          <button
            type="button"
            className="site-header__btn-mobile"
            onClick={this.openSidebar}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.338"
              height="12"
              viewBox="0 0 18.338 12"
              className={`site-header__burger-icon ${
                isSticky ? "site-header__burger-icon--dark" : ""
              }`}
            >
              {" "}
              <g
                id="Group_6148"
                data-name="Group 6148"
                transform="translate(-288 -20)"
              >
                {" "}
                <rect
                  id="Rectangle_2400"
                  data-name="Rectangle 2400"
                  width="18.338"
                  height="2"
                  rx="1"
                  transform="translate(288 20)"
                  fill="#fff"
                ></rect>{" "}
                <rect
                  id="Rectangle_2401"
                  data-name="Rectangle 2401"
                  width="14.94"
                  height="2"
                  rx="1"
                  transform="translate(288 25)"
                  fill="#fff"
                ></rect>{" "}
                <rect
                  id="Rectangle_2402"
                  data-name="Rectangle 2402"
                  width="18.338"
                  height="2"
                  rx="1"
                  transform="translate(288 30)"
                  fill="#fff"
                ></rect>{" "}
              </g>{" "}
            </svg>{" "}
          </button>{" "}
          {isOpenSidebar && (
            <Fragment>
              {" "}
              <div className="site-nav-backdrop"></div>{" "}
            </Fragment>
          )}{" "}
          <div
            className={`site-sidebar ${isOpenSidebar ? "is-open" : ""}`}
          ></div>
          <ul
            className={`site-nav site-sidebar ${
              isOpenSidebar ? "is-open" : ""
            }`}
          >
            {" "}
            <li className="site-nav__list">
              {" "}
              <Link
                onClick={this.onHandleClickLink}
                className="site-nav__link"
                activeClass="site-nav__link--active"
                to="project"
                href="#project"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                {" "}
                Projects{" "}
              </Link>{" "}
            </li>{" "}
            <li className="site-nav__list">
              {" "}
              <Link
                onClick={this.onHandleClickLink}
                href="#skills"
                className="site-nav__link"
                activeClass="site-nav__link--active"
                to="skills"
                href="#skills"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="site-nav__link"
              >
                {" "}
                Skills{" "}
              </Link>{" "}
            </li>{" "}
            <li className="site-nav__list">
              {" "}
              <Link
                onClick={this.onHandleClickLink}
                href="#work"
                className="site-nav__link"
                activeClass="site-nav__link--active"
                to="work"
                href="#work"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="site-nav__link"
              >
                {" "}
                Works{" "}
              </Link>{" "}
            </li>{" "}
            <li className="site-nav__list">
              {" "}
              <Link
                onClick={this.onHandleClickLink}
                href="#contact"
                className="site-nav__link"
                activeClass="site-nav__link--active"
                to="contact"
                href="#contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className="site-nav__link"
              >
                {" "}
                Contact{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </header>
    );
  }
}

export default Header;
