import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Back Office Pannel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to="/users"
              >
                Users
              </Button>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to="/task-lists"
              >
                Task Lists
              </Button>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                to="/tasks"
              >
                Tasks
              </Button>
              <Button
                color="black"
                sx={{ textTransform: "capitalize" }}
                component={Link}
                onClick={onLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
