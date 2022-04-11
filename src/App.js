import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
// import SeasionalMenu from "./pages/SeasionalMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="menu" element={<Menu />} />
      {/* <Route path="seasional-menu" element={<SeasionalMenu />} /> */}
    </Routes>
  );
}

export default App;
