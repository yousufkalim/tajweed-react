// Init
import React, { useEffect } from "react";
import { ToastContainer, Flip } from "react-toastify";
import { UpdateStore } from "./StoreContext";
import { useLocation } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

import Index from "./routes/index";
import "./css/index.css";
// Component
function App() {
  const updateStore = UpdateStore();
  const { pathname } = useLocation();

  useEffect(() => {
    let user = localStorage.getItem("user");
    let token = localStorage.getItem("token");

    if (user && token) {
      user = JSON.parse(user);
      updateStore({
        user,
        token,
        loggedIn: true,
      });
    } else {
      window.location = "/login";
    }
  }, [pathname]);

  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />
      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
