import React from "react";

import "./Developers.css";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/NavigationBar";
import Container from "../../components/container/container";
// import { useNavigate } from "react-router-dom";

const Developers = (): React.ReactNode => {
  const navigate = useNavigate();

  return (<>
    <NavigationBar />
   <Container>
     <div className="developers-root">
      
      <h1>Developers Route</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
    </div>
   </Container>
   </>
  );
};

export default Developers;