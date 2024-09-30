import {
  Route,
  Routes
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />

    </Routes>
  );
}

export default App;