import React from "react";
import Navbar from "./components/Navbar";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Marquee from "react-fast-marquee";
import Mar from "./components/Mar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Body1 />
      <Body2 />
      <Mar />
      <Footer />
    </div>
  );
}

export default App;
