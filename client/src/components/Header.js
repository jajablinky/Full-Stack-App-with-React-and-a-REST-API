import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/degenacademy.png";

const Header = ({ context }) => {
  /**
   *  HEADER ---/
   *
   * Authorized user being accessed to display who is logged in.
   * Different parts of nav bar will show dependent if user is signed in or not
   */

  const authUser = context.authenticatedUser;

  const userVerify = (
    <svg
      width="24"
      height="24"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M2 20V19C2 15.134 5.13401 12 9 12V12"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
      <path
        d="M15.8038 12.3135C16.4456 11.6088 17.5544 11.6088 18.1962 12.3135V12.3135C18.5206 12.6697 18.9868 12.8628 19.468 12.8403V12.8403C20.4201 12.7958 21.2042 13.5799 21.1597 14.532V14.532C21.1372 15.0132 21.3303 15.4794 21.6865 15.8038V15.8038C22.3912 16.4456 22.3912 17.5544 21.6865 18.1962V18.1962C21.3303 18.5206 21.1372 18.9868 21.1597 19.468V19.468C21.2042 20.4201 20.4201 21.2042 19.468 21.1597V21.1597C18.9868 21.1372 18.5206 21.3303 18.1962 21.6865V21.6865C17.5544 22.3912 16.4456 22.3912 15.8038 21.6865V21.6865C15.4794 21.3303 15.0132 21.1372 14.532 21.1597V21.1597C13.5799 21.2042 12.7958 20.4201 12.8403 19.468V19.468C12.8628 18.9868 12.6697 18.5206 12.3135 18.1962V18.1962C11.6088 17.5544 11.6088 16.4456 12.3135 15.8038V15.8038C12.6697 15.4794 12.8628 15.0132 12.8403 14.532V14.532C12.7958 13.5799 13.5799 12.7958 14.532 12.8403V12.8403C15.0132 12.8628 15.4794 12.6697 15.8038 12.3135V12.3135Z"
        stroke="currentColor"
        stroke-width="1.5"
      />{" "}
      <path
        d="M15.3636 17L16.4546 18.0909L18.6364 15.9091"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
      <path
        d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </svg>
  );

  return (
    <>
      <div className="miniNav">
        This site is a demo made by Geoffrey Millar
        <a
          href="https://www.geoffreymillar.com"
          title="Geoffrey Millar"
          target="_blank"
          rel="noreferrer"
        >
          http://www.geoffreymillar.com
        </a>
      </div>
      <div className="header">
        <div className="bounds">
          <Link to="/">
            <img className="header--logo" src={logo} alt="degen academy logo" />
          </Link>
          <nav>
            {authUser ? (
              <>
                <span>
                  Welcome! {authUser.firstName}, {authUser.lastName}{" "}
                  {userVerify}
                </span>
                <Link to="/signout">Sign out</Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <button className="signup">Sign Up</button>
                </Link>
                <Link to="/signin">
                  <button className="signin">Sign In</button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
