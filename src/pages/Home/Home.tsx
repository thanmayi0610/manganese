// import React from 'react';
// import NavigationBar from "../components/NavigationBar"; // Ensure the file exists at this path

// const Home= (): React.ReactNode => {
//     return(
//         <div className="home-root">
//             <NavigationBar />
//             {/* <h1>Home</h1> */}
//         </div>

//     );
// };
// export default Home;
import React from "react";
import "./Home.css";
import NavigationBar from "../../components/NavigationBar";
import BearCounter from "./components/bears/bears";
import Tigers from "./components/tigers/tiger";

const Home = (): React.ReactNode => {
  return (
    <div className="home-root">
      <NavigationBar />
      <BearCounter />
    </div>
  );
};

export default Home;
