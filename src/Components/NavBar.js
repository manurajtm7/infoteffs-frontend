import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AlignRight, X } from "lucide-react";

import "./Styles/NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);

  let logOut = () => {
    localStorage.removeItem("authKey");
    navigate("/");
    window.location.reload();
  };

  const token = localStorage.getItem("authKey");

  useEffect(() => {
    // Function to handle clicks outside of the wrapper element
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // Toggle the state when clicked outside the navbar
        setToggle(false);
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]); // Removed toggle from dependency array to prevent unnecessary re-renders

  return (
    <nav>
      <div className="slider-icon" onClick={() => setToggle((prev) => !prev)}>
        {!toggle ? <AlignRight /> : <X />}
      </div>
      <Link to="/">
        <span className="home-logo weight-active">Infoteffs</span>
      </Link>

      <ul ref={ref} className={!toggle ? "nav-in-active" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {!token ? (
          <li>
            <ul>
              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/Register">Register</NavLink>
              </li>
            </ul>
          </li>
        ) : (
          <li>
            <ul>
              <li>
                <NavLink to={"/create"} id="create-post-link">Create post</NavLink>
              </li>
              <li>
                <NavLink to={"/community"}>Community</NavLink>
              </li>
              <li>
                <button className="logout-btn" onClick={logOut}>
                  Logout
                </button>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
