import Navbar from "./components/Navbar";
import ScrollStack from "./components/ScrollStack";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="relative">
      <Navbar />

      <ScrollStack
        pages={[
          <Home />,
          <About />,
          <Service />,
          <Reviews />,
          <Contact />,
        ]}
      />
    </div>
  );
};

export default App;
