import Navbar from "./components/Navbar";
import ScrollStack from "./components/ScrollStack";
import SEO from "./components/SEO";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="relative">
      {/* 🔥 SEO GOES HERE (TOP LEVEL) */}
      <SEO
        title="Volna | Web Development & Digital Solutions Company"
        description="Volna is a professional web development company offering modern UI/UX design, frontend development, and scalable digital solutions."
        keywords="Volna, web development company, React development, UI UX design, frontend development"
        url="https://www.volna.co.in/"
      />

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
