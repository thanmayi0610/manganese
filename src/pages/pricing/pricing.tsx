import React from "react";

import "./pricing.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/NavigationBar";

const Pricing = (): React.ReactNode => {
  const navigate = useNavigate();

  return (
    <div className="pricing-root">
      <NavigationBar />
      <h1>Pricing Route</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default Pricing;